/* eslint-disable max-params */
const log = require( 'single-line-log' ).stdout

/**
 * Convert time in seconds to a pretty HH:MM:SS string
 * @param {Number} timeInSeconds
 * @returns {String} HH:MM:SS
 */
const toHHMMSS = ( timeInSeconds ) => {
  const secNum = parseInt( timeInSeconds, 10 ) // don't forget the second param
  let hours = Math.floor( secNum / 3600 )
  let minutes = Math.floor(( secNum - ( hours * 3600 )) / 60 )
  let seconds = secNum - ( hours * 3600 ) - ( minutes * 60 )

  if ( hours < 10 ) {hours = '0' + hours}
  if ( minutes < 10 ) {minutes = '0' + minutes}
  if ( seconds < 10 ) {seconds = '0' + seconds}

  return hours + ':' + minutes + ':' + seconds
}

/**
 * Return a prettified file size.
 * @param {Number} bytes
 * @returns {String} Pretty file size. e.g. 4MB
 */
const formatBytes = ( bytes ) => {
  const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB' ]
  if ( bytes === 0 ) {return 'n/a'}
  const i = parseInt( Math.floor( Math.log( bytes ) / Math.log( 1024 )), 10 )
  if ( i === 0 ) {return `${ bytes } ${ sizes[ i ] })`}
  return `${ ( bytes / ( 1024 ** i )).toFixed( 1 ) } ${ sizes[ i ] }`
}

/**
 * Return a string to output for the list of big images.
 * @param {Array} bigImages Images to be printed in the big images list (>=4MB)
 * @param {String} extension File extension
 * @returns {String} Output for big images list
 */
const getBigImagesOutput = ( bigImages, extension ) => {
  let bigImagesOutput = '\n\n'

  if ( bigImages.length > 0 ) {
    bigImagesOutput += `Original ${ extension } images over 4MB: `

    bigImages.forEach(({ originalFileName, originalFileSize }) => {
      bigImagesOutput += `\n ${ originalFileName }`
      bigImagesOutput += `\n          ${ formatBytes( originalFileSize ) }`
    })
  }

  return bigImagesOutput
}

/**
 * Return pretty elapsed time string.
 * @param {Array} elapsedTime Result of process.hrtime(startTime)
 * @returns {String} Pretty elapsed time in HH:MM:SS format
 */
function getPrettyElapsedTime( elapsedTime ) {
  const truncatedElapsedTime = Number(
    `${ elapsedTime[ 0 ] }.${ elapsedTime[ 1 ].toString().slice( 0, 2 ) }`
  )

  const prettyElapsedTime = toHHMMSS( truncatedElapsedTime )

  return prettyElapsedTime
}

/**
 * Return pretty elapsed time and relative estimated time remaining.
 * @param {Number} startTime result of process.hrtime()
 * @param {Number} currentIndex index the loop is currently on
 * @param {Number} totalIndices length of array the loop is going through
 * @returns {Object} Keys are elapsedTime and estimatedTimeRemaining with values
 *  for their respective HH:MM:SS formats
 */
const getPrettyElapsedTimeAndEstimatedTimeRemaining = (
  startTime,
  currentIndex,
  totalIndices
) => {
  const elapsedTime = process.hrtime( startTime )
  const truncatedElapsedTime = Number(
    `${ elapsedTime[ 0 ] }.${ elapsedTime[ 1 ].toString().slice( 0, 2 ) }`
  )
  const prettyElapsedTime = toHHMMSS( truncatedElapsedTime )

  const estimatedTotalTime = (
    truncatedElapsedTime * totalIndices
  ) / currentIndex

  const prettyEstimatedTimeRemaining = toHHMMSS(
    estimatedTotalTime - truncatedElapsedTime
  )

  return {
    elapsedTime: prettyElapsedTime,
    estimatedTimeRemaining: prettyEstimatedTimeRemaining,
  }
}

/**
 * Log some real-time staging information
 * @param {Number} startTime result of process.hrtime()
 * @param {Number} currentIndex current index the loop is on
 * @param {Number} totalImagesToConsiderForStaging total indices in staging arr
 * @param {String} currentImageName Current input path file name
 */
const stagingLog = (
  startTime,
  currentIndex,
  totalImagesToConsiderForStaging,
  currentImageName,
) => {
  const progressPercentage = Number(
    ( currentIndex / totalImagesToConsiderForStaging ) * 100
  ).toFixed( 2 )

  const {
    elapsedTime,
    estimatedTimeRemaining,
  } = getPrettyElapsedTimeAndEstimatedTimeRemaining(
    startTime,
    currentIndex,
    totalImagesToConsiderForStaging
  )

  log(
    `
Staging progress: ${ progressPercentage }% (${
  currentIndex
} / ${
  totalImagesToConsiderForStaging
} total images)

Elapsed time:                 ${ elapsedTime }
Estimated time remaining:     ${ estimatedTimeRemaining }

Determining if file needs to be resized or copied: \n\t${ currentImageName }
`
  )
}

/**
 * Log real time progress of the resizing loop
 * @param {Number} startTime result of process.hrtime()
 * @param {Number} imgIndex current index of loop
 * @param {Number} totalImages total indices in loop
 * @param {Object} imgObject Result of getImagesToWrite() function
 * @param {Number} totalBytesWritten
 * @param {String} extension file extension of current image
 * @param {String} prepend String to prepend to the entire log (e.g. result of
 *  previous output)
 */
const progressLog = (
  startTime,
  imgIndex,
  totalImages,
  totalImagesWebp,
  imgObject,
  totalBytesWritten,
  extension,
  prepend = ''
) => {
  const progressPercentage = Number(
    ( imgIndex / totalImages ) * 100
  ).toFixed( 2 )

  const {
    elapsedTime,
    estimatedTimeRemaining,
  } = getPrettyElapsedTimeAndEstimatedTimeRemaining(
    startTime,
    imgIndex,
    totalImages
  )

  log( `${ prepend }
Progress (${ extension }): ${ progressPercentage }% (${
  imgIndex
} / ${
  totalImages + totalImagesWebp
} total ${ extension } images)

Elapsed time:                 ${ elapsedTime }
Estimated time remaining:     ${ estimatedTimeRemaining }

Total data size written:      ${ formatBytes( totalBytesWritten ) }

Generating ${ imgObject.prettyName }
` )
}

/**
 * Print the finished information.
 * @param {Number} totalJPGs
 * @param {Number} totalWebpJPGs
 * @param {Number} totalJPGBytesWritten
 * @param {Array} bigJPGImages
 * @param {Array} jpgElapsedTime Result of process.hrtime(startTime)

 * @param {Number} totalPNGs
 * @param {Number} totalWebpPNGs
 * @param {Number} totalPNGBytesWritten
 * @param {Array} bigPNGImages
 * @param {Array} pngElapsedTime Result of process.hrtime(startTime)

 * @param {Number} totalSVGs
 * @param {Number} totalMP4s
 */
const finishedLog = (
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

  totalSVGs,
  totalMP4s
) => {
  let output = ''

  if ( totalJPGs + totalWebpJPGs > 0 ) {
    const webpJPGLog = totalWebpJPGs > 0 ? ` and ${ totalWebpJPGs } WEBP lossy` : ''
    output += `
      Generated ${ totalJPGs } JPG${ webpJPGLog } images.
      Total time: ${ getPrettyElapsedTime( jpgElapsedTime ) }
      Total data: ${ formatBytes( totalJPGBytesWritten ) }\n
    `
  }

  if ( totalPNGs + totalWebpPNGs > 0 ) {
    const webpPNGLog = totalWebpPNGs > 0 ? ` and ${ totalWebpJPGs } WEBP lossless` : ''
    output += `
      Generated ${ totalPNGs } PNG${ webpPNGLog } images.
      Total time: ${ getPrettyElapsedTime( pngElapsedTime ) }
      Total data: ${ formatBytes( totalPNGBytesWritten ) }\n
    `
  }

  if ( totalSVGs > 0 ) {
    output += `Copied ${ totalSVGs } SVGs.\n`
  }

  if ( totalMP4s > 0 ) {
    output += `Copied ${ totalMP4s } MP4s.\n`
  }

  if ( bigJPGImages.length > 0 ) {
    output += getBigImagesOutput( bigJPGImages, 'JPG' )
  }

  if ( bigPNGImages.length > 0 ) {
    output += getBigImagesOutput( bigPNGImages, 'PNG' )
  }

  log( output )
}

/**
 * Print the result of nothing happening after testing whether images should be
 * staged.
 * @param {Array} bigJPGImages
 */
const emptyFinishedLog = ( bigJPGImages, bigPNGImages ) => {
  log( `
No image files changed.

${ getBigImagesOutput( bigJPGImages, 'JPG' ) }

${ getBigImagesOutput( bigPNGImages, 'PNG' ) }` )
}

module.exports = {
  stagingLog,
  progressLog,
  finishedLog,
  emptyFinishedLog,
  getPrettyElapsedTime,
  formatBytes,
}
