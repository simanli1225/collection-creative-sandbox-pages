import React from 'react'
import Image from '../../components/Image'
import styles from './index.less'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatTemplateCTA from '../../components/FloatTemplateCTA/FloatTemplateCTA'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import WebsiteSection from '../../components/WebsiteSection/WebsiteSection'
import { useGlobalFadeIn } from '../../hooks/useGlobalFadeIn'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureCarousel from '../../components/FeatureCarousel/FeatureCarousel'
import PreviousCollection from '../../components/PreviousCollection/PreviousCollection'
import { useDynamicScrollBehavior } from '../../hooks/useDynamicScrollBehavior'

const featureData = [
  {
    imageSrc: '/collections/rick-rubin/web/Tetragrammaton-Features-01.png',
    title: 'Subject Matter',
    description:
      'tetragrammaton presents each item as if a window display. The choice to enter brings you into a world of information, color, and context.',
  },
  {
    imageSrc: '/collections/rick-rubin/web/RickRubin-WebsiteHighlight-02.gif',
    title: 'A Focused Atmosphere',
    description:
      'An uncluttered display was important to Rubin. The single-column design gives the art, music, films, and artifacts the space and attention they deserve.',
  },
  {
    imageSrc: '/collections/rick-rubin/web/RickRubin-WebsiteHighlight-03.gif',
    title: 'A Connected System of Creativity',
    description:
      'A Bio Site shares the world of tetragrammaton with a wider audience on social media—all from a single link-in-bio.',
  },
  {
    imageSrc: '/collections/rick-rubin/web/Tetragrammaton-Features-04.png',
    title: 'Community-Centric Transmissions',
    description:
      'With Squarespace Email Campaigns, Rubin’s newsletter applies brand and design elements from the tetragrammaton website automatically.',
  },
]
const carouselData = [
  {
    imageSrc:
      '/collections/rick-rubin/template/RickRubin-TemplateHighlights-01.png',
    title: 'Member Site',
    description:
      'Paying visitors get access to a members-only website page with exclusive content—like unreleased tracks, limited-run merch, and more.',
  },
  {
    imageSrc:
      '/collections/rick-rubin/template/RickRubinTemplateHighlights-02.gif',
    title: 'Image Overlay',
    description:
      'Supporting imagery was transformed with one-click color palette and property filters, adding more visual nuance to the design experience.',
  },
  {
    imageSrc:
      '/collections/rick-rubin/template/RickRubin-TemplateHighlights-03.png',
    title: 'Audio Blocks',
    description:
      'Playable audio files were added to select pages and posts, using settings just for podcasts. It’s easy to change style and download preferences.',
  },
  {
    imageSrc:
      '/collections/rick-rubin/template/RickRubin-TemplateHighlights-04.gif',
    title: 'Native Video Hosting',
    description:
      'Uploaded directly in edit mode, video files are natively hosted and streamable with mute, loop, speed, and other controls available.',
  },
]
const previousCollection = [
  {
    imageSrc: '/collections/jeff-koons/previous-collection/Co_Magnum.jpg',
    link: '/magnum',
  },
  {
    imageSrc: '/collections/jeff-koons/previous-collection/Co_Bjork.jpg',
    link: '/bjork',
  },
]
interface GridItem {
  type: 'image' | 'text';
  content: string;
  altText?: string;
}

const RickPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()

  return (
    <div>
      <Header theme={headerTheme} page="Rick Rubin" />
      <HeaderSection
        data-theme="dark"
        text={
          <>
            A collaboration with <span className="highlight">Rick Rubin</span>{' '}
            to build tetragrammaton – an online world of curated materials – and
            a new website design, Transmission, to inspire your creativity.
          </>
        }
        FilmButtonLabel="Watch Film"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i"
        backgroundVideoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/rick-rubin/Rick_Rubin_Collection_Site_Background_Video.mp4"
      />
      <section className={styles.rickVideoSection} data-theme="light">
        <div className={styles.rickVideoDiv}>
          <div className={styles.squareDiv}>
            <div className={styles.squareDivText}>
              <h1>tetragrammaton</h1>
              <p>
                Rick Rubin wanted to share the way he sees the world. He aimed
                to create a living platform that would encourage discovery and
                build community. tetragrammaton serves as an ever-evolving
                exhibition of the ideas and artworks that can inspire people.
              </p>
            </div>
          </div>
          <div className={styles.squareDiv}>
            <img
              src="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/rick-rubin/RR_Homepage_Logo.gif"
              alt=""
            />
          </div>
        </div>
        <div className={styles.rickVideoDiv}>
          <div className={styles.squareDiv}>
            {/* <img
              src="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/95c2908c-6e9e-4b7b-ab25-d17ec81fcba3/RR_Process.jpg?format=2500w"
              alt=""
            /> */}
            <Image
              className={styles.heroImage}
              src="/collections/rick-rubin/RR_Process.jpg"
              alt=""
              loading="eager"
              width={2250}
              height={1000}
            />
            {/* <Image
              className={styles.heroImage}
              src="/collections/landing-page/black-logo.png"
              alt=""
              loading="eager"
              width={1440}
              height={900}
            /> */}
          </div>
          <div className={styles.squareDiv}>
            <div className={styles.squareDivText}>
              <h1>The Process</h1>
              <p>
                tetragrammaton was created from the ground up through curiosity
                and experimentation. Using an iterative process in pursuit of
                simplicity, Rubin rejected preconceived ideas of website design.
                Every decision made was to amplify the content without
                distraction.
              </p>
            </div>
            {/* <Image
              className={styles.heroImage}
              src="/collections/rick-rubin/RR_Homepage_Logo.gif"
              alt=""
              loading="eager"
              width={1440}
              height={900}
            /> */}
          </div>
        </div>
        {/* second  */}
      </section>
      <section className={styles.rickfullVideoSection}>
        <video autoPlay muted loop playsInline>
          <source
            src="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/rick-rubin/Sizzle_DesignProgress_v04_16x9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </section>
      <FloatTemplateCTA
        theme={ctaTheme}
        CTAlink="https://www.squarespace.com/templates/reflect-fluid-demo"
        imgLink="/collections/rick-rubin/GetTheTemplate-Transmission.png"
        CTAtext="TRANSMISSION"
        hidden={isCTAHidden}
      />
      <WebsiteSection
        data-theme="dark"
        title="The Website"
        description="A functional, visually dynamic resource, the tetragrammaton website fulfills Rubin’s minimalist design vision while cohesively highlighting art, media, and community."
        videoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/rick-rubin/RR_Tetragrammaton_1354x784_v7.mp4"
        webtext="Sign up to access the prototype"
        weblink="https://www.tetragrammaton.com/"
        backgroundColor="#84827d"
        textColor="white"
      />
      <FeatureSection
        data-theme="dark"
        data={featureData}
        backgroundColor="#84827d"
      />
      <WebsiteSection
        data-theme="light"
        title="Reflect Template"
        description="Inspired by Jeff Koons’ website, the Reflect Template gives anyone the ability to showcase their own work on a customizable expressive platform."
        videoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/rick-rubin/Transmission_Template_1354x784.mp4"
        webtext="view full demo site"
        weblink="https://www.squarespace.com/templates/reflect-fluid-demo"
        backgroundColor="#c1c0c8"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#c1c0c8"
        textColor="black"
        data={carouselData}
      />
      <PreviousCollection
        data-theme="light"
        backgroundColor="white"
        textColor="black"
        images={previousCollection}
        data-last-section
        className="twoImageStyle"
      />{' '}
      <Footer isDark={true} />
    </div>
  )
}

// export default JeffPage;
export default RickPage
