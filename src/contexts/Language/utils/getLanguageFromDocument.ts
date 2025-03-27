import { AVAILABLE_LANGUAGES, LanguageCode } from '@/constants/languages'

export default function getLanguageFromDocument() {
  let language = AVAILABLE_LANGUAGES[ LanguageCode.EN ]

  if ( typeof document === 'undefined' ) {
    return language
  }

  const langAttribute = document.documentElement.getAttribute( 'lang' )

  if ( typeof langAttribute === 'string' ) {
    const langCodeFromAttribute = langAttribute.split( '-' )[ 0 ] as LanguageCode
    const foundLang = AVAILABLE_LANGUAGES[ langCodeFromAttribute ]

    if ( foundLang ) {
      language = foundLang
    }
  }

  return language
}
