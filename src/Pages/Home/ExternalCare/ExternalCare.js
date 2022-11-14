import React from "react";
import treatment from "../../../assets/images/treatment.png";

const ExternalCare = () => {
  return (
    <div className="hero mt-36 bg-white">
      <div className="hero-content mx-12 py-12 flex-col lg:flex-row">
        <img src={treatment} className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div className="lg:ml-24">
          <h1 className="text-5xl font-bold text-slate-600">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 text-slate-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ExternalCare;
