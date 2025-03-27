import React, { useState, useEffect, useRef } from "react";
import styles from "./DotsNavigation.less";

const videoLinks = [
  "https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/landing-page/DotsNavigation/Co_LoadingAnimation_JK1.mp4",
  "https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/landing-page/DotsNavigation/Co_RR_LoadingSequence_1.mp4",
  "https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/landing-page/DotsNavigation/Co_Magnum_LoadingSequence.mp4",
  "https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/landing-page/DotsNavigation/Co_Bjork_LoadingSequence.mp4",
];

const sectionTitles = ["Jeff Koons", "Rick Rubin", "Magnum", "Björk"];
const enterLinks = ["/jeffkoons", "/rickrubin", "/magnum", "/bjork"];

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0); // Current active section
  const totalSections = videoLinks.length; // Total number of sections

  const isScrolling = useRef(false); // Flag to prevent multiple scrolls
  const wheelDeltaSum = useRef(0); // Sum of wheel delta for scroll noise control

  let touchStartY = 0; // Start position for touch
  let touchEndY = 0; // End position for touch
  const swipeThreshold = 50; // Threshold to detect swipe

  // Function to scroll to a specific section
  function scrollToSection(direction: number) {
    if (isScrolling.current) {
      return;
    } // Exit if already scrolling

    isScrolling.current = true; // Lock scrolling
    setCurrentSection((prevSection) => {
      const nextSection =
        (prevSection + direction + totalSections) % totalSections; // Circular navigation
      return nextSection;
    });

    // Unlock scrolling after a timeout (matches CSS transition duration)
    setTimeout(() => {
      isScrolling.current = false;
      wheelDeltaSum.current = 0; // Reset wheel delta sum
    }, 900);
  }

  // Function to handle dot click navigation
  const handleDotClick = (index: number) => {
    if (currentSection !== index && !isScrolling.current) {
      setCurrentSection(index); // Set the current section
    }
  };
  // Initialize event listeners for scrolling, keyboard, and touch
  useEffect(() => {
    // Handle scroll events
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) {
        return;
      } // Exit if scrolling is locked
      wheelDeltaSum.current += event.deltaY; // Accumulate wheel delta

      const threshold = 50; // Minimum scroll threshold to trigger section change
      if (Math.abs(wheelDeltaSum.current) >= threshold) {
        const direction = wheelDeltaSum.current > 0 ? 1 : -1; // Determine direction
        scrollToSection(direction);
        wheelDeltaSum.current = 0; // Reset wheel delta sum
      }
    };

    // Handle keyboard arrow controls
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isScrolling.current) {
        return;
      } // Exit if scrolling is locked
      if (event.key === "ArrowDown") {
        scrollToSection(1);
      } // Scroll down
      if (event.key === "ArrowUp") {
        scrollToSection(-1);
      } // Scroll up
    };

    // Handle touch start on mobile
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.changedTouches[0].screenY; // Record starting touch position
    };

    // Handle touch end and detect swipe direction
    const handleTouchEnd = (event: TouchEvent) => {
      touchEndY = event.changedTouches[0].screenY; // Record ending touch position
      const touchDistance = touchStartY - touchEndY; // Calculate swipe distance

      if (Math.abs(touchDistance) > swipeThreshold) {
        const direction = touchDistance > 0 ? 1 : -1; // Determine swipe direction
        scrollToSection(direction);
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className={styles.app}>
      <section className={styles.nameMenu}>
        {/* Section Titles */}
        <div className={styles.menuTitleContent}>
          <div className={styles.sectionTitle}>
            <span className={styles.menuTitle}>Co</span>
            <div className={styles.underline}></div>
            <span className={styles.menuTitle}>
              {sectionTitles[currentSection]}
            </span>
          </div>
          <div
            id="enter-div"
            className={`${styles.enterDiv} ${styles.underlineAnimation}`}
          >
            <a href={enterLinks[currentSection]}>Enter</a>
          </div>
        </div>

        {/* Video Background Sections */}
        {videoLinks.map((link, index) => (
          <div
            key={index}
            className={`${styles.nameSection} ${
              currentSection === index ? styles.active : ""
            }`}
            style={{
              transform: `translateY(${(index - currentSection) * 100}%)`,
            }}
          >
            <video autoPlay muted loop playsInline>
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className={styles.dots}>
          {videoLinks.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSection === index ? styles.active : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
