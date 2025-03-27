import React, { forwardRef } from 'react'
import { LanguageCode } from '@/constants/languages'
import Picture, { PictureProps } from '../Picture'
import ImageFileAnatomy from '../../models/ImageFileAnatomy'
import { useLanguage } from '@/contexts/Language'

export type LocalizedImageProps = Omit<PictureProps, 'languageCode'> & {
  languageCodes?: LanguageCode[];
  fallbackLanguageCode?: LanguageCode;
}

const LocalizedImage = forwardRef<HTMLImageElement, LocalizedImageProps>(
  function LocalizedImage(
    {
      languageCodes = [],
      fallbackLanguageCode = LanguageCode.EN,
      src,
      height = 100,
      width = 100,
      ...props
    },
    ref
  ) {
    const fileAnatomy = new ImageFileAnatomy(src)
    const { activeLanguage, hasDeterminedLanguage } = useLanguage()

    const internationalSrc = fileAnatomy.getLocalizedSrc(activeLanguage.code)
    const fallbackSrc = fileAnatomy.getLocalizedSrc(fallbackLanguageCode)
    const shouldRenderFallback = !languageCodes.includes(activeLanguage.code)

    if (!hasDeterminedLanguage) {
      return null
    }

    return (
      <Picture
        ref={ref}
        src={shouldRenderFallback ? fallbackSrc : internationalSrc}
        height={height}
        width={width}
        {...props}
      />
    )
  }
)

export default LocalizedImage
