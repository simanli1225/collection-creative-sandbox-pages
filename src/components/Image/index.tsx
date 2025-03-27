import React, { forwardRef } from 'react'
import Picture from './components/Picture'
import LocalizedImage, { LocalizedImageProps } from './components/LocalizedImage'
import ImageFileAnatomy, { ImageFileExtension } from './models/ImageFileAnatomy'

const Image = forwardRef<HTMLImageElement, LocalizedImageProps>(
  function Image({ languageCodes, ...props }, ref ) {
    if ( languageCodes ) {
      return (
        <LocalizedImage
          ref={ref}
          languageCodes={languageCodes}
          {...props}
        />
      )
    }

    return (
      <Picture
        ref={ref}
        {...props}
      />
    )

  }
)

export default Image

export {
  ImageFileAnatomy,
  ImageFileExtension,
}
