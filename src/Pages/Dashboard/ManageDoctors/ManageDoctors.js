import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import BlankDataAlert from "../../Shared/BlankDataAlert/BlankDataAlert";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "./../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctors-portal-server-three-rosy.vercel.app/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
        refetch();
      }
    },
  });

  const handleDelDoctor = (doctor) => {
    fetch(`https://doctors-portal-server-three-rosy.vercel.app/doctors/${doctor?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Doctor ${doctor?.name} deleted successfully`);
          refetch();
        }
      });
  };
  const dataLength = doctors?.length;

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div className="p-12">
      <h2 className="text-5xl my-7">Manage Doctors</h2>
      <div className="overflow-x-auto">
        {dataLength === 0 && <BlankDataAlert></BlankDataAlert>}
        {dataLength > 0 && (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map((doctor, i) => (
                <tr key={doctor?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor?.image} alt="doctor image" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor?.name}</td>
                  <td>{doctor?.specialty}</td>
                  <td>
                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure to delete?`}
          closeModal={closeModal}
          successAction={handleDelDoctor}
          successButtonName={"Delete"}
          modalData={deletingDoctor}
          message={`If you delete you can not get data back!`}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
