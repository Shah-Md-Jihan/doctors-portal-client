import React from "react";
import appointment from "../../../assets/images/appointment.png";
import doctorSmall from "../../../assets/images/doctor-small.png";
import PrimaryButton from "./../../../components/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }} className="mt-40">
      <div className="hero text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctorSmall} className="lg:w-1/2 -mt-32 hidden lg:block md:block" />
          <div>
            <h1 className="text-xl font-bold text-primary mb-5">Appointment</h1>
            <h2 className="text-4xl font-semibold mb-5">Make an appointment Today</h2>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
              of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here',
              making it look like readable English. Many desktop publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
