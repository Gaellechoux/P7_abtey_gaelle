import React from "react";

const Host = (props) => {
  return (
    <div className="host">
      <h3 className="host__name">{props.name}</h3>
      <div className="host__Picture">
        <img src={props.picture} alt="" />
      </div>
    </div>
  );
};

export default Host;
