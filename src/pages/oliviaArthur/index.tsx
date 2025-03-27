import React from 'react'
import styles from './index.less'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatTemplateCTA from '../../components/FloatTemplateCTA/FloatTemplateCTA'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import FeatureCarousel from '../../components/FeatureCarousel/FeatureCarousel'
import { useDynamicScrollBehavior } from '../../hooks/useDynamicScrollBehavior'
import ImageCard from '../../components/PhotographersPicBlock/ImageCard'
import PhotographerMenu from '../../components/PhotographerMenu/PhotographerMenu'
import WebsiteSection from '../../components/WebsiteSection/WebsiteSection'

const carouselData = [
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Block Pinning',
    description:
      "A digital storefront offers a full series of prints for sale, transforming an artist's brand into a business.",
    ctaLink: 'https://www.squarespace.com/templates/arthur-fluid-demo',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'light',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Gallery Sections',
    description:
      'Our best format for beautifully presenting collections of images...',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'light',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Online Store',
    description:
      'A digital storefront offers a full series of prints for sale...',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'light',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Accordions',
    description:
      'Support for expanding content blocks, perfect for FAQs or highlights...',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'light',
  },
] as const

const carouselData2 = [
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Block Pinning',
    description:
      "A digital storefront offers a full series of prints for sale, transforming an artist's brand into a business.",
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/arthur-fluid-demo',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'dark',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Gallery Sections',
    description:
      'Our best format for beautifully presenting collections of images...',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'dark',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Online Store',
    description:
      'A digital storefront offers a full series of prints for sale...',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'dark',
  },
  {
    imageSrc: 'https://via.placeholder.com/443x255',
    title: 'Accordions',
    description:
      'Support for expanding content blocks, perfect for FAQs or highlights...',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: '',
    openInNewTab: true, // 控制是否打开新窗口
    CTAtheme: 'dark',
  },
] as const

const OliviaPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() // 获取主题状态

  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        headerTitle="Jacob Aue Sobol"
        data-theme="dark"
        copyrightText="© Jacob Aue Sobol / Magnum Photos"
        text={
          <>
            A Danish photographer recognized for his signature{' '}
            <span className="highlight">high-contrast</span> and intimate
            black-and-white images captured around the world.
          </>
        }
        FilmButtonLabel="WATCH Jacob Aue Sobol’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i"
        backgroundImgSrc="https://images.squarespace-cdn.com/content/64ff65b6f8197b243d3c8ee2/db5b26cd-da51-47d8-b870-e9955d4a35a0/BruceGilden-Home-Nav-Hover.jpg?content-type=image%2Fjpeg"
      />
      <section
        data-theme="light"
        className={`${styles.magnumGallerySection} ${styles.section}`}
      >
        <div className={`${styles.titleText}`}>
          <h1 className={`${styles.sectionTitleH1}`}>Selected Photos</h1>
        </div>
        <div className={`${styles.gallerySection}`}>
          <ImageCard
            pageIndex="1/3"
            text="My pictures are very dramatic and, I'd say, a punch in the stomach. I'm comfortable doing that. Most people don't mind because I'm very good in the street. I know how to pick people that don't object because I have a feel for them."
            imageSrc="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/533e6009-09e6-4e02-a964-ff7daadaa483/BruceGilden-Portrait.jpg?format=1000w"
          />
          <ImageCard
            pageIndex="1/3"
            text="My pictures are very dramatic and, I'd say, a punch in the stomach. I'm comfortable doing that. Most people don't mind because I'm very good in the street. I know how to pick people that don't object because I have a feel for them."
            imageSrc="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/533e6009-09e6-4e02-a964-ff7daadaa483/BruceGilden-Portrait.jpg?format=1000w"
          />
        </div>
      </section>
      <WebsiteSection
        data-theme="light"
        title="Jacob's Website"
        description={'"I think the most important thing is the visual impact of a website. It\'s not about the words."'}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See BRUCE GILDEN’s website"
        weblink="https://www.brucegilden.com/"
        backgroundColor="#D9D5CB"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="dark"
        backgroundColor="#E4E2DD"
        textColor="black"
        data={carouselData}
        className="magnumFeature"
        sectionP="A set of six template designs inspired by six iconic photographers."
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#E4E2DD"
        data={carouselData2}
        className="magnumFeature"
        CTAtheme="dark"
        textColor="black"
        sectionP="A set of six template designs inspired by six iconic photographers."
      />
      <FloatTemplateCTA
        theme={ctaTheme}
        imgLink="/placeholder/rickrubin/GetTheTemplate-Transmission.png"
        CTAlink="https://www.squarespace.com/templates/reflect-fluid-demo"
        CTAtext="MAGNUM"
        hidden={isCTAHidden}
        arrow="↓"
      />
      <PhotographerMenu data-last-section />
      <Footer isDark={false} />
    </div>
  )
}

// export default JeffPage;
export default OliviaPage
