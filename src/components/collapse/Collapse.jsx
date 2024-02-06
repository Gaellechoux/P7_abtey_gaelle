import React, { useState } from "react"; 
import Chevron from "../../assets/Vector.png";

const Collapse = ({ title, content }) => {
  // je definis le state du isOpen (et false par défaut)
  const [isOpen, setIsOpen] = useState(false); 

 //je définis la fonction isOpenState qui modifie la valeur isOpen au clic
  const isOpenState = () => {
    setIsOpen(!isOpen);
  };

  // J'affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte
  return (
    <div className="collapse">
      <div
        className={
          "collapse__title" + (isOpen ? " collapse__title--active" : "")
        }
        onClick={isOpenState}
      >
        <h2>{title}</h2>
        {/* <i className="fas fa-chevron-down"></i> */}
        <img
          className={isOpen ? "chevron rotated" : "chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        className={
          "collapse__content" + (isOpen ? " collapse__content--active" : "")
        }
      >
        <p className="collapse__content-description">{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
