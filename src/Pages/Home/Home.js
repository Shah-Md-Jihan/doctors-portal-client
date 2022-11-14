import React from "react";
import Banner from "./Banner/Banner";
import BusinessCards from "./BusinessCards/BusinessCards";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <BusinessCards></BusinessCards>
      <Services></Services>
    </div>
  );
};

export default Home;
