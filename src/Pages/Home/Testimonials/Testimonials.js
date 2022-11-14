import React from "react";
import Testimoinal from "./Testimoinal";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import quote from "../../../assets/icons/quote.svg";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Winson Herry",
      address: "California",
      img: people1,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Zulia Gilart",
      address: "Sydney",
      img: people2,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Jesinda Martinez",
      address: "California",
      img: people3,
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="mt-28">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-primary mb-3">Testimonial</h1>
          <h2 className="text-5xl font-semibold text-white">What Our Patients Says</h2>
        </div>
        <div className="w-24 lg:w-48">
          <img src={quote} alt="quote" className="w-100" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-14">
        {testimonialData.map((testimonial) => (
          <Testimoinal key={testimonial.id} testimonial={testimonial}></Testimoinal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
