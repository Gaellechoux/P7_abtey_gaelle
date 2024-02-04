// import React from 'react';
import React, { useState } from "react";
import left from "../../assets/flech-left.png";
import right from "../../assets/flech-right.png";

const Carrousel = ({ slides }) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const length = slides.length; //longueur du tableau de slides

  /**Function pour l'image precedente */
  const nextImage = () => {
    setCurrentPicture(currentPicture === length - 1 ? 0 : currentPicture + 1);
  };
  /**Function pour l'image suivante */
  const prevImage = () => {
    setCurrentPicture(currentPicture === 0 ? length - 1 : currentPicture - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <img
            src={left} //Affichage des flèches seulement si length > 1
            alt="gauche"
            className="leftArrow"
          />
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <img src={right} alt="droite" className="rightArrow" />
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === currentPicture ? "slider active" : "slider"}
          >
            {index === currentPicture && (
              <img src={image} alt="img-appart" className="slide__img" />
            )}
            {index === currentPicture && length > 1 && (
              <span className="slider__number">
                {currentPicture + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carrousel;
