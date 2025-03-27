import getI18nEventData from '@/utils/i18n/eventsData'
// @ts-expect-error
import sessionInfo from '@sqs/session-info'
import TrackEvents from '@sqs/track-events'
import { ClientInternalConfig } from '@sqs/track-events/cjs/types'

const config: Partial<ClientInternalConfig> = {
  customSchemaName: 'frontsite',
  logging: window._sqspEventsLogging,
  useBeacon: !window._sqspEventsLogging,
}

// Remove after upgrading @sqs/track-events
if ( window.location.hostname.indexOf( 'squarespace.com' ) === -1 ) {
  config.url = 'https://events.stage.sqsp.net/api/v1/events'
}

const defaultPayload = {
  'client_version': window.__templateVersion || null,
  'context_website_identifier': 'www',
  'event_owner_team': 'frontsite',
  'event_source': 'web',
  'is_first_landing': sessionInfo.isFirstLanding,
  'is_first_session': sessionInfo.isFirstSession,
  'product_area': 'frontsite-creative-sandbox',
  'product_page': window.__collectionName || null,
  ...getI18nEventData(),
}

// @ts-expect-error
const eventsClient = new TrackEvents( config, defaultPayload )

const trackClickLink = ( href: string | undefined, displayName: string, identifier: string | undefined, custom: Partial<Record<string, string>> = {}) => {
  eventsClient.track({
    'actor': 'user',
    'action': 'click',
    'object_type': 'link',
    'destination_url': href,
    'object_display_name': displayName,
    'object_identifier': identifier,
    'product_design_identifier': window.__collectionName || null,
    ...custom,
  })
}

const getAnalyticsId = () => {
  return eventsClient.getAnalyticsId()
}

export {
  getAnalyticsId, trackClickLink
}

export default eventsClient
