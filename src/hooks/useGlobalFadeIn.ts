// hooks/useGlobalFadeIn.ts
import { useEffect } from 'react'

export const useGlobalFadeIn = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('img, p, h1, h2, h3, h4, h5, h6, a,.fade-target')
    // console.log(elements);
    elements.forEach(el => {
      el.classList.add('auto-fade-in')
    })

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    elements.forEach(el => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
