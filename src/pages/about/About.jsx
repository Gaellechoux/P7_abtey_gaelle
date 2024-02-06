import React from "react";
import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Collapse from "../../components/collapse/Collapse";
import AboutData from "../../data/about.json";
const About = () => {
  return (
    <>
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
    </>
  );
};

export default About;
