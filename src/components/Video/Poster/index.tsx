import React from 'react'
import Image from '@/components/Image'
import { useVideoControlsContext } from '@/components/Video/controls-context'
import { useVideoLanguageContext } from '@/components/Video/language-context'
import getLocalizedFilePath from '@/components/Video/getLocalizedFilePath'
import classNames from 'classnames'
import './index.less'

type PosterProps = Omit<React.ComponentProps<typeof Image>, 'alt'> & {
  alt?: string;
}

function Poster({
  className,
  src,
  alt = '',
  ...rest
}: PosterProps ) {
  const { canPlay } = useVideoControlsContext()
  const languageCode = useVideoLanguageContext()
  const localizedPoster = getLocalizedFilePath( src, languageCode )

  return (
    <Image
      className={classNames( 'video-base__poster', {
        'video-base__poster--hide': canPlay,
      }, className )}
      src={localizedPoster}
      alt={alt}
      {...rest}
    />
  )
}

Poster.displayName = 'Video.Poster'

export default Poster
