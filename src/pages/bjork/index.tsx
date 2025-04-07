import React from 'react'
import Image from '../../components/Image'
import styles from './index.less'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatTemplateCTA from '../../components/FloatTemplateCTA/FloatTemplateCTA'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import { useDynamicScrollBehavior } from '../../hooks/useDynamicScrollBehavior'
import UnderlineCTA from '@/components/Cta/UnderlineCTA'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import { useGlobalFadeIn } from '../../hooks/useGlobalFadeIn'
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';

const images = [
  '/collections/bjork/slides/Ancestress_02.png',
  '/collections/bjork/slides/Atopos_01.png',
  '/collections/bjork/slides/Atopos_02.png',
  '/collections/bjork/slides/Fossora_01.png',
  '/collections/bjork/slides/Fossora_02.png',
  '/collections/bjork/slides/Ovule_01.png',
  '/collections/bjork/slides/Ovule_02.png',
]
const BjorkPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior()
  useGlobalFadeIn()

  return (
    // <AnimatedPage>
    <div>
      <Header theme={headerTheme} page="Björk" />
      <HeaderSection
        data-theme="dark"
        text={
          <>
            The groundbreaking Icelandic artist partnered with Squarespace to
            create an immersive website for her newest album,{' '}
            <span className="highlight">Fossora</span> . Now you can create your
            own site starting from a limited edition template designed with her
            same creative choices.
          </>
        }
        FilmButtonLabel="Watch Film"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i"
        backgroundImgSrc="/collections/bjork/collection-bjork7.png "
      />
      <FloatTemplateCTA
        theme={ctaTheme}
        CTAlink="https://www.squarespace.com/templates/mycelium-fluid-demo"
        imgLink="/collections/bjork/Mycelium_Thumbnail.jpg"
        CTAtext="Mycelium"
        hidden={isCTAHidden}
      />
      <section
        data-theme="dark"
        className={`${styles.bjorkWebsiteSection} ${styles.section}`}
      >
        <div className={`${styles.titleText}`}>
          <h1 className={`${styles.sectionTitleH1}`}>Fossora.com </h1>
          <p>
            With few straight lines, densely overlapping images and a flowing
            page structure inspired by fungal networks, Björk’s album site is
            all underground organic maximalism.
          </p>
        </div>

        <UnderlineCTA
          text="EXPLORE →"
          link="https://www.fossora.com/"
          theme="light"
          openInNewTab={true}
        />
        <div className={`${styles.bjorkWebImageBg}`}>
          <Image
            className={styles.spore1}
            src="/collections/bjork/mushroom/mushroom+spores_v2+7.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />

          <Image
            className={styles.spore2}
            src="/collections/bjork/mushroom/mushroomspores_v213.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />

          <Image
            className={styles.flower3}
            src="/collections/bjork/mushroom/mushroom42.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />

          <div className={styles.bjorkCarousel}>
            {' '}
            <ImageCarousel images={images} />
          </div>
          <Image
            className={styles.flower1}
            src="/collections/bjork/mushroom/mushroom27.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />

          <Image
            className={styles.flower2}
            src="/collections/bjork/mushroom/mushroomstemstopT4.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />
        </div>
      </section>
      <section
        data-last-section
        data-theme="dark"
        className={`${styles.bjorkTemplateSection} ${styles.section}`}
      >
        <div className={`${styles.titleText}`}>
          <h1 className={`${styles.sectionTitleH1}`}>The Mycelium Template</h1>
          <p>
            Use Björk’s vision as your starting point with the Mycelium
            template, designed with the same creative choices as her own site.
          </p>
        </div>
        <div className={`${styles.templateImagesDiv}`}>
          <Image
            // className={styles.flower1}
            src="/collections/bjork/Mycelium_01.jpg"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />
          <Image
            src="/collections/bjork/Mycelium_03.jpg"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />{' '}
          <Image
            src="/collections/bjork/Mycelium_02.jpg"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />
          {/* <img
            src="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/d8413d5a-f460-45ef-8052-cd4c4cc93802/Mycelium_01.jpg?format=2500w"
            alt=""
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/6accfdeb-85b6-4d60-9f94-42f8440d6acd/Mycelium_03.jpg?format=2500w"
            alt=""
          />
          <img
            src="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/39e37ece-c2d9-4f13-adeb-0c7c50bbb77a/Mycelium_02.jpg?format=2500w"
            alt=""
          /> */}
        </div>
        <UnderlineCTA
          text="START WITH THIS DESIGN"
          link="https://www.squarespace.com/templates/mycelium-fluid-demo"
          theme="light"
          openInNewTab={true}
        />
      </section>
      <Footer isDark={false} />
    </div>
    // </AnimatedPage>

  )
}

export default BjorkPage
