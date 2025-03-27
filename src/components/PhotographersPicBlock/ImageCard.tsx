import React from 'react'
import styles from './ImageCard.less'
import Image from '../../components/Image'

interface ImageCardProps {
  imageSrc: string;
  text: string;
  pageIndex: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, text, pageIndex }) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.heroImage}
          src={imageSrc}
          alt="Image card"
          loading="eager"
          width={1440}
          height={900}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.pageIndex}>
          {'('}
          {pageIndex}
          {')'}
        </h1>
        <p className={styles.description}>{text}</p>
      </div>
    </div>
  )
}

export default ImageCard
