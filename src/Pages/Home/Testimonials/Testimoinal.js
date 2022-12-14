import React from "react";

const Testimoinal = ({ testimonial }) => {
  const { name, img, address, comment } = testimonial;
  return (
    <div className="mt-36 px- shadow-lg">
      <div>
        <p className="mb-9">{comment}</p>
      </div>
      <div className="card card-side">
        <figure>
          <img src={img} className="w-16" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimoinal;
