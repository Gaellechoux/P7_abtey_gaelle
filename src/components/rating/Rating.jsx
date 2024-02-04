import React from "react";
import coloredStar from "../../assets/startRempli.png";
import whiteStar from "../../assets/startVide.png";

const Rating = ({ score }) => {
  const starts = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {starts.map((note) =>
        Number(score) >= note ? (
          <img
            key={note.toString()}
            className="etoile--active"
            src={coloredStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile--off"
            src={whiteStar}
            alt="star"
          />
        )
      )}
    </div>
  );
};

export default Rating;
