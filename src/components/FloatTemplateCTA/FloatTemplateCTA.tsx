import React, { useEffect, useState } from 'react'
import styles from './FloatTemplateCTA.less'
import Image from '../../components/Image'

interface ViewTempFloatProps {
  theme: 'dark' | 'light';
  CTAlink?: string; // 用于跳转的链接
  CTAtext: string;
  imgLink: string;
  hidden: boolean;
  arrow?: string;
  scrollToSection?: boolean;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void; // 添加 onClick 属性
}

const ViewTempFloat: React.FC<ViewTempFloatProps> = ({
  theme,
  CTAlink,
  imgLink,
  CTAtext,
  hidden,
  arrow = '→',
  scrollToSection = false,
}) => {
  const [currentLink, setCurrentLink] = useState(CTAlink)

  useEffect(() => {
    setCurrentLink(CTAlink)
  }, [CTAlink])

  const handleClick = (event: React.MouseEvent) => {
    if (scrollToSection) {
      event.preventDefault()
      const lastSection = document.querySelector('[data-last-section]')
      if (lastSection) {
        (lastSection as HTMLElement).scrollIntoView({ behavior: 'smooth' })
      } else {
        console.error('没有找到 data-last-section 的元素')
      }
    } else if (currentLink) {
      // 打开新窗口
      window.open(currentLink, '_blank')
    }
  }

  return (
    <div
      className={`${styles.viewTempFloat} ${styles[theme]} viewTempFloat ${
        hidden ? styles.hidden : ''
      }`}
      onClick={handleClick}
    >
      {/* <img src={imgLink} alt="Template image" /> */}
      <Image
        src={imgLink}
        alt="Template image"
        loading="eager"
        width={1440}
        height={900}
      />
      <a className={styles.floatTempBlockText}>
        GET THE {CTAtext} TEMPLATE {arrow}
      </a>
      <a
        className={styles.viewTempSLink}
        href={currentLink}
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  )
}

export default ViewTempFloat
