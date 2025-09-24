import React from "react";
import styles from "../components/FloatTemplateCTA/FloatTemplateCTA.less";

interface FloatTemplateCTAProps {
  theme: "dark" | "light";
  CTAlink: string;
  imgLink: string;
  CTAtext: string;
}

const FloatTemplateCTA: React.FC<FloatTemplateCTAProps> = ({
  theme,
  CTAlink,
  imgLink,
  CTAtext,
}) => {
  return (
    <div className={`${styles.floatTemplateCTA} ${styles[theme]}`}>
      <img src={imgLink} alt="CTA Logo" />
      <Link to={CTAlink} target="_blank" rel="noopener noreferrer">
        {CTAtext}
      </Link>
    </div>
  );
};

export default FloatTemplateCTA;
