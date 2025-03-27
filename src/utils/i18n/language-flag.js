import { hasQueryParam } from './url-utils'

let uk = false

if ( typeof window !== 'undefined' &&
  ( window._sqspLanguageUk || hasQueryParam( 'languageUk' ))
) {
  uk = true
}

export default { uk }
