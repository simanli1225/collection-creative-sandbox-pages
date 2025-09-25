import React from "react";
import styles from "./ApplyCritique.less";
import Image from "../../components/Image";
import { Link } from "react-router-dom";

interface ImageCardProps {
  "data-theme": string;
  imageSrc: string;
  text: string;
}

const ApplyCritique: React.FC<ImageCardProps> = ({
  imageSrc,
  text,
  "data-theme": dataTheme,
}) => {
  return (
    <section data-theme={dataTheme}>
      <div className={styles.imageCard}>
        <div>
          <div className={styles.textContainer}>
            <h1 className={styles.applyTitle}>Apply for a Critique</h1>
            <p className={styles.description}>
              An opportunity for an exclusive 20-minute session with {text} for
              a one-on-one virtual review of your photography portfolio.
            </p>
            <p className={styles.description}>
              The application window has closed.
            </p>
            <Link to="/rules-apply">*Rules apply</Link>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default ApplyCritique;
