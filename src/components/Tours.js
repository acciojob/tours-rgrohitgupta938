import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onDelete }) => {
  return (
    <div>
      {tours.map((t) => (
        <Tour data={t} onDelete={onDelete} key={t.id} />
      ))}
    </div>
  );
};

export default Tours;
