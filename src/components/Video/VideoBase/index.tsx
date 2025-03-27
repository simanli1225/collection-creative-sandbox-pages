import React from 'react'
import { LanguageCode } from '@/constants/languages'
import VideoElement from '@/components/Video/VideoElement'
import { VideoControlsProvider, defaultValue, useVideoControlsContext } from '@/components/Video/controls-context'
import { VideoLanguageProvider } from '@/components/Video/language-context'
import classNames from 'classnames'
import './index.less'

export type VideoProps = {
  className?: string;
  src: string;
  loop?: boolean;
  languageCode?: LanguageCode;
  children?: React.ReactNode;
}

function Video({
  className,
  src,
  loop = true,
  languageCode,
  children,
}: VideoProps ) {
  const videoControlsContext = useVideoControlsContext()

  const videoElement = (
    <VideoLanguageProvider languageCode={languageCode}>
      <div
        className={classNames( 'video-base', className )}
      >
        <VideoElement src={src} loop={loop} />
        {children}
      </div>
    </VideoLanguageProvider>
  )

  if ( videoControlsContext !== defaultValue ) {
    return videoElement
  }

  return (
    <VideoControlsProvider>{videoElement}</VideoControlsProvider>
  )
}

export default Video
