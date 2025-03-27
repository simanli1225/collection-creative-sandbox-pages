import React from 'react'
import styles from './FeatureSection.less'
import Image from '../../components/Image'

// Props for a single gallery item
interface GalleryItemProps {
  imageSrc: string; // Path to the image
  title: string; // Title of the gallery item
  description: string; // Description of the gallery item
  backgroundColor?: string; // Background color, optional
  textColor?: string; // Text color, optional
}

// Component to render a single gallery item
const GalleryItem: React.FC<GalleryItemProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className={`${styles.galleryItem}`}>
      {/* Dynamic Image */}
      {/* <img src={imageSrc} alt={title} className={styles.image} /> */}
      <Image
        className={styles.image}
        src={imageSrc}
        alt={title}
        loading="eager"
        width={1440}
        height={900}
      />
      {/* Dynamic Title */}
      <h3 className={styles.title}>{title}</h3>
      {/* Dynamic Description */}
      <p className={styles.description}>{description}</p>
    </div>
  )
}

// Props for the gallery section
interface GallerySectionProps {
  'data-theme': string;
  data: GalleryItemProps[]; // Array of gallery items
  backgroundColor?: string; // Optional section background color
  textColor?: string; // Optional section text color
}

// Component to render the gallery section
const GallerySection: React.FC<GallerySectionProps> = ({
  'data-theme': dataTheme,
  data,
  backgroundColor = 'black', // Default section background
  textColor = 'white', // Default section text color
}) => {
  return (
    <section
      data-theme={dataTheme}
      className={`${styles.gallerySection} ${styles.section}`}
      style={{
        backgroundColor, // Apply section background color
        color: textColor, // Apply section text color
      }}
    >
      {/* Render each gallery item dynamically */}
      {data.map((item, index) => (
        <GalleryItem
          key={index}
          imageSrc={item.imageSrc}
          title={item.title}
          description={item.description}
          backgroundColor={item.backgroundColor || backgroundColor} // Fallback to section background color
          textColor={item.textColor || textColor} // Fallback to section text color
        />
      ))}
    </section>
  )
}

export default GallerySection
