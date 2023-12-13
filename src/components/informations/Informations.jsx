import React, { useState } from 'react';

const Informations = ({ description, equipments, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenState = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="informations">
        <div className={"informations__description" + (isOpen ? " informations__description--active" : "")} onClick={isOpenState}>
          <h2>{description}</h2>
          <h2>{equipments}</h2>
          <i className="fas fa-chevron-down"></i>
        </div>
        
        <div className="information__content">
         {isOpen && <p className='information__content-description'>{content}</p>}
          </div>
      </div>
    );
};

export default Informations;