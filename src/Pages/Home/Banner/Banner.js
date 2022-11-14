import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "./../../../components/PrimaryButton";

const Banner = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse px-10">
        <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
