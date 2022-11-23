import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";

import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const AvailableAppointment = ({ selectedDate }) => {
  const [bookedAppointment, setBookedAppointment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () => fetch(`https://doctors-portal-server-three-rosy.vercel.app/appointmentOptions?date=${date}`).then((res) => res.json()),
  });

  const notify = () => toast.success("We accept your booking!");
  const alreadyBook = (message) => toast.error(message);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <p className="text-center text-secondary font-bold mt-4">Available Appointments on {format(selectedDate, "PP")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
        {appointmentOptions.map((option) => (
          <AppointmentOption key={option._id} appointmentOption={option} setBookedAppointment={setBookedAppointment}></AppointmentOption>
        ))}
      </div>
      {bookedAppointment && (
        <BookingModal
          bookedAppointment={bookedAppointment}
          selectedDate={selectedDate}
          setBookedAppointment={setBookedAppointment}
          notify={notify}
          refetch={refetch}
          alreadyBook={alreadyBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
