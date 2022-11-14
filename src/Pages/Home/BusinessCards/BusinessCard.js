import React from "react";

const BusinessCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card lg:card-side shadow-xl p-6 lg:px-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BusinessCard;
