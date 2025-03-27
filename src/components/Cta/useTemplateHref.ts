import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/Language'
import { LanguageCode } from '@/constants/languages'

const swapTemplatePath = ( href: string ) => {
  const hrefArr = href.split( '/' )
  hrefArr.splice( hrefArr.length - 1, 1, 'start' )
  return hrefArr.join( '/' )
}

export default function useTemplateHref(
  href: string | undefined,
  shouldSwapTemplateHref: boolean
) {
  const { activeLanguage } = useLanguage()
  const [ swappedHref, setSwappedHref ] = useState( href )
  useEffect(() => {
    if (
      shouldSwapTemplateHref &&
      href?.endsWith( '/templates' ) &&
      window.innerWidth < 744 &&
      activeLanguage.code !== LanguageCode.JA
    ) {
      setSwappedHref( swapTemplatePath( href ))
    } else {
      setSwappedHref( href )
    }
  }, [ shouldSwapTemplateHref, href, activeLanguage.code ])

  return swappedHref
}
