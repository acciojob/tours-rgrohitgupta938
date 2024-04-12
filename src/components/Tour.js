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
        <p>
          {show ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShow((prev) => !prev)}>
            {show ? "Show Less" : "Read More"}
          </button>
        </p>
        <p>Rs{price}/-</p>
        <div>
          <button onClick={() => onDelete(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
