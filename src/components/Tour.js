import React, { useState } from "react";
import "../styles/App.css";

const Tour = ({ data, onDelete }) => {
  const [show, setShow] = useState(false);
  const { image, id, name, info, price } = data;
  return (
    <div className="tour">
      <div className="tour-img">
        <img src={image} />
      </div>
      <div className="tour-info">
        <h2>{name}</h2>
        <p id={`tour-item-para-${id}`}>
          {show ? info : `${info.substring(0, 200)}...`}
          <button
            id={`see-more-${id}`}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Show less" : "See more"}
          </button>
        </p>
        <p>Rs{price}/-</p>
        <div>
          <button id={`delete-btn-${id}`} onClick={() => onDelete(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
