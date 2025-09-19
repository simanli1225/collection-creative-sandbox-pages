import React from 'react'
import styles from './index.less'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatTemplateCTA from '../../components/FloatTemplateCTA/FloatTemplateCTA'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import FeatureCarousel from '../../components/FeatureCarousel/FeatureCarousel'
import { useDynamicScrollBehavior } from '../../hooks/useDynamicScrollBehavior'
import ImageCard from '../../components/PhotographersPicBlock/ImageCard'
import ApplyCritique from '../../components/ApplyCritique/ApplyCritique'
import PhotographerMenu from '../../components/PhotographerMenu/PhotographerMenu'
import WebsiteSection from '../../components/WebsiteSection/WebsiteSection'
import { useGlobalFadeIn } from '../../hooks/useGlobalFadeIn'
const carouselData = [
  {
    imageSrc:
      '/collections/sabiha-cimen/template/SabihaCimen-TemplateHighlights-01.png',
    title: 'Client Invoicing',
    description:
      'Tools to manage your business - from vetting leads to receiving payment via invoices in one streamlined, customizable workflow.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/sabiha-cimen/template/SabihaCimen-TemplateHighlights-02.gif',
    title: 'Fluid Engine',
    description:
      'Our groundbreaking drag-and-drop editor that provides total control of website layout and design.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/sabiha-cimen/template/SabihaCimen-TemplateHighlights-03.png',
    title: 'Built-In Image Editor',
    description:
      'Native tools for adjusting image intensity, cropping, or applying preset filters.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/sabiha-cimen/template/SabihaCimen-TemplateHighlights-04.gif',
    title: 'Image Shapes',
    description:
      'A full range of shape presets and angle controls to aesthetically crop website imagery.',
    openInNewTab: false,
  },
] as const

const carouselData2 = [
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-Arthur.png',
    title: 'Arthur',
    description:
      'An airy design created in collaboration with Olivia Arthur, with abundant white space and an organic layout.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/arthur-fluid-demo',
    openInNewTab: true,  
    CTAtheme: 'dark',
  },
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-AueSobol.png',
    title: 'Aue Sobol',
    description:
      'A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/aue-sobol-fluid-demo',
    openInNewTab: true,  
    CTAtheme: 'dark',
  },
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-Cimen.gif',
    title: 'Çimen',
    description:
      'A video-forward design created in collaboration with Sabiha Çimen, with a versatile multi-column layout to exhibit varying work.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/cimen-fluid-demo',
    openInNewTab: true,  
    CTAtheme: 'dark',
  },
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-Gilden.png',
    title: 'Gilden',
    description:
      'A contemporary and powerful design created in collaboration with Bruce Gilden.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/gilden-fluid-demo',
    openInNewTab: true,  
    CTAtheme: 'dark',
  },
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-Keo.png',
    title: 'Keo',
    description:
      'A brutalist design created in collaboration with William Keo, with a roomy grid layout and a multitude of pages to highlight your work.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/keo-fluid-demo',
    openInNewTab: true,  
    CTAtheme: 'dark',
  },
  {
    imageSrc: '/collections/magnum/template/MagnumCollection-McCurry.png',
    title: 'McCurry',
    description:
      'A well-structured design created in collaboration with Steve McCurry, with distinct elements throughout, and generous room for a multitude of projects.',
    ctaText: 'START WITH THIS DESIGN',
    ctaLink: 'https://www.squarespace.com/templates/mccurry-fluid-demo',
    openInNewTab: true,
    CTAtheme: 'dark',
  },
] as const
const BrucePage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()
  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        showExplore={false}
        headerTitle="Sabiha Çimen"
        data-theme="dark"
        copyrightText="© Sabiha Çimen / Magnum Photos"
        text={
          <>
            A self-taught Turkish photographer known for her{' '}
            <span className="highlight">portraiture </span> and still-life
            images rooted in Islamic culture. She mostly works on developing
            self-reflective long-term projects close to home in Istanbul.
          </>
        }
        FilmButtonLabel="WATCH Sabiha Çimen’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube.com/embed/74PXf7FFlWA?si=ToaC6JJrUYPED-M_"
        backgroundImgSrc="/collections/sabiha-cimen/SabihaCimen-Hero.jpg"
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
            pageIndex="1/7"
            text="This is one of my neighbourhood streets close to my home in Istanbul. I like this spot—just going there, standing there, looking there."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-01.jpg"
          />
          <ImageCard
            pageIndex="2/7"
            text="l photographed my subjects in a flipped funhouse. It reflects one of the girl's situations because she took off her veil, and her life was kind of upside-down. It's such a funny metaphor for her life story."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-02.jpg"
          />{' '}
          <ImageCard
            pageIndex="3/7"
            text="I wanted to go spontaneously and play around and find things that come through me. Sometimes, meaningful images come from play."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-03-new.jpg"
          />
          <ImageCard
            pageIndex="4/7"
            text="My favorite image. The outskirts of Istanbul. His nickname is Bat Barber. He's flipping himself upside-down and making his job like that. I always wanted to photograph him. It's a little absurd, but fits my ongoing project."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-04-new.jpg"
          />
          <ImageCard
            pageIndex="5/7"
            text="Servet sits every day in this pedestrian mall in İstanbul. He earns his living with his scale. He seemed to have fallen in love with one of my subjects; he kissed her hand. He always seemed to me like a street bard from another time."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-05-new.jpg"
          />
          <ImageCard
            pageIndex="6/7"
            text="There's a heavy burden on Muslim women's shoulders; they always have to look very serious, not so colorful, not so smiley. This lifts up my subject's teenager soul and gives some contrast to who she's supposed to be in Islamic culture."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-06-new.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/7"
            text="A tea spot where men always hang in Istanbul. It doesn't belong to women. If a woman goes there, that's not pleasant for men — they're disruptive. So, I wanted to make them uncomfortable and make us think about sharing space."
            imageSrc="/collections/sabiha-cimen/SabihaCimen-Select-07-new.jpg"
          />
        </div>
      </section>
      <WebsiteSection
        data-theme="light"
        title="Sabiha’s Website"
        description={'"I think the most important thing is the visual impact of a website. It\'s not about the words."'}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See Sabiha Çimen’s website"
        weblink="https://www.sabihacimen.com/"
        backgroundColor="#c7d4c9"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#d6e2d8"
        textColor="black"
        data={carouselData}
        className="magnumFeature"
        CTAtheme="light"
        sectionP="A video-forward design created in collaboration with Sabiha Çimen, with a versatile multi-column layout to exhibit varying work."
      />
      <ApplyCritique
        data-theme="light"
        text="Sabiha Çimen"
        imageSrc="/collections/magnum/photographers/SabihaCimen-Portrait.jpg"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#D6D4CF"
        textColor="black"
        data={carouselData2}
        className="magnumFeature"
        CTAtheme="dark"
        sectionP="A set of six template designs inspired by six iconic photographers."
      />
      <FloatTemplateCTA
        theme={ctaTheme}
        imgLink="/collections/sabiha-cimen/GetTheTemplate-Cimen.png"
        CTAlink="https://www.squarespace.com/templates/cimen-fluid-demo"
        CTAtext="Çimen"
        hidden={isCTAHidden}
        arrow="→"
      />
      <PhotographerMenu data-last-section />
      <Footer isDark={false} />
    </div>
  )
}

// export default JeffPage;
export default BrucePage
