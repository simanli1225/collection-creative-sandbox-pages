import React, { createContext, useContext } from 'react'
import { LanguageCode } from '@/constants/languages'

const VideoLanguageContext = createContext<LanguageCode>( LanguageCode.EN )

VideoLanguageContext.displayName = 'VideoLanguageContext'

export function useVideoLanguageContext() {
  return useContext( VideoLanguageContext )
}

type VideoLanguageProviderProps = {
  languageCode?: LanguageCode,
  children: React.ReactNode;
}

export function VideoLanguageProvider({
  languageCode,
  children,
}: VideoLanguageProviderProps ) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <VideoLanguageContext.Provider value={languageCode!}>
      {children}
    </VideoLanguageContext.Provider>
  )
}

export default VideoLanguageContext
