import React from 'react'
import { useVideoControlsContext } from '@/components/Video/controls-context'
import classNames from 'classnames'
import strings from './strings'
import './index.less'

const playIcon = 'M21 15L12 20L12 10L21 15Z'
const pauseIcon = 'M11 10h3v10h-3zM16 10h3v10h-3z'

export type ControlsProps = {
  className?: string;
  isLight?: boolean;
  hasBlur?: boolean;
}

function Controls({
  className,
  isLight = false,
  hasBlur = false,
}: ControlsProps ) {
  const { isPlaying, setIsPlaying } = useVideoControlsContext()

  return (
    <button
      className={classNames( 'video-base__control', className )}
      onClick={() => setIsPlaying( !isPlaying )}
      aria-pressed={isPlaying}
      aria-label={strings.playVideo}
    >
      <svg
        className={classNames( 'video-base__button-svg', {
          'video-base__button-svg--light': isLight,
          'video-base__button-svg--has-blur': hasBlur,
        })}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={isPlaying ? pauseIcon : playIcon} fill="white" />
      </svg>
    </button>
  )
}

Controls.displayName = 'Video.Controls'

export default Controls
