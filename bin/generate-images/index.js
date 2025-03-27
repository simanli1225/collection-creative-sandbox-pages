const sharp = require('sharp')
const glob = require('glob')
const fs = require('fs-extra')
const path = require('path')
const {
  stagingLog,
  progressLog,
  finishedLog,
  emptyFinishedLog,
  getPrettyElapsedTime,
  formatBytes,
} = require('./output')
const { execSync } = require('child_process')

/**
 *
 * Execution starts at the `populateDistImages` at the bottom of the file
 *
 */

const SPECIFIC_DIR =
  process.argv[2] && process.argv[2] !== '--quiet' ? process.argv[2] : ''

// Used on Bamboo to quiet the generate:images output so the logs aren't
// cluttered with progress output.
//
// Use:
// `npm run generate:images -- --quiet`
// or
// `npm run generate:images pages/example-page -- --quiet`
const SHOULD_PRINT_OUTPUT = !process.argv.find((arg) => arg === '--quiet')

const ROOT_PATH = `${__dirname}/../..`
const DIST_PATH = `${ROOT_PATH}/dist`
const ASSETS_PATH = `images/${SPECIFIC_DIR}`
const INPUT_DIRECTORY = `${ROOT_PATH}/${ASSETS_PATH}`
const OUTPUT_DIRECTORY = `${DIST_PATH}/${ASSETS_PATH}`
const ARTIFACTS_ASSETS_PATH = `${DIST_PATH}/.cached-assets`
const IMAGE_SIZES = [100, 300, 500, 750, 1000, 1500, 2500]

const programStartTime = process.hrtime()

/**
 * Returns a string for the image name with the size suffix
 * @param {String} img Image path
 * @param {Number} size Image size (comes from IMAGE_SIZES array)
 */
/*also read inside /image*/
// const getImageOutputName = ( img, size ) => {
//   const assetsSplit = img.split( ASSETS_PATH )
//   const inputSplit = assetsSplit[ assetsSplit.length - 1 ]
//   const defaultOutputFileName = `${ OUTPUT_DIRECTORY }${ inputSplit }`

//   if ( defaultOutputFileName.endsWith( '.jpg' ) ||
//         defaultOutputFileName.endsWith( '.png' )) {
//     const extension = path.extname( img )
//     const outputFileName = defaultOutputFileName.split( extension )[ 0 ]
//     const finalOutputName = `${ outputFileName }-${ size }w${ extension }`

//     return finalOutputName
//   }

//   return defaultOutputFileName

// }

const getImageOutputName = (img, size) => {
  const relativePath = path.relative(INPUT_DIRECTORY, img) // 获取相对于 `/images/` 的路径
  const outputFileName = path.join(OUTPUT_DIRECTORY, relativePath) // 确保输出路径包含子文件夹
  const extension = path.extname(img)

  if (extension === '.jpg' || extension === '.png' || extension === '.gif') {
    return `${outputFileName.replace(extension, '')}-${size}w${extension}`
  }

  return outputFileName
}

/**
 * Returns an array of objects with information about what final images should
 * be built. Also returns an array of image names that are over 4MB to be
 * printed at the end of the logs so the user knows if their images are
 * oversized.
 *
 * Schema for returned image object:
 * {
 *  originalFileName: original input file path
 *  name: result of the final output name (with size suffix)
 *  width: image size (from IMAGE_SIZES array)
 *  prettyName: the name of the input file path but without the prefixed
 *    `/Users/blah/../../` that comes from the ROOT_PATH variable
 * }
 *
 * @param {Array} images Array of strings for image path names (input files)
 */
const getImagesToWrite = async (images) => {
  const imagesToWrite = []
  const bigImages = []

  for (let i = 0; i < images.length; i++) {
    const fileMetadata = await sharp(images[i]).metadata()
    const fileDefaultWidth = fileMetadata.width
    const fileStats = await fs.stat(images[i])
    const fileSize = fileStats.size

    // 4MB
    if (fileSize > 4194304) {
      bigImages.push({
        originalFileName: images[i],
        originalFileSize: fileSize,
      })
    }

    for (let s = 0; s < IMAGE_SIZES.length; s++) {
      const finalOutputName = getImageOutputName(images[i], IMAGE_SIZES[s])
      const extension = path.extname(finalOutputName)
      const finalWebpOutputName = `${finalOutputName.split(extension)[0]}.webp`
      const minimizedWidth = IMAGE_SIZES[s]
      const widthToResizeTo =
        fileDefaultWidth <= minimizedWidth ? fileDefaultWidth : minimizedWidth

      imagesToWrite.push({
        originalFileName: images[i],
        name: finalOutputName,
        width: widthToResizeTo,
        prettyName: `images${finalOutputName.split('/images')[1]}`,
      })

      imagesToWrite.push({
        originalFileName: images[i],
        name: finalWebpOutputName,
        width: widthToResizeTo,
        prettyName: `images${finalWebpOutputName.split('/images')[1]}`,
      })
    }
  }

  return { imagesToWrite, bigImages }
}

/**
 * Loops through a list of images and creates their responsive sizes.
 * @param {Array} images Input image path names
 * @param {Number} startTime Result of a process.hrtime() call
 * @param {String} progressLogPrepend String to prepend the progress log with.
 *    For example, the result of the previous operation.
 * @returns {Object} Object with keys totalImages, totalBytesWritten, and
 *    bigImages.
 */
const generateResizedImages = async (
  images,
  startTime,
  progressLogPrepend = ''
) => {
  let totalBytesWritten = 0
  let totalImages = 0
  let totalImagesWebp = 0

  const { imagesToWrite, bigImages } = await getImagesToWrite(images)

  for (let imageIndex = 0; imageIndex < imagesToWrite.length; imageIndex++) {
    const img = imagesToWrite[imageIndex]

    let buffer = null
    if (img.originalFileName.endsWith('.jpg')) {
      if (img.prettyName.endsWith('.jpg')) {
        buffer = await sharp(`${ROOT_PATH}/${img.originalFileName}`)
          .resize({ width: img.width })
          .jpeg({ quality: 75, progressive: true })
          .toBuffer({ resolveWithObject: true })
        totalImages += 1
      } else if (img.originalFileName.endsWith('.gif')) {
        try {
          execSync(
            `gifsicle --resize-width ${img.width} ${ROOT_PATH}/${img.originalFileName} -o ${img.name}`,
            { stdio: 'inherit' }
          )
          totalImages += 1
        } catch (error) {
          console.error(`❌ GIF processed failed: ${error.message}`)
        }
      } else if (img.prettyName.endsWith('.webp')) {
        buffer = await sharp(`${ROOT_PATH}/${img.originalFileName}`)
          .resize({ width: img.width })
          .webp({ quality: 90 })
          .toBuffer({ resolveWithObject: true })
        totalImagesWebp += 1
      }
    } else if (img.prettyName.endsWith('.png')) {
      buffer = await sharp(`${ROOT_PATH}/${img.originalFileName}`)
        .resize({ width: img.width })
        .toBuffer({ resolveWithObject: true })

      totalImages += 1
    } else if (img.prettyName.endsWith('.webp')) {
      buffer = await sharp(`${ROOT_PATH}/${img.originalFileName}`)
        .resize({ width: img.width })
        .webp({ quality: 90, lossless: true })
        .toBuffer({ resolveWithObject: true })

      totalImagesWebp += 1
    }

    totalBytesWritten += buffer.info.size

    fs.outputFileSync(img.name, buffer.data)

    if (SHOULD_PRINT_OUTPUT) {
      progressLog(
        startTime,
        imageIndex,
        totalImages,
        totalImagesWebp,
        img,
        totalBytesWritten,
        path.extname(img.originalFileName),
        progressLogPrepend
      )
    }
  }

  return { totalImages, totalImagesWebp, totalBytesWritten, bigImages }
}

/**
 * Copy the array of images to their respective folder in dist. Used for SVG and
 * MP4 files because these files are not resized or re-generated.
 * @param {Array} images Input image path names
 * @returns {Object} Object with key totalImagesCopied
 */
const copyFilesToDist = async (images) => {
  let totalImagesCopied = 0

  for (let i = 0; i < images.length; i++) {
    const image = images[i]

    const newFileName = getImageOutputName(image)
    const fileExists = await fs.pathExists(newFileName)

    if (!fileExists) {
      fs.copySync(image, newFileName)
      totalImagesCopied++
    }
  }

  return { totalImagesCopied }
}

/**
 * Get all JPG, PNG, SVG, and MP4 files in the input directory.
 * @returns {Array} Valid files in input directory to be considered for putting
 *    in dist folder
 */
/*also read inside the /image*/
// const getDirectoryImages = () => {
//   return glob.sync( `${ INPUT_DIRECTORY }/**/*.+(jpg|png|svg|mp4)` )
// }
const getDirectoryImages = () => {
  return glob.sync(`${INPUT_DIRECTORY}/**/*.+(jpg|png|svg|mp4)`, {
    nodir: true,
  })
}

/**
 * Find and read the image-history.json file. If it doesn't exist, return an
 * empty object.
 * @returns {Object} Either the content of image-history.json or an empty object
 */
const getImageHistoryJSON = () => {
  const imageHistoryJSONFile = fs.readJSONSync(
    `${ARTIFACTS_ASSETS_PATH}/image-history.json`,
    { throws: false }
  )

  return imageHistoryJSONFile || {}
}

/**
 * Get the last commit hash that changed the file.
 * @param {String} filepath File to retrieve the last commit hash from
 * @returns {String} Hash of the commit that last changed this file
 */
const getLastCommitHash = (filepath) => {
  return execSync(`git log -n 1 --pretty=format:%H -- ${filepath}`).toString()
}

/**
 * Get all images that require either resizing or copying into dist.
 * A staged file technically means it either doesn't exist in
 * the history or it doesn't live in dist.
 * @param {Object} imageHistory Keys are input file paths and values are commit
 *  hashes of the last commit that changed this key.
 * @returns {Array} Input path names that are set to be resized / copied
 */
const getStagedImages = (imageHistory) => {
  const directoryImages = getDirectoryImages()

  const stagedImages = []

  const stagingStartTime = process.hrtime()

  directoryImages.forEach((image, imageIndex) => {
    const cleanedImagePath = `images${image.split('/images')[1]}`

    if (SHOULD_PRINT_OUTPUT) {
      stagingLog(
        stagingStartTime,
        imageIndex,
        directoryImages.length,
        cleanedImagePath
      )
    }

    // Get all images not in image history (recently added images)
    if (!imageHistory[cleanedImagePath]) {
      stagedImages.push(cleanedImagePath)
    } else {
      let shouldStage = false

      // Get all images from image history that are not in dist
      IMAGE_SIZES.forEach((imageSize) => {
        const sizePath = getImageOutputName(cleanedImagePath, imageSize)
        const fileExists = fs.existsSync(sizePath)

        if (!fileExists) {
          shouldStage = true
        }
      })

      if (shouldStage) {
        stagedImages.push(cleanedImagePath)
      } else {
        const lastCommitHash = getLastCommitHash(image)

        if (lastCommitHash !== imageHistory[cleanedImagePath]) {
          stagedImages.push(cleanedImagePath)
        }
      }
    }
  })

  return stagedImages
}

/**
 * Loop through an array of staged images and group them by their filetype.
 * This is just a helper function so its easier to pass a filtered array to the
 * resize or copy functions.
 * @param {Array} stagedImages result of calling getStagedImages(), array of
 *  file paths to consider for resizing or copying into dist.
 * @returns {Object} Keys are jpg, png, svg, mp4 (file types) and values are an
 *  array of these input file paths that match this filetype.
 */
const groupImagesByExtension = (stagedImages) => {
  const groupedImages = {
    jpg: [],
    png: [],
    gif: [],
    svg: [],
    mp4: [],
  }

  stagedImages.forEach((image) => {
    const dotSplit = image.split('.')
    const extension = dotSplit[dotSplit.length - 1]

    groupedImages[extension].push(image)
  })

  return groupedImages
}

/**
 * Merge the old history JSON with a new version of it with changes from all of
 * the staged files.
 * @param {Object} oldImageHistory Contents of image-history.json
 * @param {Array} stagedImages List of images staged to be either resized or
 *  copied into the dist directory.
 */
const createImageHistoryJSON = (oldImageHistory, stagedImages) => {
  const imageHistory = oldImageHistory

  stagedImages.forEach((image) => {
    let commitHash = ''

    if (oldImageHistory[image]) {
      commitHash = oldImageHistory[image]
    } else {
      commitHash = getLastCommitHash(image)
    }

    imageHistory[image] = commitHash
  })

  fs.outputFileSync(
    `${ARTIFACTS_ASSETS_PATH}/image-history.json`,
    JSON.stringify(imageHistory)
  )
}

/**
 * Remove all un-resized JPG and PNG files from dist. This function exists
 * because, in our build order on our deploy site, the `build` script from
 * Squarespace runs on the template first. This `build` script copies our
 * original assets into the `dist/images` folder. We don't care about the
 * original assets because they are never used. So instead of copying/
 * downloading/pushing a ton of unused assets, let's delete them before doing
 * anything else.
 *
 * To determine if the asset should be deleted, it first only gathers JPG and
 * PNG images (since SVG and MP4 assets are just copied over), and then
 * determines if these assets have their responsive image suffix. If they don't
 * have the suffix, we can assume they haven't been resized and are the original
 * assets (which go unused).
 */
function emptyOriginalImagesFromDist() {
  const imagesInDist = glob.sync(`${OUTPUT_DIRECTORY}/**/*.+(jpg|png)`)

  imagesInDist.forEach((image) => {
    const imageSlashSplit = image.split('/')
    const imageName = imageSlashSplit[imageSlashSplit.length - 1]

    const extension = path.extname(imageName)
    const imageNameWithoutExtension = imageName.split(extension)[0]

    let shouldDelete = true

    for (
      let imageSizeIndex = 0;
      imageSizeIndex < IMAGE_SIZES.length;
      imageSizeIndex++
    ) {
      const imageSize = IMAGE_SIZES[imageSizeIndex]

      if (imageNameWithoutExtension.endsWith(`-${imageSize}w`)) {
        shouldDelete = false
        break
      }
    }

    if (shouldDelete) {
      fs.removeSync(image)
    }
  })
}

/**
 * This is the main function of the script.
 *
 * First, remove the original images from `dist/images/` that may have been
 * copied in by the repo's build script.
 *
 * Second, read the image history file in `dist/.cached-` and, with the
 * contents of that file, decide what images should be staged for either
 * resizing or copying into dist. Group these staged images by their filetype.
 * The next steps (resizing and/or copying) may be skipped completely if the
 * staged images don't pertain to that step. For example, if there are no JPG
 * images staged for resizing, that step is skipped. Staging is determined by
 * deciding if that image does not exist in the `image-history.json` file or
 * does not exist in dist.
 *
 * JPGs are then looped through and their respective responsive images are
 * generated into the `dist/images/` folder.
 *
 * PNGs are then generated the same way JPGs were generated.
 *
 * SVGs and MP4s are then copied into dist. These are not transformed in any
 * way and are copied directly from the source into dist.
 *
 * Then, write to the image history file in case there were any staged changes.
 * This prevents us from unnecessarily creating responsive image assets or
 * copying files in the future.
 *
 * Then, print out the result of the script.
 */
const populateDistImages = async () => {
  emptyOriginalImagesFromDist()

  const imageHistory = getImageHistoryJSON()

  const stagedImages = getStagedImages(imageHistory)

  const groupedImages = groupImagesByExtension(stagedImages)
  const gifs = groupedImages.gif
  const jpgs = groupedImages.jpg
  const {
    totalImages: totalJPGs,
    totalImagesWebp: totalWebpJPGs,
    totalBytesWritten: totalJPGBytesWritten,
    bigImages: bigJPGImages,
  } = await generateResizedImages(jpgs, programStartTime)
  const jpgElapsedTime = process.hrtime(programStartTime)
  const webpLog = totalWebpJPGs > 0 ? ` and ${totalWebpJPGs} WEBP lossy` : ''

  const progressPrependFromJPG = `
    Generated ${totalJPGs} JPG${webpLog} images.
    Total time: ${getPrettyElapsedTime(jpgElapsedTime)}
    Total data: ${formatBytes(totalJPGBytesWritten)}\n
  `

  const pngStartTime = process.hrtime()
  const pngs = groupedImages.png
  const {
    totalImages: totalPNGs,
    totalImagesWebp: totalWebpPNGs,
    totalBytesWritten: totalPNGBytesWritten,
    bigImages: bigPNGImages,
  } = await generateResizedImages(pngs, pngStartTime, progressPrependFromJPG)
  const pngElapsedTime = process.hrtime(pngStartTime)

  // process gifs as well
  const gifStartTime = process.hrtime()
  const {
    totalImages: totalGIFs,
    totalBytesWritten: totalGIFBytesWritten,
    bigImages: bigGIFImages,
  } = await generateResizedImages(gifs, gifStartTime)
  const gifElapsedTime = process.hrtime(gifStartTime)

  const svgs = groupedImages.svg
  const { totalImagesCopied: totalSVGs } = await copyFilesToDist(svgs)

  const mp4s = groupedImages.mp4
  const { totalImagesCopied: totalMP4s } = await copyFilesToDist(mp4s)

  if (stagedImages.length > 0) {
    createImageHistoryJSON(imageHistory, stagedImages)
    fs.copySync(
      OUTPUT_DIRECTORY,
      `${ARTIFACTS_ASSETS_PATH}/images/${SPECIFIC_DIR}`
    )
  }

  if (totalJPGs + totalPNGs + totalSVGs + totalMP4s === 0) {
    emptyFinishedLog(bigJPGImages, bigPNGImages)
  } else {
    finishedLog(
      totalJPGs,
      totalWebpJPGs,
      totalJPGBytesWritten,
      bigJPGImages,
      jpgElapsedTime,

      totalPNGs,
      totalWebpPNGs,
      totalPNGBytesWritten,
      bigPNGImages,
      pngElapsedTime,

      totalGIFs, // gif log
      totalSVGs,
      totalMP4s
    )
  }
}

populateDistImages()
