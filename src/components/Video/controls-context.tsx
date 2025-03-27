import React, { createContext, useContext, useState } from 'react'

type VideoControlsContext = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  canPlay: boolean;
  setCanPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValue = {
  isPlaying: false,
  setIsPlaying: () => {},
  canPlay: false,
  setCanPlay: () => {},
}

const VideoControlsContext = createContext<VideoControlsContext>( defaultValue )

VideoControlsContext.displayName = 'VideoControlsContext'

export function useVideoControlsContext() {
  return useContext( VideoControlsContext )
}

type VideoControlsProviderProps = {
  children: React.ReactNode;
}

export function VideoControlsProvider({
  children,
}: VideoControlsProviderProps ) {
  const [ isPlaying, setIsPlaying ] = useState( false )
  const [ canPlay, setCanPlay ] = useState( false )

  return (
    <VideoControlsContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        canPlay,
        setCanPlay,
      }}
    >
      {children}
    </VideoControlsContext.Provider>
  )
}

export default VideoControlsContext
