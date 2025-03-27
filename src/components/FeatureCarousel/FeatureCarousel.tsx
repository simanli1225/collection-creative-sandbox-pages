import React, { useState, useEffect } from 'react'
import styles from './FeatureCarousel.less'
import UnderlineCTA from '../Cta/UnderlineCTA'
import Image from '../../components/Image'

interface FeatureItemProps {
  imageSrc: string; // Path to the image
  title: string; // Title of the feature item
  description: string; // Description of the feature item
  backgroundColor?: string; // Background color, optional
  textColor?: string; // Text color, optional
  ctaText?: string;
  ctaLink?: string;
  CTAtheme?: 'light' | 'dark'; // 限定为 "light" 或 "dark"
}

interface FeatureCarouselProps extends React.HTMLAttributes<HTMLElement> {
  'data-theme': string;
  data: readonly FeatureItemProps[]; // Array of feature items
  backgroundColor?: string; // Carousel background color, optional
  textColor?: string; // Carousel text color, optional
  sectionTitle?: string;
  sectionP?: string;
  className?: string;
  CTAtheme?: 'light' | 'dark'; // 限定为 "light" 或 "dark"
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  'data-theme': dataTheme,
  sectionP = '',
  data,
  backgroundColor = '#1e1e1e', // Default background color
  textColor = '#ffffff', // Default text color
  sectionTitle = 'Template Design Features',
  CTAtheme,
  ...props // Capture additional props like data-last-section
}) => {
  const [isMobile, setIsMobile] = useState(false) // State to track if the user is on mobile

  // Check screen size and determine if the user is on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Set the threshold for mobile screens
    }

    handleResize() // Check screen size on initial load
    window.addEventListener('resize', handleResize) // Add event listener for screen resizing

    return () => window.removeEventListener('resize', handleResize) // Clean up event listener
  }, [])

  // Clone data for infinite scrolling
  const clonedData = [...data, ...data, ...data]
  const middleIndex = data.length // Middle index
  const [currentIndex, setCurrentIndex] = useState(middleIndex) // Initialize index to the middle
  const [isAnimating, setIsAnimating] = useState(false) // Animation state

  // Handle moving to the previous item
  const handlePrev = () => {
    if (isAnimating) {return} // Prevent repeated clicks during animation
    setIsAnimating(true) // Start animation
    setCurrentIndex((prev) => prev - 1) // Update current index
  }

  // Handle moving to the next item
  const handleNext = () => {
    if (isAnimating) {return} // Prevent repeated clicks during animation
    setIsAnimating(true) // Start animation
    setCurrentIndex((prev) => prev + 1) // Update current index
  }

  // Reset the index seamlessly when out of range
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (currentIndex < middleIndex - data.length) {
      timeout = setTimeout(() => {
        setIsAnimating(false)
        setCurrentIndex(middleIndex) // Reset to middle index
      }, 500) // Animation duration
    } else if (currentIndex >= middleIndex + data.length) {
      timeout = setTimeout(() => {
        setIsAnimating(false)
        setCurrentIndex(middleIndex) // Reset to middle index
      }, 500)
    } else {
      timeout = setTimeout(() => setIsAnimating(false), 500) // Stop animation after transition
    }
    return () => clearTimeout(timeout) // Clear timeout
  }, [currentIndex, data.length, middleIndex])

  return (
    <section
      data-theme={dataTheme}
      {...props} // Pass extra props to the root section
      className={`${styles.featureCarousel}  ${
        props.className || ''
      } {className}`}
      style={{
        backgroundColor,
        color: textColor,
        ...props.style,
      }}
    >
      {/* Carousel title */}
      <h1
        className={styles.sectionTitleH1}
        style={{
          color: textColor,
        }}
      >
        {sectionTitle}
      </h1>
      <p
        className={styles.sectionP}
        style={{
          color: textColor,
        }}
      >
        {sectionP}
      </p>
      {/* Carousel wrapper */}
      <div
        className={styles.carouselWrapper}
        style={{
          transform: `translateX(calc(-${
            currentIndex * (isMobile ? 100 : 33.333)
          }%))`, // Dynamically calculate translation percentage
          transition: isAnimating ? 'transform 0.5s ease' : 'none', // Animation effect
        }}
      >
        {clonedData.map((item, index) => {
          return (
            <div key={index} className={styles.featureItem}>
              {/* <img
                src={item.imageSrc}
                alt={item.title}
                className={styles.image}
              /> */}
              <Image
                className={styles.image}
                src={item.imageSrc}
                alt={item.title}
                loading="eager"
                width={1440}
                height={900}
              />
              <h3
                className={styles.title}
                style={{
                  color: textColor,
                }}
              >
                {item.title}
              </h3>
              <p
                className={styles.description}
                style={{
                  color: textColor,
                }}
              >
                {item.description}
              </p>
              <UnderlineCTA
                text={item.ctaText}
                link={item.ctaLink}
                theme={item.CTAtheme}
                className={styles.magnumCarouselCTA}
                openInNewTab={true}
              />
            </div>
          )
        })}
      </div>

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <svg
            className={styles.carouselArrowIcon}
            viewBox="0 0 44 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.carouselArrowIconPath}
              d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116"
              style={{
                stroke: textColor,
              }}
            ></path>
            <path
              className={styles.carouselArrowIconPath}
              d="M42.8633 9.18125L3.37868 9.18125"
              style={{
                stroke: textColor,
              }}
            ></path>
          </svg>
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          <svg
            className={styles.carouselArrowIcon}
            viewBox="0 0 44 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              className={styles.carouselArrowIconPath}
              style={{
                stroke: textColor,
              }}
              d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599"
            ></path>
            <path
              className={styles.carouselArrowIconPath}
              style={{
                stroke: textColor,
              }}
              d="M1.19088 9.16982H40.6755"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default FeatureCarousel
