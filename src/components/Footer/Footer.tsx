import React, { useState } from 'react'
import styles from './Footer.less'
import LanguagePicker from './LanguagePicker'
import Image from '../../components/Image'

interface FooterProps {
  isDark?: boolean; // 是否为黑色主题
  style?: React.CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ isDark = false, style }) => {
  const [isLanguagePickerOpen, setIsLanguagePickerOpen] = useState(false) // 控制 LanguagePicker 的显示状态

  const toggleLanguagePicker = () => {
    setIsLanguagePickerOpen((prev) => !prev) // 切换显示状态
  }

  // 动态设置 Footer 的 z-index
  const footerStyle = {
    zIndex: isLanguagePickerOpen ? 101 : 99,
    ...style,
  }

  return (
    <footer
      className={`${styles.footer} ${isDark ? styles.dark : ''}`}
      style={footerStyle} // 动态设置 z-index
    >
      {/* Bottom Left Links */}
      <div>
        <a
          className={styles.blackText}
          href="https://www.squarespace.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
        <a
          className={styles.blackText}
          href="https://www.squarespace.com/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms Of Service
        </a>
        {/* Trigger Language Picker */}
        <a
          className={styles.blackText}
          id="language-picker-logo"
          onClick={toggleLanguagePicker}
        >
          English
        </a>
      </div>

      {/* Bottom Right Logo */}
      <a
        className={`${styles.footer} ${styles['footer--bottom-right']}`}
        href="https://www.squarespace.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <img
          className={styles["logo--sqsp"]}
          alt="Squarespace logo"
          src="https://images.squarespace-cdn.com/content/64ff65b6f8197b243d3c8ee2/96dd5d21-354e-40a5-b75c-9cb96910cfaf/black-logo.png?content-type=image%2Fpng"
        /> */}
        <Image
          className={styles.heroImage}
          src="/collections/landing-page/black-logo.png"
          alt=""
          loading="eager"
          width={1440}
          height={900}
        />
      </a>

      {/* Language Picker */}
      <LanguagePicker
        isOpen={isLanguagePickerOpen}
        onClose={toggleLanguagePicker}
      />
    </footer>
  )
}

export default Footer
