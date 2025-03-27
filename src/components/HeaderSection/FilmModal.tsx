import React, { useEffect } from 'react'
import styles from './FilmModal.less'

interface ModalProps {
  isOpen: boolean; // 控制 modal 是否显示
  onClose: () => void; // 关闭 modal 的回调函数
  videoSrc: string; // 视频的 URL
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, videoSrc }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // 禁止滚动
    } else {
      document.body.style.overflow = '' // 恢复滚动
    }

    // 清理副作用
    return () => {
      document.body.style.overflow = '' // 在组件卸载时恢复滚动
    }
  }, [isOpen])

  if (!isOpen) {return null} // 如果 modal 关闭，则不渲染组件

  return (
    <section className={styles.modal}>
      <span className={styles.close} onClick={onClose}>
        Close
      </span>
      <div
        className={`${styles.movieBox} ${styles.centerInside}`}
        onClick={onClose}
      >
        <div className={styles.movieBoxS} onClick={(e) => e.stopPropagation()}>
          <iframe
            width="100%"
            height="100%"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Modal
