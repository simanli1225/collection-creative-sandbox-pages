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
      '/collections/bruce-gilden/template/BruceGilden-TemplateHighlights-04.png',
    title: 'Courses',
    description:
      'Create and sell online courses with multimedia lessons, chapters, and progress tracking for students.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/bruce-gilden/template/BruceGilden-TemplateHighlights-02.gif',
    title: 'Section Dividers',
    description:
      'Custom breaks between website sections that add more nuance to your scrolling experience.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/bruce-gilden/template/BruceGilden-TemplateHighlights-03.png',
    title: 'Fluid Engine',
    description:
      'Our groundbreaking drag-and-drop editor that provides total control of website layout and design.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/bruce-gilden/template/BruceGilden-TemplateHighlights-04.gif',
    title: 'Gallery Block',
    description:
      'Our go-to format for beautifully presenting collections of images or videos anywhere on a page.',
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
        headerTitle="Bruce Gilden"
        data-theme="dark"
        copyrightText="© Bruce Gilden / Magnum Photos"
        text={
          <>
            For more than 50 years, Brooklyn-born Bruce Gilden has honed his
            signature <span className="highlight">street photography </span>
            style around the world. Gilden’s work distills the variety and
            character of the street.
          </>
        }
        FilmButtonLabel="WATCH BRUCE GILDEN’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i"
        backgroundImgSrc="/collections/bruce-gilden/BruceGilden-Hero.jpg"
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
            pageIndex="1/8"
            text="My pictures are very dramatic and, I'd say, a punch in the stomach. I'm comfortable doing that. Most people don't mind because I'm very good in the street. I know how to pick people that don't object because I have a feel for them."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-01A.jpg"
          />
          <ImageCard
            pageIndex="2/8"
            text="I'm very truthful, and I want people to know I'm there. I'm not sneaking a picture from across the street, you know, like a lot of people do because they're afraid of confrontation or to have a dialogue with the person."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-02.jpg"
          />{' '}
          <ImageCard
            pageIndex="3/8"
            text="A guy who looks like a hip-hop guy. A young guy who we found on Fifth Avenue."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-03.jpg"
          />
          <ImageCard
            pageIndex="4/8"
            text="No one can pick my people for me. There's a certain detail I see that separates them from others. It's not that you're a gangster or biker or a type necessarily. It's someone who stands out and has an individuality, a strength."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-04.jpg"
          />
          <ImageCard
            pageIndex="5/8"
            text="I used a ringer, someone I know. He's Russian, but he grew up in and lives in New York. I just wanted him; I knew he'd make a good picture because he has a good shaved face."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-05.jpg"
          />
          <ImageCard
            pageIndex="6/8"
            text="She was different from other people walking Fifth Avenue. I saw something that made her stand out, maybe it was her eyes or her demeanor. I felt I might be able to draw something out of her."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-06.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/8"
            text="My favorite picture of all. He has a large body, and his head tilts to one side; the light is shining on his head, and it almost looks like he's having a conversation with God. It's just a strong waist-up portrait."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-07.jpg"
          />
          <ImageCard
            pageIndex="8/8"
            text="When I do face portraits of women, I like color because a lot of the women have a little lipstick or a little color that adds a little pizzazz to the photograph."
            imageSrc="/collections/bruce-gilden/gallery/BruceGilden-Select-08.jpg"
          />
        </div>
      </section>
      <WebsiteSection
        data-theme="dark"
        title="Bruce's Website"
        description={'"I think the most important thing is the visual impact of a website. It\'s not about the words."'}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See BRUCE GILDEN’s website"
        weblink="https://www.brucegilden.com/"
        backgroundColor="#485254"
        textColor="white"
      />
      <FeatureCarousel
        data-theme="dark"
        backgroundColor="#636A6C"
        textColor="white"
        data={carouselData}
        className="magnumFeature"
        CTAtheme="light"
        sectionP="A contemporary and powerful design created in collaboration with Bruce Gilden"
      />
      <ApplyCritique
        data-theme="light"
        text="Bruce Gilden"
        imageSrc="/collections/magnum/photographers/BruceGilden-Portrait.jpg "
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
        imgLink="/collections/bruce-gilden/GetTheTemplate-Gilden.png"
        CTAlink="https://www.squarespace.com/templates/reflect-fluid-demo"
        CTAtext="Gilden"
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
