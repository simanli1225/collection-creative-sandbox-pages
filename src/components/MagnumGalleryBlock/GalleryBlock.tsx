import React from "react";
import styles from "./GalleryBlock.less";
import UnderlineCTA from "../Cta/UnderlineCTA";
import Image from "../../components/Image";

type GalleryBlockProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
  imageOnRight?: boolean;
  ctaLink: string;
};

const GalleryBlock: React.FC<GalleryBlockProps> = ({
  title,
  description,
  buttonText,
  imageUrl,
  imageAlt,
  imageOnRight = false,
  ctaLink,
}) => {
  return (
    <div
      className={`${styles.galleryBlock} ${imageOnRight ? styles.reverse : ""}`}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <UnderlineCTA text="EXPLORE →" link={ctaLink} theme="dark" />
      </div>
      <div className={styles.imageContainer}>
        {/* <img src={imageUrl} alt={imageAlt} /> */}
        <Image
          className={styles.image}
          src={imageUrl}
          alt={imageAlt}
          loading="eager"
          width={1440}
          height={900}
        />
      </div>
    </div>
  );
};

export default GalleryBlock;
