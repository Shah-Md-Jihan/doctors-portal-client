import React from "react";
import { format } from "date-fns";

const BookingModal = ({ bookedAppointment, selectedDate, setBookedAppointment }) => {
  const { name, slots } = bookedAppointment;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const patient = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const bookingInfo = {
      date,
      slot,
      patient,
      treatment: name,
      email,
      phone,
    };
    console.log(bookingInfo);
    setBookedAppointment(null);
  };
  const date = format(selectedDate, "PP");
  return (
    <>
      <input type="checkbox" id="book-appointment" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="book-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-12 grid grid-cols-1 gap-6 text-white">
            <input name="date" type="text" value={date} disabled className="input input-bordered w-full" />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i}>{slot}</option>
              ))}
            </select>
            <input name="name" type="text" placeholder="Type your name" className="input input-bordered w-full" />
            <input name="email" type="email" placeholder="Type your name" className="input input-bordered w-full" />
            <input name="phone" type="number" placeholder="Type your phone number" className="input input-bordered w-full" />
            <input type="submit" value="SUBMIT" className="bg-accent input  w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
