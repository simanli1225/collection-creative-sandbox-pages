import React from "react";
import styles from "./index.less";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FloatTemplateCTA from "../../components/FloatTemplateCTA/FloatTemplateCTA";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import FeatureCarousel from "../../components/FeatureCarousel/FeatureCarousel";
import { useDynamicScrollBehavior } from "../../hooks/useDynamicScrollBehavior";
import GalleryBlock from "../../components/MagnumGalleryBlock/GalleryBlock";
import { useGlobalFadeIn } from "../../hooks/useGlobalFadeIn";

const carouselData = [
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-Arthur.png",
    title: "Arthur",
    description:
      "An airy design created in collaboration with Olivia Arthur, with abundant white space and an organic layout.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/arthur-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-AueSobol.png",
    title: "Aue Sobol",
    description:
      "A versatile design created in collaboration with Jacob Aue Sobol, with bold typography and a prominent display for products.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/aue-sobol-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-Cimen.gif",
    title: "Çimen",
    description:
      "A video-forward design created in collaboration with Sabiha Çimen, with a versatile multi-column layout to exhibit varying work.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/cimen-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-Gilden.png",
    title: "Gilden",
    description:
      "A contemporary and powerful design created in collaboration with Bruce Gilden.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/gilden-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-Keo.png",
    title: "Keo",
    description:
      "A brutalist design created in collaboration with William Keo, with a roomy grid layout and a multitude of pages to highlight your work.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/keo-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
  {
    imageSrc: "/collections/magnum/template/MagnumCollection-McCurry.png",
    title: "McCurry",
    description:
      "A well-structured design created in collaboration with Steve McCurry, with distinct elements throughout, and generous room for a multitude of projects.",
    ctaText: "START WITH THIS DESIGN",
    ctaLink: "https://www.squarespace.com/templates/mccurry-fluid-demo",
    openInNewTab: true,
    CTAtheme: "dark",
  },
] as const;
const scrollToLastSection = (event: React.MouseEvent) => {
  event.preventDefault();

  const lastSection = document.querySelector("[data-last-section]");
  if (lastSection) {
    (lastSection as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  } else {
    // console.error("no data-last-section");
  }
};

const MagnumPage = () => {
  const { headerTheme, ctaTheme, isCTAHidden } = useDynamicScrollBehavior();
  useGlobalFadeIn();

  return (
    <div>
      <Header theme={headerTheme} page="Magnum" />
      <HeaderSection
        data-theme="dark"
        text={
          <>
            A collaboration with{" "}
            <span className="highlight">Magnum Photos</span> for an
            unprecedented project: six iconic photographers shooting on a single
            film roll around the world, and a collection of six website designs
            inspired by their creativity.
          </>
        }
        FilmButtonLabel="Watch Film"
        showSecondButton={false}
        defaultVideoSrc="https://www.youtube-nocookie.com/embed/_TGYSOaECes?si=_E2LEKK2sFHFrdTo"
        backgroundVideoSrc="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/magnum/magnum_bg_bolex_film_roll_edit_EDL_Grade.mov"
      />
      <section
        data-theme="light"
        className={`${styles.magnumGallerySection} ${styles.section}`}
      >
        <div className={`${styles.titleText}`}>
          <h1 className={`${styles.sectionTitleH1}`}>The Photographers</h1>
        </div>
        <div className={`${styles.gallerySection}`}>
          <GalleryBlock
            title="Bruce Gilden"
            description="For more than 50 years, Brooklyn-born Bruce Gilden has honed his signature street photography style around the world. Gilden’s work distills the variety and character of the street."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/BruceGilden-Portrait.jpg"
            imageAlt="Bruce Gilden"
            imageOnRight={false}
            ctaLink="/bruce-gilden"
          />
          <GalleryBlock
            title="Jacob Aue Sobol"
            description="A Danish photographer recognized for his signature high-contrast and intimate black-and-white images captured around the world."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/JacobAueSobol-Portrait.jpg"
            imageAlt="Jacob Aue Sobol"
            imageOnRight={true}
            ctaLink="/jacob-aue-sobol"
          />
          <GalleryBlock
            title="Olivia Arthur"
            description="A photographer from London recognized for her documenting of people and their personal and cultural identities, often working in intimate settings."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/OliviaArthur-Portrait.jpg"
            imageAlt="Olivia Arthur"
            imageOnRight={false}
            ctaLink="/olivia-arthur"
          />
          <GalleryBlock
            title="Sabiha Çimen"
            description="A self-taught Turkish photographer known for her portraiture and still-life images rooted in Islamic culture. She mostly works on developing self-reflective long-term projects close to home in Istanbul."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/SabihaCimen-Portrait.jpg"
            imageAlt="Sabiha Çimen"
            imageOnRight={true}
            ctaLink="/sabiha-cimen"
          />
          <GalleryBlock
            title="Steve McCurry"
            description="A Philadelphia-born photographer famous for documenting international cultures and conflicts with a steadfast focus on the human element."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/SteveMcCurry-Portrait.jpg"
            imageAlt="Steve McCurry"
            imageOnRight={false}
            ctaLink="/steve-mcCurry"
          />
          <GalleryBlock
            title="William Keo"
            description="A French-Cambodian photographer who specializes in introspectively illustrating social issues, including migration, social exclusion, and inter-community intolerance."
            buttonText="Explore →"
            imageUrl="/collections/magnum/photographers/WilliamKeo-Portrait.jpg"
            imageAlt="William Keo"
            imageOnRight={true}
            ctaLink="/william-keo"
          />
        </div>
      </section>
      <FeatureCarousel
        data-last-section
        data-theme="light"
        backgroundColor="#D6D4CF"
        textColor="black"
        data={carouselData}
        CTAtheme="dark"
        className="magnumFeature"
        sectionP="A set of six template designs inspired by six iconic photographers."
      />
      <FloatTemplateCTA
        theme={ctaTheme}
        onClick={scrollToLastSection}
        // CTAlink="https://www.squarespace.com/templates/reflect-fluid-demo"
        imgLink="/collections/magnum/MagnumCollection-TemplateStore.png"
        CTAtext="MAGNUM"
        hidden={isCTAHidden}
        arrow="↓"
        scrollToSection={true}
      />

      <Footer isDark={true} />
    </div>
  );
};

export default MagnumPage;
