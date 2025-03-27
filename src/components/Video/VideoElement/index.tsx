import React from 'react'
import useIsPlaying from './useIsPlaying'
import { useVideoLanguageContext } from '@/components/Video/language-context'
import getLocalizedFilePath from '@/components/Video/getLocalizedFilePath'
import './index.less'
// import { CDN } from '@/constants'

type VideoProps = {
  src: string;
  loop: boolean;
}

export default function Video({ src, loop }: VideoProps) {
  const videoRef = useIsPlaying()
  const languageCode = useVideoLanguageContext()
  const localizedSrc = getLocalizedFilePath(src, languageCode)

  return (
    <video
      className="video-base__video"
      ref={videoRef}
      loop={loop}
      muted
      playsInline
      disablePictureInPicture
      preload="none"
    >
      <source src={`${localizedSrc}`} type="video/mp4" />
    </video>
  )
}
