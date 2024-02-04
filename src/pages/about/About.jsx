import React from "react";
import Header from "../../components/Header/header";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Footer from "../../components/footer/Footer";
import Collapse from "../../components/collapse/Collapse";
import AboutData from "../../data/about.json";
const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutBanner />
        <div className="collapse__about">
          {AboutData.map((about) => (
            <Collapse
              key={about.id}
              apropos={about.id}
              content={about.content}
              title={about.title}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
