import React from "react";
import imageAbout from "../../assets/image_about.png";

const AboutBanner = () => {
  return (
    <div className="about__banner">
      <img className="about__img" src={imageAbout} alt="Bannière" />
      <div className="banner__shadow"></div>
    </div>
  );
};

export default AboutBanner;
