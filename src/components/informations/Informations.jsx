import React, { useState } from "react";
import Chevron from "../../assets/Vector.png";

const Informations = ({ title, equipments, content, isHTML = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="informations">
      <div
        className={
          "informations__title" + (isOpen ? " informations__title--active" : "")
        }
        onClick={isOpenState}
      >
        <h2>{title}</h2>
        <h2>{equipments}</h2>
        {/* <i className="fas fa-chevron-down"></i> */}
        <img
          className={isOpen ? "chevron rotated" : "chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>

      <div
        className={
          "informations__content" +
          (isOpen ? " informations__content--active" : "")
        }
      >
        {isHTML ? (
          content
        ) : (
          <p className="informations__content-description">{content}</p>
        )}
      </div>
      {/* <div className="information__content">
         {isOpen && <p className='information__content-description'>{content}</p>}
          </div> */}
    </div>
  );
};

export default Informations;
