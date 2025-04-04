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
      '/collections/william-keo/template/WilliamKeo-TemplateHighlights-01.png',
    title: 'Fluid Engine',
    description:
      'Our groundbreaking drag-and-drop editor that provides total control of website layout and design.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/william-keo/template/WilliamKeo-TemplateHighlights-02.gif',
    title: 'Scrolling Block',
    description:
      'Animated text and graphics that draw attention to key statements, whether big or small.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/william-keo/template/WilliamKeo-TemplateHighlights-03.png',
    title: 'Portfolio Page',
    description:
      'A central area for your portfolio, with dedicated and customizable space for each project.',
    openInNewTab: false,
  },
  {
    imageSrc:
      '/collections/william-keo/template/WilliamKeo-TemplateHighlights-04.gif',
    title: 'Stylized Headers',
    description:
      "Borders, gradients, and other design effects that amplify your website's navigation bar.",
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
const WilliamPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()

  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        showExplore={false}
        headerTitle="William Keo"
        data-theme="dark"
        copyrightText="© William Keo / Magnum Photos"
        text={
          <>
A French-Cambodian photographer who specializes in introspectively illustrating <span className="highlight">social issues</span>, including migration, social exclusion, and inter-community intolerance.

          </>
        }
        FilmButtonLabel="WATCH William Keo’S FILM"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube.com/embed/KDCHcQ-1lFA?si=MsyfB02BBSwW_yNq"
        backgroundImgSrc="/collections/william-keo/WilliamKeo-Hero-01.jpg"
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
            text="The train station in Bobigny. It's a place where you can see so many people in movement. People from Paris who just finished or are starting their job. I spent so much time waiting here. It was my starting point to go to everywhere."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-01.jpg"
          />
          <ImageCard
            pageIndex="2/8"
            text="Photography tells more about the photographer than about the subject. There is not enough information, so we accept that it's a very personal point of view. It can be your fear, sex, origin; if you are a white woman, a black man, younger, older—all of that influences your photography."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-02.jpg"
          />
          <ImageCard
            pageIndex="3/8"
            text="It’s an empty place, but you can understand that something will happen. You cannot see anybody in the picture. You can see flames, a grill, some empty chairs. But I'll just leave the mystery and let you discover what the picture’s about."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-03.jpg"
          />
          <ImageCard
            pageIndex="4/8"
            text="My best friend. He’s Tunisian. I’ve spent so much time with him. He represents brotherhood. I learned with him the feeling [of having] friends who are too close to be just friends; they are just part of your family."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-04.jpg"
          />
          <ImageCard
            pageIndex="5/8"
            text="We went to a mall which was partially destroyed by the riots, and I shot a guy who had just grilled corn. I had to move fast because the corn sellers are illegal. In the confusion, I got the wrong camera and used the main body."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-05.jpg"
          />
          <ImageCard
            pageIndex="6/8"
            text="My father taught me photography when I was a child. He's still a photographer but not a professional. I think, for him, it was a way to express his experience as a refugee. He's still a refugee; he fled the Cambodian Civil War."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-06.jpg"
          />{' '}
          <ImageCard
            pageIndex="7/8"
            text="I'm obsessed with my own past, my own history, and my own hometown. Every morning, I'm just thinking about, what can I do in my hometown? What can I shoot? Who can I call to go further to do something here?"
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-07.jpg"
          />
          <ImageCard
            pageIndex="8/8"
            text="I try to avoid easy pictures, stereotypes. I love to go deep and have a more anthropological approach than just going with the flow. And because I'm a photojournalist, I try to give keys to people because nothing is so easy to understand."
            imageSrc="/collections/william-keo/gallery/WilliamKeo-Select-08.jpg"
          />
        </div>
      </section>
      <WebsiteSection
        data-theme="light"
        title="William’s Website"
        description={`"A website is like a house. It's a very personal space. You can visit and see what the photographer's like. It's a space for expression."`}
        videoSrc="https://static1.squarespace.com/static/64ff65b6f8197b243d3c8ee2/t/67001e3dc414c63bf5c3fcb4/1728060991267/Co_LoadingAnimation_JK1.mp4"
        webtext="See WILLIAM KEO’s website"
        weblink="https://www.william-keo.com/"
        backgroundColor="#dfe7e7"
        textColor="black"
        CTAtheme="dark"
      />
      <FeatureCarousel
        data-theme="light"
        backgroundColor="#c1c8c8"
        textColor="black"
        data={carouselData}
        className="magnumFeature"
        sectionP="A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products."
      />
      <ApplyCritique
        data-theme="light"
        text="William Keo"
        imageSrc="/collections/magnum/photographers/WilliamKeo-Portrait.jpg"
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
        imgLink="/collections/william-keo/GetTheTemplate-Keo.png"
        CTAlink="https://keo-fluid-demo.squarespace.com/"
        CTAtext="Keo"
        hidden={isCTAHidden}
        arrow="→"
      />
      <PhotographerMenu data-last-section />
      <Footer isDark={false} />
    </div>
  )
}

// export default JeffPage;
export default WilliamPage
