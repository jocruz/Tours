import React from "react";
import { useState } from "react";
const Tour = ({ removeTour, id, name, info, image, price }) => {
  const shortDesc = info.substring(0, info.length / 2);
  const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {
  //   if (!toggle) {
  //     setDescription(info);
  //     setToggle(true);
  //   } else {
  //     setToggle(false);
  //     setDescription(shortDesc);
  //   }
  // };

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{toggle ? info : `${shortDesc}...`}</p>
        <button
          
          className="info-btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Read less" : "Read More"}
        </button>
        <button
          
          onClick={() => {
            removeTour(id);
          }}
          className="delete-btn btn-block btn"
        >
          remove tour from list
        </button>
      </div>
    </article>
  );
};

export default Tour;
