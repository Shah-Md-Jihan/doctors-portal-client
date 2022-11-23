import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AppointmentOption = ({ appointmentOption, setBookedAppointment }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-white text-center">
        <h2 className="text-2xl text-secondary font-bold mb-3">{name}</h2>
        <p className="mb-2">{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <p className="text-2xl text-yellow-400">Consultancy Fee: ${price}</p>
        <div className="card-actions justify-center mt-4">
          <label
            htmlFor="book-appointment"
            disabled={slots.length === 0 || !user?.uid}
            onClick={() => setBookedAppointment(appointmentOption)}
            className="btn btn-secondary"
          >
            Book Appointment
          </label>
        </div>
        {!user?.uid && <span className="text-red-500">Login to Book</span>}
      </div>
    </div>
  );
};

export default AppointmentOption;
