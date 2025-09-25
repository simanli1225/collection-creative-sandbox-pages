import React from "react";
import styles from "./PreviousCollection.less";
import Image from "../../components/Image";
import { Link } from "react-router-dom";

interface ImageItemProps {
  imageSrc: string; // Path to the image
  link: string; // URL to navigate when the image is clicked
}

interface PreviousCollectionProps extends React.HTMLAttributes<HTMLElement> {
  "data-theme": string; // Theme for the section
  backgroundColor?: string; // Optional background color
  textColor?: string; // Optional text color
  images?: ImageItemProps[]; // Array of image objects
}

const PreviousCollection: React.FC<PreviousCollectionProps> = ({
  "data-theme": dataTheme,
  backgroundColor = "black",
  textColor = "white",
  images = [], // Default to an empty array if no images are provided
  ...props // Capture additional props like data-last-section
}) => {
  return (
    <section
      data-theme={dataTheme}
      {...props} // Pass extra props to the root section
      className={`${styles.section} ${props.className || ""}`} // 将 props.className 添加到根元素
      style={{
        backgroundColor,
        color: textColor,
        ...props.style,
      }}
    >
      {/* Title Section */}
      <div className={styles.titleText}>
        <h1 className={styles.sectionTitleH1} style={{ color: textColor }}>
          Previous Collection
        </h1>
      </div>

      {/* Image Grid */}
      <div className={styles.imageGrid}>
        {images.map((item, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Link to={item.link} rel="noopener noreferrer">
              <Image
                className={styles.image}
                src={item.imageSrc}
                alt={`Previous Collection ${index + 1}`}
                loading="eager"
                width={1440}
                height={900}
              />
              {/* <img
                src={item.imageSrc}
                alt={`Previous Collection ${index + 1}`}
                className={styles.image}
                onError={(e) => {
                  // Fallback for image load failure
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/150";
                }}
              /> */}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousCollection;
