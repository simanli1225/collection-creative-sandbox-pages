import React from 'react'
import styles from './LanguagePicker.less'

interface LanguagePickerProps {
  isOpen: boolean; // 是否显示 Language Picker
  onClose: () => void; // 关闭 Language Picker 的回调函数
}

const LanguagePicker: React.FC<LanguagePickerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${styles.languagePicker} ${
        isOpen ? styles.slideIn : styles.slideOut
      }`}
      id="language-picker-div"
    >
      <div>
        <div>
          <p>Select your language</p>
          <span
            className={styles.closeButton}
            id="language-picker-close"
            onClick={onClose} // 点击关闭按钮时调用 onClose
          >
            Close
          </span>
          <div>
            <a href="/de" className={styles.languageLink}>
              Deutsch
            </a>
            <a href="/" className={styles.languageLink} id="english-link">
              English
            </a>
            <a href="/fr" className={styles.languageLink}>
              Français
            </a>
            <a href="/es" className={styles.languageLink}>
              Español
            </a>
            <a href="/it" className={styles.languageLink}>
              Italiano
            </a>
            <a href="/pt" className={styles.languageLink}>
              Português
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguagePicker
