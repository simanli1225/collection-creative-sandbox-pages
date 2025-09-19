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
      '/collections/jacob-aue-sobol/template/JacobAueSobol-TemplateHighlights-01.png',
    title: 'Client Invoicing',
    description:
      'Tools to manage your business - from vetting leads to receiving payment via invoices in one streamlined, customizable workflow.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/jacob-aue-sobol/template/JacobAueSobol-TemplateHighlights-02.gif',
    title: 'Digital Downloads',
    description:
      'Sell digital content your customers can download, like ebooks, music, files, and PDFs.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/jacob-aue-sobol/template/JacobAueSobol-TemplateHighlights-03.png',
    title: 'Gallery Block',
    description:
      'Our go-to format for beautifully presenting collections of images or videos anywhere on a page.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/jacob-aue-sobol/template/JacobSobol-TemplateHighlights-04.gif',
    title: 'Auto Layouts',
    description:
      'Dynamic layout options to organize content in columns and rows, carousels, or slideshows.',
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
const JacobPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()

  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        showExplore={false}
        headerTitle="Jacob Aue Sobol"
        data-theme="dark"
        copyrightText="© Jacob Aue Sobol / Magnum Photos"
        text={
          <>
            A Danish photographer recognized for his signature{' '}
            <span className="highlight">high-contrast</span> and{' '}
            <span className="highlight">intimate</span> black-and-white images
            captured around the world.
          </>
        }
        FilmButtonLabel="WATCH Jacob Aue Sobol’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube.com/embed/DCjeBMQEPjc?si=gBfFU-yN7lmpGaV_"
        backgroundImgSrc="/collections/jacob-aue-sobol/JacobAueSobol-Hero.jpg"
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
            text="It was six in the morning. I didn't sleep all night because of this picture I wanted of my family sleeping. The three of them in bed. So beautiful they were, laying there. I just wanted to lay beside them, but I had to take this picture."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-01.jpg"
          />
          <ImageCard
            pageIndex="2/8"
            text="These are two trouts that I caught the day before. We live from the fish that I catch—not economically, but we eat fish that I catch 3 to 4 times per week. So it has become an important part of our life, to bring home fish."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-02.jpg"
          />
          <ImageCard
            pageIndex="3/8"
            text="A small house in the forest, close to the sea. It's kind of abandoned. The videographer following me was like, 'How can you run around this hut for one hour and investigate it?' But it's a symbol of our family, our love, a place where you feel safe."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-03.jpg"
          />
          <ImageCard
            pageIndex="4/8"
            text="I had a plan, but the plan changed. I had built a story of what I wanted to tell and how, but when I was going to do the portrait of my wife, our little one-year-old boy came running and jumped into his mother's arms."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-04.jpg"
          />
          <ImageCard
            pageIndex="5/8"
            text="You cannot control children, and this is what is beautiful about them. It's what we need to remember: that this uncontrollable thing is what really makes us human."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-05.jpg"
          />
          <ImageCard
            pageIndex="6/8"
            text="Something unpredictable happened. I take the picture, but the flash doesn't go off. A technical issue. I'm devastated. I'm panicking a bit, but I think about what I've been teaching other people for 20 years: to embrace your mistakes."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-06.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/8"
            text="We live on a small island, so the beach is everywhere, and the ocean is present all over."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-07.jpg"
          />
          <ImageCard
            pageIndex="8/8"
            text="I try to connect, even if it's a house I'm photographing or a tree, branch, whatever. I try to connect with it, put myself in relation, and get the right feeling out of it—why I want to photograph it and how I can do it."
            imageSrc="/collections/jacob-aue-sobol/JacobAueSobol-Select-08.jpg"
          />
        </div>
      </section>
      <WebsiteSection
        data-theme="light"
        title="Jacob's Website"
        description={'"You want to show the world who you are and the audience that you believe in what you\'re doing. It doesn\'t work to hide things away or be shy. Your website should reflect who you are all the way."'}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See JACOB AUE SOBOL’s website"
        weblink="https://www.jacobauesobol.com/"
        backgroundColor="hsla(30.97,12.55%,48.43%,1)"
        textColor="white"
        CTAtheme="light"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="hsla(31.2,11.52%,42.55%,1)"
        textColor="white"
        data={carouselData}
        className="magnumFeature"
        sectionP="A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products."
      />
      <ApplyCritique
        data-theme="light"
        text="Jacob Aue Sobol"
        imageSrc="/collections/magnum/photographers/JacobAueSobol-Portrait.jpg"
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
        imgLink="/collections/jacob-aue-sobol/GetTheTemplate-AueSobol.png"
        CTAlink="https://www.squarespace.com/templates/aue-sobol-fluid-demo"
        CTAtext="Aue Sobol"
        hidden={isCTAHidden}
        arrow="→"
      />
      <PhotographerMenu data-last-section />
      <Footer isDark={false} />
    </div>
  )
}

// export default JeffPage;
export default JacobPage
