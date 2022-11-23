import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const bookingData = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, date, slot } = bookingData;

  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-10">
      <h1 className="text-3xl">Payment for {treatment}</h1>
      <p>
        Please pay <span className="text-secondary font-bold">${price}</span> for your appoinment on {date} at {slot}.
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookingData={bookingData} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
