import React from 'react'
import VideoBase from './VideoBase'
import { LanguageCode } from '@/constants/languages'
import Controls from './Controls'
import Poster from './Poster'
import { VideoControlsProvider } from './controls-context'
import { useLanguage } from '@/contexts/Language'

type LocalizedVideoProps = React.ComponentProps<typeof VideoBase> & {
  languageCodes?: LanguageCode[];
  fallbackLanguageCode?: LanguageCode;
}

function Video({
  languageCodes,
  fallbackLanguageCode = LanguageCode.EN,
  children,
  ...rest
}: LocalizedVideoProps ) {
  const { activeLanguage, hasDeterminedLanguage } = useLanguage()

  if ( languageCodes ) {
    const shouldRenderFallback = !languageCodes.includes(
      activeLanguage.code
    )

    if ( !hasDeterminedLanguage ) {
      return null
    }

    return (
      <VideoBase
        languageCode={
          shouldRenderFallback ? fallbackLanguageCode : activeLanguage.code
        }
        {...rest}
      >
        {children}
      </VideoBase>
    )
  }

  return (
    <VideoBase {...rest}>
      {children}
    </VideoBase>
  )
}

Video.Poster = Poster
Video.Controls = Controls
Video.ControlsProvider = VideoControlsProvider

export default Video
