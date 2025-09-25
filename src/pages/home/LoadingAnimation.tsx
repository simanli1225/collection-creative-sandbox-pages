import React, { useEffect, useState } from "react";
import styles from "./LoadingAnimation.less";
import Image from "../../components/Image";

const LoadingAnimation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set animation delays for name spans
    const words = document.querySelectorAll<HTMLSpanElement>(
      `.${styles.colNamesSpan}`
    );

    words.forEach((word, index) => {
      word.style.animationDelay = `${index * 0.25 + 5.2}s`;
    });

    // Hide the animation section after 7 seconds
    const timer = setTimeout(() => {
      //   setIsVisible(false);
    }, 7000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return isVisible ? (
    <div id={styles.loadingAnimationSection}>
      {/* Image animation */}
      <div className={`${styles.presentFadeAnimation} ${styles.presentLogo}`}>
        <Image
          className={styles.heroImage}
          src="./collections/landing-page/SQSP_Black.png"
          alt=""
          loading="eager"
          width={1440}
          height={900}
        />
      </div>

      {/* Text animation */}
      <div className={styles.fixedToTop}>
        <div className={styles.logoAnimation}>
          <div className={`${styles.logoCoL} ${styles.coLAnimation}`}>
            <div
              className={`${styles.textLogo} ${styles.logoCoOnly} ${styles.coAnimation}`}
            >
              Co
            </div>
            <div className={styles.fakeLAnimation}></div>
          </div>
          <div className={`${styles.logoRightText} ${styles.lectionAnimation}`}>
            <span className={styles.textLogo}>lection</span>
          </div>
          <div className={`${styles.logoRightText} ${styles.colNameDivs}`}>
            <span
              className={`${styles.textLogo} ${styles.logoTextMag} ${styles.colNamesSpan}`}
            >
              Björk
            </span>
            <span
              className={`${styles.textLogo} ${styles.logoTextMag} ${styles.colNamesSpan}`}
            >
              Magnum
            </span>
            <span
              className={`${styles.textLogo} ${styles.logoTextMag} ${styles.colNamesSpan}`}
            >
              Rick Rubin
            </span>
            <span
              className={`${styles.textLogo} ${styles.logoTextMag} ${styles.colNamesSpan} ${styles.lastWord}`}
            >
              Jeff Koons
            </span>
          </div>
          <div className={`${styles.miniLogo} ${styles.miniLogoAnimation}`}>
            <span className={styles.textLogoSqsp}>SQUARESPACE</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoadingAnimation;
