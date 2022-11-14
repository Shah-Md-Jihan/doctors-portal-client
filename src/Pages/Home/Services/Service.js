import React from "react";

const Service = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="card w-100 bg-white py-10 mt-16 shadow-xl">
      <figure>
        <img src={icon} alt="Shoes" />
      </figure>
      <div className="card-body text-center mt-8 text-slate-600">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
