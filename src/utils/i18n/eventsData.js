import i18nResolver from './resolver'
import i18nLanguage from './language'

import get from 'lodash/get'

const language = new i18nLanguage().default
const frontsiteLanguage = i18nResolver.getNearestLocale( language )

let memberAccountLocale = null
if ( typeof window !== 'undefined' ) {
  memberAccountLocale = get( window, 'Static.SQUARESPACE_CONTEXT.authenticatedAccount.preferredLocale', null )
}

export {
  frontsiteLanguage,
  memberAccountLocale,
}

export default function getI18nEventData() {
  return {
    'frontsite_language': frontsiteLanguage,
    'member_account_locale': memberAccountLocale,
  }
}
