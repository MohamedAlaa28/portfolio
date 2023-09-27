import React from "react";
import aboutLogo_2 from "../../../assets/images/compressed/Mario and Adrian a-min.jpg";
import aboutLogo_1 from "../../../assets/images/compressed/Mario and Adrian b-min.jpg";
import "../css/_About.scss";
import LazyLoad from "react-lazyload";

const About = () => {
  return (
    <section id="about">
      <article className="text-section">
        <p className="h1">little lemon</p>
        <p className="h3">egypt</p>
        <p className="p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </article>
      <section className="images-section">
        <LazyLoad>
          <img
            src={aboutLogo_1}
            alt="aboutLogo_1"
            className="header-logo-over-one header-logo"
          />
        </LazyLoad>
        <LazyLoad>
          <img
            src={aboutLogo_2}
            alt="aboutLogo_2"
            className="header-logo-over-two header-logo"
          />
        </LazyLoad>
      </section>
    </section>
  );
};

export default About;
