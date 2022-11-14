import React from "react";
import Banner from "./Banner/Banner";
import BusinessCards from "./BusinessCards/BusinessCards";
import Services from "./Services/Services";
import ExternalCare from "./ExternalCare/ExternalCare";
import MakeAppointment from "./MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <BusinessCards></BusinessCards>
      <Services></Services>
      <ExternalCare></ExternalCare>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;
