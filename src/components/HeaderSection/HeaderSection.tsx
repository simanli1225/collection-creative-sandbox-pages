import React, { useState } from 'react'
import styles from './HeaderSection.less'
import Modal from './FilmModal'
import Image from '../../components/Image'

interface HeaderSectionProps {
  'data-theme': string;
  text: React.ReactNode; // Text content, supports JSX including <span>
  FilmButtonLabel?: string; // Label for the main film button
  SecondFilmButtonLabel?: string; // Label for the second film button
  showSecondButton?: boolean; // Whether to show the second film button
  defaultVideoSrc?: string; // URL for the main video
  secondVideoSrc?: string; // URL for the second video (if applicable)
  backgroundVideoSrc?: string; // URL for the video background
  backgroundImgSrc?: string;
  showExplore?: boolean;
  headerTitle?: string;
  copyrightText?: string;
  onFilmClick?: (videoSrc: string) => void; // Callback for the main film button
  onSecondFilmClick?: (videoSrc: string) => void; // Callback for the second film button
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  'data-theme': dataTheme,
  text,
  showExplore = true,
  FilmButtonLabel = 'WATCH Film',
  SecondFilmButtonLabel = 'WATCH THE SecondFilm',
  showSecondButton = false, // Second button is hidden by default
  defaultVideoSrc = 'https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i', // Default video URL
  secondVideoSrc = 'https://www.youtube-nocookie.com/embed/another-video-link', // Default second video URL
  backgroundVideoSrc = '', // Default background video URL
  backgroundImgSrc = '',
  headerTitle = '',
  copyrightText = '',
  onFilmClick,
  onSecondFilmClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false) // Modal visibility state
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null) // Current video URL for the modal

  // Open the modal and set the video URL
  const handleOpenModal = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc)
    setIsModalOpen(true)
  }

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setCurrentVideoSrc(null)
  }

  return (
    <section data-theme={dataTheme} className={styles.headerSection}>
      {/* Background Video */}
      <div className={styles.videoBackground}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src={backgroundVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.imgBackground}>
        {' '}
        {/* <img src={backgroundImgSrc} alt="" /> */}
        <Image
          className={styles.heroImage}
          src={backgroundImgSrc}
          alt=""
          loading="eager"
          width={1440}
          height={900}
        />
      </div>

      <div className={styles.contentOverlay}>
        <div className={styles.centerDiv}>
          <h1>{headerTitle}</h1>
          {/* Text content */}
          <p className={styles.loadingText}>{text}</p>

          {/* Buttons */}
          <div className={`${styles.flex} ${styles.ctaDiv}`}>
            {/* Main Film Button */}
            <div>
              <a
                className={`${styles.videoBtn} ${styles.whiteText} ${styles.hoverUnderlineAnimation}`}
                onClick={() => {
                  if (onFilmClick) {
                    // Trigger custom callback if provided
                    onFilmClick(defaultVideoSrc)
                  } else {
                    // Open the modal with the default video URL
                    handleOpenModal(defaultVideoSrc)
                  }
                }}
              >
                {FilmButtonLabel}
              </a>
            </div>

            {/* Second Film Button (optional) */}
            {showSecondButton && (
              <a
                className={`${styles.videoBtn} ${styles.secondVideoBtn} ${styles.hoverUnderlineAnimation}`}
                onClick={() => {
                  if (onSecondFilmClick) {
                    // Trigger custom callback if provided
                    onSecondFilmClick(secondVideoSrc)
                  } else {
                    // Open the modal with the second video URL
                    handleOpenModal(secondVideoSrc)
                  }
                }}
              >
                {SecondFilmButtonLabel}
              </a>
            )}
          </div>
        </div>
        <p className={styles.copyrightText}>{copyrightText}</p>
      </div>

      {/* Modal */}
      {currentVideoSrc && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoSrc={currentVideoSrc}
        />
      )}
      {showExplore && (
        <div className={styles.exploreDiv}>
          <p>EXPLORE COLLECTION</p>
          <p> ↓ </p>
        </div>
      )}
    </section>
  )
}

export default HeaderSection
