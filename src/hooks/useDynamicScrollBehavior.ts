import { useEffect, useState } from 'react'

export const useDynamicScrollBehavior = () => {
  const [headerTheme, setHeaderTheme] = useState<'dark' | 'light'>('light')
  const [ctaTheme, setCTATheme] = useState<'dark' | 'light'>('light')
  const [isCTAHidden, setIsCTAHidden] = useState(false) // 使用隐藏状态

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      const floatTemp = document.querySelector('.viewTempFloat')

      if (!floatTemp || !header) {
        console.warn('FloatTemplateCTA or Header element not found.')
        return
      }

      const floatTempRect = floatTemp.getBoundingClientRect()
      const floatTempBottom = floatTempRect.bottom
      const headerBottom = header.getBoundingClientRect().bottom

      let foundHeaderTheme: 'dark' | 'light' = 'light'
      let foundCTATheme: 'dark' | 'light' = 'light'
      let shouldHideCTA = false

      // const sections = document.querySelectorAll("[data-theme]");
      const sections = document.querySelectorAll('section')
      // console.log(sections);
      sections.forEach((section) => {
        // console.log(section);
        const sectionRect = section.getBoundingClientRect()
        const sectionTop = sectionRect.top
        const sectionBottom = sectionRect.bottom
        const sectionTheme = section.getAttribute('data-theme')

        // Header 和 Section 的相交逻辑
        if (headerBottom >= sectionTop && headerBottom <= sectionBottom) {
          foundHeaderTheme = sectionTheme as 'dark' | 'light'
        }

        // CTA 和 Section 的相交逻辑
        if (floatTempBottom >= sectionTop && floatTempBottom <= sectionBottom) {
          // console.log("intersect");

          foundCTATheme = sectionTheme as 'dark' | 'light'

          // 如果是最后一个 Section
          if (section.hasAttribute('data-last-section')) {
            // console.log("last");
            shouldHideCTA = true
          }
        }
      })

      // 更新状态
      setHeaderTheme(foundHeaderTheme)
      setCTATheme(foundCTATheme)
      setIsCTAHidden(shouldHideCTA) // 更新隐藏状态
    }

    // 初始化调用
    setTimeout(() => {
      handleScroll()
    }, 0)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { headerTheme, ctaTheme, isCTAHidden }
}
