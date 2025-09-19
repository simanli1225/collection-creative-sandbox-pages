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
      '/collections/olivia-arthur/template/OliviaArthur-TemplateHighlights-01.gif',
    title: 'Courses',
    description:
      'Create and sell online courses with multimedia lessons, chapters, and progress tracking for students.',
    openInNewTab: false,
  },
  {
    imageSrc:
    '/collections/olivia-arthur/template/OliviaArthur-TemplateHighlights-02.png',
    title: 'Fluid Engine',
    description:
      'Our groundbreaking drag-and-drop editor that provides total control of website layout and design.',
    openInNewTab: false,
  },
  {
    imageSrc:
    '/collections/olivia-arthur/template/OliviaArthur-TemplateHighlights-03.gif',
    title: 'Stylized Headers',
    description:
      "Borders, gradients, and other design effects that amplify your website's navigation bar.",
    openInNewTab: false,
  },
  {
    imageSrc:
    '/collections/olivia-arthur/template/OliviaArthur-TemplateHighlights-04.png',
    title: 'Built-In Image Editor',
    description:
      'Native tools for adjusting image intensity, cropping, or applying preset filters.',
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
        headerTitle="Olivia Arthur"
        data-theme="dark"
        copyrightText="© Olivia Arthur / Magnum Photos"
        text={
          <>
          A photographer from London recognized for her documenting of people and their <span className="highlight">personal</span> and <span className="highlight">cultural identities</span>, often working in intimate settings.
          </>
        }
        FilmButtonLabel="WATCH Olivia Arthur’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube.com/embed/g8KoXFhY-A0?si=jtZkFTHJQuFmgpae"
        backgroundImgSrc="/collections/olivia-arthur/OliviaArthur-Home-Nav-Hover.jpg"
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
            text="We go through the woods to a little river in a ravine with a very special atmosphere. The trees are all covered in bright green moss. The children hid as if playing hide-and-seek. One of them is jumping around."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-01.jpg"
          />
          <ImageCard
            pageIndex="2/8"
            text="This is very much the kids at play. Hanging upside down. We have these rings that they like to hang on. It’s a space that I love to photograph—a big window and a plain wall."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-02.jpg"
          />
          <ImageCard
            pageIndex="3/8"
            text="I guess it's a very deep ravine. And so, probably in winter, the sun doesn't even get in. But at a certain time of day, the light comes down, but the rest is quite dark, and it makes a great contrast."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-03.jpg"
          />
          <ImageCard
            pageIndex="4/8"
            text="As the water comes through the rocks, it pummels down, and then it waterfalls. These little shoots of water. And we like to go and sit, and you can kind of let it pound over you. So one of my friends went in."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-04.jpg"
          />
          <ImageCard
            pageIndex="5/8"
            text="Let's call [this] an interactive sculpture made by my two daughters out of pieces of nature. One of the things that we do with the kids quite often is go on walks, and they collect things, and we bring them back."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-05.jpg"
          />
          <ImageCard
            pageIndex="6/8"
            text="I wanted to see how everyone felt. After we done that, we came back to the house. We have a couple of places in the trees that are really beautiful, one that they call their climbing tree because it's got these amazing big branches."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-06.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/8"
            text="We went on a walk and collected various different things that they found: sticks, leaves, dried things. And we hung them up. The kids got very involved and wanted to be in the picture."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-07.jpg"
          />
          <ImageCard
            pageIndex="8/8"
            text="We have a lot of trees around. It's very green. It's kind of wooded. One of the girls took leaves on her eyes like this."
            imageSrc="/collections/olivia-arthur/gallery/OliviaArthur-Select-08.jpg"
          />
        </div>
      </section>

      <WebsiteSection
        data-theme="light"
        title="Olivia's Website"
        description={`"If someone wants to see the full scope of what I do, the best place is going to be my website. It's my showcase, it's my 'this is who I am.'"`}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See Olivia Arthur’s website"
        weblink="https://www.oliviaarthur.com/"
        backgroundColor="#dad5ca"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#e5e2dc"
        textColor="black"
        data={carouselData}
        className="magnumFeature"
        sectionP="A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products."
      />
      <ApplyCritique
        data-theme="light"
        text="Olivia Arthur"
        imageSrc="/collections/magnum/photographers/OliviaArthur-Portrait.jpg"
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
        imgLink="/collections/olivia-arthur/olivia-check-template.png"
        CTAlink="https://www.squarespace.com/templates/arthur-fluid-demo"
        CTAtext="Arthur"
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
