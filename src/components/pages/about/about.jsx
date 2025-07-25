import React from "react";
import "./about.scss";
import dior1 from "../../../assets/dior1.jpg";
import dior2 from "../../../assets/dior2.webp";
import dior3 from "../../../assets/dior3.jpg";
import dior4 from "../../../assets/dior4.jpg";
import dior5 from "../../../assets/dior5.webp";
import dolce1 from "../../../assets/dolce1.webp";
import dolce2 from "../../../assets/dolce2.webp";
import dolce3 from "../../../assets/dolce3.webp";
import dolce4 from "../../../assets/dolce4.webp";
import dolce5 from "../../../assets/dolce5.webp";
import dolce6 from "../../../assets/dolce6.webp";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="about--dior">
            <h1>DIOR</h1>
            <h2>Women's Fragrances</h2>
            <p>
              Discover all of the Dior women's fragrances. From J'adore, the
              iconic women's fragrance by the House since 1999, to Miss Dior,
              the fragrance intimately tied to Dior couture: you will find a
              scent to suit your personality with one of the eau de toilette,
              eau de parfum or parfum creations. Enrich your Dior experience
              with the scented bath and body creations imbued with the notes of
              your fragrance.
            </p>
            <div className="about--dior__img">
              <img src={dior1} alt="img" />
              <img src={dior2} alt="img" />
              <img src={dior3} alt="img" />
              <img src={dior4} alt="img" />
              <img src={dior5} alt="img" />
            </div>
          </div>
          <div className="about--dior">
            <h1>DOLCE & GABBANA </h1>
            <h2>Pamper yourself with exclusive Dolce&Gabbana® fragrances:</h2>
            <p>
              Dolce & Gabbana is a luxury Italian fashion brand known for its
              bold, passionate, and Mediterranean-inspired style. Their perfume
              line reflects elegance, sensuality, and a strong connection to
              Italian heritage.
            </p>
            <div className="about--dior__img">
              <img src={dolce1} alt="img" />
              <img src={dolce2} alt="img" />
              <img src={dolce3} alt="img" />
              <img src={dolce4} alt="img" />
              <img src={dolce5} alt="img" />
              <img src={dolce6} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
