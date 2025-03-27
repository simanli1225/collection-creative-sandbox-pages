import { useEffect, useRef, useState } from 'react'
import { useVideoControlsContext } from '@/components/Video/controls-context'
import { useInView, useReducedMotion } from 'framer-motion'

export default function useIsPlaying() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView( videoRef, { amount: 0.1 })
  const isReducedMotionEnabled = useReducedMotion()
  const { isPlaying, setIsPlaying, setCanPlay } = useVideoControlsContext()
  const [ autoplayRejected, setAutoplayRejected ] = useState( false )

  useEffect(() => {
    if ( !isReducedMotionEnabled ) {
      if ( inView ) {
        setIsPlaying( true )
      } else {
        setIsPlaying( false )
      }
    }
  }, [ inView, setIsPlaying, isReducedMotionEnabled, autoplayRejected ])

  useEffect(() => {
    if ( isPlaying ) {
      videoRef.current?.play().catch(() => {
        setAutoplayRejected( true )
        setIsPlaying( false )
      })
    } else {
      videoRef.current?.pause()
    }
  }, [ videoRef, isPlaying, setIsPlaying ])

  useEffect(() => {
    const videoElement = videoRef.current

    function handleCanPlay() {
      setCanPlay( true )
    }

    videoElement?.addEventListener( 'canplay', handleCanPlay )

    return () => {
      videoElement?.removeEventListener( 'canplay', handleCanPlay )
    }
  }, [ videoRef, setCanPlay ])

  return videoRef
}
