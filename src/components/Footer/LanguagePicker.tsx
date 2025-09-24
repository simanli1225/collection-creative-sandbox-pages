import React from "react";
import styles from "./LanguagePicker.less";
import { Link } from "react-router-dom";

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
            <Link to="/de" className={styles.languageLink}>
              Deutsch
            </Link>
            <Link to="/" className={styles.languageLink} id="english-link">
              English
            </Link>
            <Link to="/fr" className={styles.languageLink}>
              Français
            </Link>
            <Link to="/es" className={styles.languageLink}>
              Español
            </Link>
            <Link to="/it" className={styles.languageLink}>
              Italiano
            </Link>
            <Link to="/pt" className={styles.languageLink}>
              Português
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePicker;
