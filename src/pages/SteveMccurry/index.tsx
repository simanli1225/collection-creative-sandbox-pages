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
      '/collections/steve-mccurry/template/SteveMcCurry-TemplateHighlights-01.png',
    title: 'Client Invoicing',
    description:
      'Tools to manage your business -- from vetting leads to receiving payment via invoices in one streamlined, customizable workflow.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/steve-mccurry/template/SteveMcCurry-TemplateHighlights-02.gif',
    title: 'Gallery Block',
    description:
      'Our go-to format for beautifully presenting collections of images or videos anywhere on a page.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/steve-mccurry/template/SteveMcCurry-TemplateHighlights-03.png',
    title: 'Stylized Headers',
    description:
      "Borders, gradients, and other design effects that amplify your website's navigation bar.",
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/steve-mccurry/template/SteveMcCurry-TemplateHighlights-04.gif',
    title: 'Auto Layouts',
    description:
      "Dynamic layout options to organize content in columns and rows, carousels, or slideshows.",
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
      'A brutalist design created in collaboration with Steve McCurry, with a roomy grid layout and a multitude of pages to highlight your work.',
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
const StevePage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()

  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        showExplore={false}
        headerTitle="Steve McCurry"
        data-theme="dark"
        copyrightText="© Steve McCurry / Magnum Photos"
        text={
          <>
A Philadelphia-born photographer known for documenting international <span className="highlight">cultures</span> and <span className="highlight">conflicts</span> with a steadfast focus on the human element.
          </>
        }
        FilmButtonLabel="WATCH Steve McCurry’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube.com/embed/AtBNOKri3Ws?si=7dGWtJ6oGKf9Ctwb"
        backgroundImgSrc="/collections/steve-mccurry/SteveMcCurry-Hero.jpg"
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
            text="It's always a pleasure to spend time with my daughter and photograph my wife. We kind of do this every day. So that's why I selected the photograph of them. It's such a beautiful thing to see that relationship."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-01.jpg"
          />
          <ImageCard
            pageIndex="2/7"
            text="I wanted to photograph my daughter. I'd just came back from a trip and am ready to leave on another. And I thought, let's just spend some time together. And it was partly portraiture, partly experimental."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-02.jpg"
          />
          <ImageCard
            pageIndex="3/7"
            text="I think that she probably would have preferred to be out playing at the park. You know, asking a six-year-old to sit still is, like, a miracle outside of anything."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-03.jpg"
          />
          <ImageCard
            pageIndex="4/7"
            text="My daughter is part-Hopi, from the Hopi tribe in Arizona. So, I photographed her in her Hopi dress."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-04.jpg"
          />
          <ImageCard
            pageIndex="5/7"
            text="I photograph my daughter literally every day. Every day. So, you know, we know she's used to the camera."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-05.jpg"
          />
          <ImageCard
            pageIndex="6/7"
            text="My daughter making funny faces. I don't know if that'll translate into anything. It's more of a personal thing."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-06.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/7"
            text="I think you always want to go to places that intrigue you, places that you have, you know, a passion for. I think that's how you decide what and where to work."
            imageSrc="/collections/steve-mccurry/gallery/SteveMcCurry-Select-07.jpg"
          />
        </div>
        {/* <div className={`${styles.gallerySection}`}>
  {[
    {
      pageIndex: '1/7',
      text: "It's always a pleasure to spend time with my daughter and photograph my wife. We kind of do this every day. So that's why I selected the photograph of them. It's such a beautiful thing to see that relationship.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-01.jpg',
    },
    {
      pageIndex: '2/7',
      text: "I wanted to photograph my daughter. I'd just came back from a trip and am ready to leave on another. And I thought, let's just spend some time together. And it was partly portraiture, partly experimental.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-02.jpg',
    },
    {
      pageIndex: '3/7',
      text: "I think that she probably would have preferred to be out playing at the park. You know, asking a six-year-old to sit still is, like, a miracle outside of anything.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-03.jpg',
    },
    {
      pageIndex: '4/7',
      text: "My daughter is part-Hopi, from the Hopi tribe in Arizona. So, I photographed her in her Hopi dress.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-04.jpg',
    },
    {
      pageIndex: '5/7',
      text: "I photograph my daughter literally every day. Every day. So, you know, we know she's used to the camera.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-05.jpg',
    },
    {
      pageIndex: '6/7',
      text: "My daughter making funny faces. I don't know if that'll translate into anything. It's more of a personal thing.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-06.jpg',
    },
    {
      pageIndex: '7/7',
      text: "I think you always want to go to places that intrigue you, places that you have, you know, a passion for. I think that's how you decide what and where to work.",
      imageSrc: '/collections/steve-mccurry/gallery/SteveMcCurry-Select-07.jpg',
    },
  ].map((item, index) => (
    <FadeInOnScroll key={index}>
      <ImageCard
        pageIndex={item.pageIndex}
        text={item.text}
        imageSrc={item.imageSrc}
      />
    </FadeInOnScroll>
  ))}
</div> */}

      </section>
      <WebsiteSection
        data-theme="light"
        title="Steve’s Website"
        description={`"If you want to see somebody's work, you want to look at it big and be able to spend time with it. Not everybody has your books; not everybody can go to an exhibition. Everybody is online."`}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See Steve McCurry’s website"
        weblink="https://www.stevemccurry.com/"
        backgroundColor="#d7cec1"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#ebe2d4"
        textColor="black"
        data={carouselData}
        className="magnumFeature"
        sectionP="A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products."
      />
      <ApplyCritique
        data-theme="light"
        text="Steve McCurry"
        imageSrc="/collections/magnum/photographers/SteveMcCurry-Portrait.jpg"
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
        imgLink="/collections/steve-mccurry/GetTheTemplate-McCurry.png"
        CTAlink="https://keo-fluid-demo.squarespace.com/"
        CTAtext="Mccurry"
        hidden={isCTAHidden}
        arrow="→"
      />
      <PhotographerMenu data-last-section />
      <Footer isDark={false} />
    </div>
  )
}

// export default JeffPage;
export default StevePage
