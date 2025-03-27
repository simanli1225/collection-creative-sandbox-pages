/**
 * Get the country code for a location.
 * @param {Array} location - The location data fetched using @sqs/location.
 * @returns {String} - The country code.
 */
const getCountryCode = ( locationData ) => {
  if ( !Array.isArray( locationData )) {return ''}

  const countryCode = locationData.reduce(( country, component ) => {
    return ( component.type === 'COUNTRY' ) ? component.code : country
  }, '' )

  return countryCode
}

/**
 * Check if location is in the EU.
 * @param {Array} location - The location data fetched using @sqs/location.
 * @returns {boolean}
 */
export const isInEU = ( locationData ) => {
  if ( !Array.isArray( locationData )) {return ''}

  return locationData[ 0 ].isEUCountry
}

/*
 * Strips out the second half of a locale string (the territory), leaving just the language. ie `en-US` => `en`
 * @param {String} Locale string in the form of `xx-XX`
 * @returns {String} Normalized string - just `xx`
 */
export const normalizeLocale = ( string ) => {
  return string.split( '-' )[ 0 ]
}
