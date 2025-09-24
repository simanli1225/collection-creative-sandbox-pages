import React from "react";
import styles from "./WebsiteSection.less";
import UnderlineCTA from "../Cta/UnderlineCTA";

interface WebsiteSectionProps {
  "data-theme": string;
  title: string; // Title text, replaceable via props
  description: string; // Description text, replaceable via props
  videoSrc?: string; // Video URL, optional and replaceable via props
  webtext: string;
  weblink: string;
  backgroundColor?: string; // Background color, optional
  textColor?: string; // Text color, optional
  CTAtheme?: "light" | "dark"; // 限定为 "light" 或 "dark"
}

const WebsiteSection: React.FC<WebsiteSectionProps> = ({
  "data-theme": dataTheme,
  title,
  description,
  videoSrc,
  webtext,
  weblink,
  backgroundColor = "white",
  textColor = "black", // Default text color
  CTAtheme = "light",
}) => {
  return (
    <section
      data-theme={dataTheme}
      className={`${styles.section}`}
      style={{
        backgroundColor,
        color: textColor, // Apply the manually set text color
      }}
    >
      <div className={`${styles.titleText}`}>
        <h1 className={`${styles.sectionTitleH1}`} style={{ color: textColor }}>
          {title}
        </h1>
        <p style={{ color: textColor }}>{description}</p>
      </div>

      {videoSrc && (
        <div className={styles.videoContainer}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.video}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <UnderlineCTA
        openInNewTab={true}
        text={webtext}
        link={weblink}
        theme={CTAtheme}
      />
    </section>
  );
};

export default WebsiteSection;
