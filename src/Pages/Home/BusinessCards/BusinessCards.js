import React from "react";
import BusinessCard from "./BusinessCard";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const BusinessCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "10 am to 5 pm & 24 hour Emergency service",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Our Location",
      description: "Thana road Phulpur, Mymensingh",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "+880 1919689515",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6 mt-24">
      {cardData.map((card) => (
        <BusinessCard key={card.id} card={card}></BusinessCard>
      ))}
    </div>
  );
};

export default BusinessCards;
