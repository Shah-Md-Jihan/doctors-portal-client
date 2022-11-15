import React from "react";
import PrimaryButton from "./../../../components/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div style={{ background: `url(${appointment})` }} className="mt-36">
      <div className="w-[450px] xs:w-[360px] mx-auto py-16 text-center">
        <h1 className="text-xl font-bold text-primary mb-3">Contact Us</h1>
        <h2 className="text-4xl font-normal text-white mb-10">Stay connected with us</h2>
        <form>
          <div className="form-control w-full mb-3">
            <input type="text" placeholder="Email address" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full mb-3">
            <input type="text" placeholder="Subject" className="input input-bordered w-full" />
          </div>
          <div className="form-control mb-3">
            <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
          </div>
          <PrimaryButton>Submit</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
