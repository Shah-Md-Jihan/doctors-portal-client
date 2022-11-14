import React from "react";
import Banner from "./Banner/Banner";
import BusinessCards from "./BusinessCards/BusinessCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <BusinessCards></BusinessCards>
    </div>
  );
};

export default Home;
