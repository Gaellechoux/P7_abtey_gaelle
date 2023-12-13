import React, { useState } from 'react';
  
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const isOpenState = () => {
        setIsOpen(!isOpen);
      };

    return (
     
      <div className="collapse">
        <div className={"collapse__title" + (isOpen ? " collapse__title--active" : "")} onClick={isOpenState}>
          <h2>{title}</h2>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="collapse__content">
         {isOpen && <p className='collapse__content-description'>{content}</p>}
          </div>
      </div>
    );
};

export default Collapse;