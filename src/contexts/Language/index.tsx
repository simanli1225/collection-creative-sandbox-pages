import React, { createContext, useContext, useEffect, useState } from 'react'
import { AVAILABLE_LANGUAGES, LanguageCode } from '@/constants/languages'
import getLanguageFromDocument from './utils/getLanguageFromDocument'

export type LanguageOption = {
  code: LanguageCode;
  title: string;
  url: string;
  locale: string;
}

type LanguageContext = {
  activeLanguage: LanguageOption;
  isEnglish: boolean;
  hasDeterminedLanguage: boolean;
}

type LanguageProviderProps = {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContext>({
  activeLanguage: AVAILABLE_LANGUAGES[ LanguageCode.EN ],
  isEnglish: true,
  hasDeterminedLanguage: false,
})

LanguageContext.displayName = 'LanguageContext'

export function useLanguage() {
  return useContext( LanguageContext )
}

export default function LanguageProvider({
  children,
}: LanguageProviderProps ) {
  const [ activeLanguage, setActiveLanguage ] = useState(
    // Default to English, because the page will never have a lang attribute at build time
    AVAILABLE_LANGUAGES[ LanguageCode.EN ]
  )
  const [ hasDeterminedLanguage, setHasDeterminedLanguage ] = useState( false )

  useEffect(() => {
    setActiveLanguage( getLanguageFromDocument())
    setHasDeterminedLanguage( true )
  }, [])

  const isEnglish = activeLanguage.code === LanguageCode.EN

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        isEnglish,
        hasDeterminedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
