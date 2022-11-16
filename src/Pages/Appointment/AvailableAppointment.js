import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [bookedAppointment, setBookedAppointment] = useState(null);
  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <div>
      <p className="text-center text-secondary font-bold mt-4">Available Appointments on {format(selectedDate, "PP")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-24">
        {appointmentOptions.map((option) => (
          <AppointmentOption key={option._id} appointmentOption={option} setBookedAppointment={setBookedAppointment}></AppointmentOption>
        ))}
      </div>
      {bookedAppointment && (
        <BookingModal bookedAppointment={bookedAppointment} selectedDate={selectedDate} setBookedAppointment={setBookedAppointment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
