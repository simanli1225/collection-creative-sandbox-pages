import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LoadingAnimation from './LoadingAnimation'
import DotsNavigation from './DotsNavigation'
import styles from './index.less'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false) // Manage loading state
  const [fadeOut, setFadeOut] = useState(false) // Manage fade-out effect

  useEffect(() => {
    // Check if the user has already seen the loading animation
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading')

    if (!hasSeenLoading) {
      sessionStorage.setItem('hasSeenLoading', 'true') // Mark as seen
      setIsLoading(true) // Show loading animation

      // Trigger fade-out and hide animation after a delay
      const fadeTimer = setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setIsLoading(false), 1000) // Wait for fade-out animation to complete
      }, 6500)

      return () => clearTimeout(fadeTimer) // Clean up timeout on unmount
    }
  }, [])

  return (
    <AnimatedPage>
    <div className={styles.homePage}>
      {/* Header: Only show when loading is complete */}
      {!isLoading && <Header theme="dark" />}

      {/* Loading Animation */}
      {isLoading && (
        <div
          className={`${styles.loadingAnimation} ${
            fadeOut ? styles.fadeOut : ''
          }`}
        >
          <LoadingAnimation />
        </div>
      )}

      {/* DotsNavigation */}
      <div
        className={`${styles.dotsNavigation} ${isLoading ? styles.hidden : ''}`}
      >
        <DotsNavigation />
      </div>

      <Footer
        style={{
          position: 'fixed',
        }}
      />
    </div>
    </AnimatedPage>

  )
}

export default HomePage
