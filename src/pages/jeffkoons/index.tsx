import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FloatTemplateCTA from '../../components/FloatTemplateCTA/FloatTemplateCTA'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import JeffImageSection from '../../components/ImageSections/JeffImageSection'
import WebsiteSection from '../../components/WebsiteSection/WebsiteSection'
import { useGlobalFadeIn } from '../../hooks/useGlobalFadeIn'
import FeatureSection from '../../components/FeatureSection/FeatureSection'
import FeatureCarousel from '../../components/FeatureCarousel/FeatureCarousel'
import PreviousCollection from '../../components/PreviousCollection/PreviousCollection'
import { useDynamicScrollBehavior } from '../../hooks/useDynamicScrollBehavior'

const featureData = [
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/website-features/SQSP_Collections_Jeff_Koons_Modules_POWERFUL_DISPLAY_v1_01.gif',
    title: 'A Powerful Display',
    description:
      'Jeff Koons wanted to display multiple images in an overlapping yet organized flow so that each has its own space without any one image overpowering the others.',
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/website-features/SQSP_Collections_Jeff_Koons_Modules_FOCUSED_v2_01.gif',
    title: 'Focused Viewing',
    description:
      'Clicking into any image opens a full screen view of it in orderto experience the artwork on its own the way you would inside a gallery.',
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/website-features/SQSP_Collections_Jeff_Koons_Modules_TIMELINE_v2_01.gif',
    title: 'Visual Timeline',
    description:
      'This style of gallery allows the viewer to experience a series of work as a whole, as well as amongst other series, creating a larger picture of Jeff Koons’ work.',
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/website-features/SQSP_Collections_Jeff_Koons_Modules_AWARDS_v1_01.gif',
    title: 'Archival Columns',
    description:
      'With such a prolific career, organized columns of information highlight Jeff Koons’ successes in an easy-to-navigate format.',
  },
]
const carouselData = [
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/template-features/SQSP_Collections_Jeff_Koons_Modules_03.gif',
    title: 'Block Pinning',
    description:
      'Key content blocks are pinned throughout the homepage to deliver an engaging, stylized scrolling experience.',
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/template-features/SQSP_Collections_Jeff_Koons_Modules_02.gif',
    title: 'Gallery Sections',
    description:
      'Our best format for beautifully presenting collections of images or videos sequentially on a page.',
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/template-features/SQSP_Collections_Jeff_Koons_Modules_04.gif',
    title: 'Online Store',
    description:
      "A digital storefront offers a full series of prints for sale, transforming an artist's brand into a business.",
  },
  {
    imageSrc:
      'https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/template-features/SQSP_Collections_Jeff_Koons_Modules_01.gif',
    title: 'Accordions',
    description:
      'Supporting text is easily expanded and collapsed — helping core messages stand out even more.',
  },
]
const previousCollection = [
  {
    imageSrc: '/collections/jeff-koons/previous-collection/Co_RR.jpg',
    link: '/rickrubin',
  },
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

const JeffPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior() 
  useGlobalFadeIn()

  return (
    <div>
      <Header theme={headerTheme} page="Jeff Koons" />
      <HeaderSection
        data-theme="dark"
        text={
          <>
            A collaboration with <span className="highlight">Jeff Koons</span>{' '}
            to develop an online gallery — showcasing his complete works all in
            one place for the first time ever — and an exclusive template,
            Reflect, to showcase your own work.
          </>
        }
        FilmButtonLabel="Watch Film"
        SecondFilmButtonLabel="Watch Second Film"
        showSecondButton={true}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/w3_Z6V0DH1M?enablejsapi=1&si=XUBE8Y126dRZtL1i"
        secondVideoSrc="https://www.youtube-nocookie.com/embed/another-video-link"
        backgroundVideoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/JK_Header.mp4"
      />
      <FloatTemplateCTA
        theme={ctaTheme}
        CTAlink="https://www.squarespace.com/templates/reflect-fluid-demo"
        imgLink="/collections/jeff-koons/jeff+koons+inflate+template+logo.png"
        CTAtext="REFLECT"
        hidden={isCTAHidden}
      />
      <JeffImageSection data-theme="light" />
      <WebsiteSection
        data-theme="dark"
        title="The Website"
        description="A dynamic design navigates through Jeff Koons’ more than four decades of work – from his early beginnings breaking into the art world to his global fame. Inspired by his focus on pop-culture and recontextualizing everyday objects, the design redefines minimalism with bold and playful elements.
"
        videoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/SQSP_Collections_Jeff_Koons_Modules_COLLECTIONS_SITE_v1_01.mp4"
        webtext="GO TO JEFFKOONS.COM"
        weblink="https://www.jeffkoons.com/"
        backgroundColor="#202020"
        textColor="white"
      />
      <FeatureSection
        data-theme="dark"
        data={featureData}
        backgroundColor="#202020"
      />
      <WebsiteSection
        data-theme="dark"
        title="Reflect Template"
        description="Inspired by Jeff Koons’ website, the Reflect Template gives anyone the ability to showcase their own work on a customizable expressive platform."
        videoSrc="https://storage.cloud.google.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/SQSP_Collections_Jeff_Koons_Modules_EN_REFLECT_SITE_v1_01.mp4"
        webtext="view full demo site"
        weblink="https://www.squarespace.com/templates/reflect-fluid-demo"
        backgroundColor="#202020"
        textColor="white"
      />
      <FeatureCarousel
        data-theme="dark"
        backgroundColor="#202020"
        data={carouselData}
      />
      <PreviousCollection
        data-theme="dark"
        backgroundColor="black"
        textColor="white"
        images={previousCollection}
        data-last-section
      />{' '}
      <Footer />
    </div>
  )
}

// export default JeffPage;
export default JeffPage
