import React from "react";

const AppointmentOption = ({ appointmentOption, setBookedAppointment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-white text-center">
        <h2 className="text-2xl text-secondary font-bold mb-3">{name}</h2>
        <p className="mb-2">{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center mt-4">
          <label
            htmlFor="book-appointment"
            disabled={slots.length === 0}
            onClick={() => setBookedAppointment(appointmentOption)}
            className="btn btn-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
