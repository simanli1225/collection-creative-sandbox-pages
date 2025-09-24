import React from "react";
import styles from "./JeffImageSection.less";
import ExpandableList from "../../components/ExpandableList/ExpandableList";
import Image from "../../components/Image";
import Video from "../../components/Video";

const attributionItems = [
  "PHOTOGRAPHS COURTESY OF",
  "Fondation Beyeler",
  "Laurent Lecat",
  "The Brant Foundation, Greenwich, CT",
  "Associated Press",
  "Michael JN Bowles",
  "Robert Cummerow, Madhouse Creative, LLC",
  "The Broad Art Foundation",
  "Douglas M. Parker Studios, Los Angeles",
  "Tom Powell Imaging",
  "Bernardaud",
  "Sotheby’s, Inc. © 2019",
  "Liebieghaus Skulpturensammlung (Exhibition view “Jeff Koons. The Painter & The Sculptor” at the Liebieghaus Skulpturensammlung, Frankfurt am Main, 2012, Photo: Liebieghaus Skulpturensammlung – Alexander Paul Englert",
];
interface GridSectionProps {
  "data-theme": string; // 接收 data-theme
}

const JeffImageSection: React.FC<GridSectionProps> = ({
  "data-theme": dataTheme,
}) => {
  return (
    <section data-theme={dataTheme} className={styles.section}>
      <div className={styles.titleText}>
        <h1>The Making of</h1>
        <p>
          Exploring themes of self-acceptance and transcendence, the goal of
          Jeff Koons’ work has always been to democratize the art world. In this
          collaboration, we designed and developed a custom website to display
          his expansive body of work and make it accessible to anyone anywhere.
        </p>
      </div>
      <div className={styles.gridSection}>
        <div className={styles.gridItem + " " + styles.image}>
          <Image
            className={styles.flower}
            src="/collections/jeff-koons/gallery/jeff-koons-icons.png"
            alt=""
            loading="eager"
            width={500}
            height={300}
          />
          {/* <img
            className={styles.flower}
            src="https://images.squarespace-cdn.com/content/v1/64ff65b6f8197b243d3c8ee2/2001e92f-5a8e-4661-a156-fb72877e6708/jeff-koons-icons.png?format=300w"
            alt=""
          /> */}
          {/* <img src="/placeholder/1.png" alt="Description of the image" /> */}
          <Video src="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/JK_Header.mp4" />
          <p>
            "The only thing you can hope for is that the viewer can find
            something that can give themthe essence of their own potential.
            That's where the art is."
          </p>
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          {/* <img src="/placeholder/2.png" alt="Description of the image" /> */}
          <Video src="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/gallery/3D%20Printer.mp4" />
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          {/* <img src="/placeholder/3.png" alt="Description of the image" /> */}
          <Video src="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/gallery/JK_Review_1.mp4" />
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          {/* <img src="/placeholder/4.png" alt="Description of the image" /> */}
          <Video src="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/gallery/Computer%20Bunny_1.mp4" />

          {/* <p>
            “What really anchors art and gives it meaning to humanity is the
            power of connections. This type of democratization is really the
            basis of all art. To be able to share and be generous."
          </p> */}
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          <div></div>
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          <p>
            “What really anchors art and gives it meaning to humanity is the
            power of connections. This type of democratization is really the
            basis of all art. To be able to share and be generous."
          </p>
        </div>
        <div className={styles.gridItem + " " + styles.image}>
          <Image
            className={styles.balloonFlower}
            src="/collections/jeff-koons/gallery/balloonflower_yelllow.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />
          <Image
            className={styles.metallicVenus}
            src="/collections/jeff-koons/gallery/MetallicVenus_MG_0517.png"
            alt=""
            loading="eager"
            width={1440}
            height={900}
          />
          {/* <img src="/placeholder/5.png" alt="Description of the image" />
          <img src="/placeholder/6.png" alt="Description of the image" /> */}
        </div>
        <div className={styles.gridItem + " " + styles.text}>
          {/* <img src="/placeholder/7.png" alt="Description of the image" /> */}
          <Video src="https://storage.googleapis.com/fdfc-www-prod-001-media-www/images/pages/creative-sandbox/collections/jeff-koons/gallery/Laptop.mp4" />

          {/* <p>More text content if needed.</p> */}
        </div>
      </div>
      <ExpandableList title="Attributions" items={attributionItems} />
    </section>
  );
};

export default JeffImageSection;
