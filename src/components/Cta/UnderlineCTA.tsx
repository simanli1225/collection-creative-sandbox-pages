import React from 'react'
import styles from './UnderlineCTA.less'

interface CTAProps {
  text?: string;
  link?: string;
  theme?: 'dark' | 'light'; // Theme can be 'dark' or 'light'
  className?: string;
  openInNewTab?: boolean; // 新增属性，控制是否打开新窗口
}

const UnderlineCTA: React.FC<CTAProps> = ({
  text,
  link,
  theme = 'light',
  className,
  openInNewTab = false,
}) => {
  const themeClass = theme === 'dark' ? styles.dark : styles.light

  return (
    <div className={`${styles.underlineCTA} ${themeClass} ${className}`}>
      <a
        href={link}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {' '}
        {text}
      </a>
    </div>
  )
}

export default UnderlineCTA
