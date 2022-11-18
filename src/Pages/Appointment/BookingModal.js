import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ bookedAppointment, selectedDate, setBookedAppointment, notify, refetch, alreadyBook }) => {
  const { user } = useContext(AuthContext);

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
    // console.log(bookingInfo);
    fetch("http://127.0.0.1:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setBookedAppointment(null);
          notify();
          refetch();
        } else {
          alreadyBook(data.message);
        }
      });
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
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Type your name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Type your name"
              className="input input-bordered w-full"
            />
            <input name="phone" type="number" placeholder="Type your phone number" className="input input-bordered w-full" />
            <input type="submit" value="SUBMIT" className="bg-accent input  w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
