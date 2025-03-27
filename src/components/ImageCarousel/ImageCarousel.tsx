import React, { useEffect, useState } from 'react'
import styles from './ImageCarousel.less'
import Image from '../../components/Image'

type ImageCarouselProps = {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carouselImage} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            {index === currentIndex && (
              <Image
                className={styles.slideImage}
                src={image}
                alt={`Slide ${index}`}
                loading="eager"
                width={1440}
                height={900}
              />
              // <img src={image} alt={`Slide ${index}`} />
            )}
          </div>
        ))}
      </div>
      <button
        className={`${styles.carouselButton} ${styles.left}`}
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className={`${styles.carouselButton} ${styles.right}`}
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  )
}

export default ImageCarousel
