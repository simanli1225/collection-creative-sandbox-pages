export default function getLocalizedFilePath( src: string, languageCode: string ) {
  if ( !src || !languageCode ) {return src}

  const splitByFolder = src.split( '/' )
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const filename = splitByFolder.pop()!
  const filenameSplit = filename.split( '.' )
  const file = filenameSplit[ 0 ]
  const extension = filenameSplit[ 1 ]
  const folder = splitByFolder.join( '/' )

  return `${ folder }/${ languageCode }/${ file }.${ extension }`
}
