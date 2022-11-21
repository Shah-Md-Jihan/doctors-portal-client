import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctors = () => {
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://127.0.0.1:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };
          //   save doctors data in database
          fetch("http://127.0.0.1:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`Doctor ${data.name} added Successfully!`);
              navigate("/dashboard/manage/doctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="ml-12">
      <div className="w-[540px] h-[800px] p-6">
        <h1 className="text-xl font-semibold text-center">Add a New Doctor</h1>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
            {errors.email && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Specealty</span>
            </label>
            <select {...register("specialty")} className="select input-bordered w-full">
              <option disabled selected>
                Select a specialty
              </option>
              {specialties.map((specialty) => (
                <option key={specialty?._id} value={specialty?.name}>
                  {specialty?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "Photo is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-600 mt-1" role="alert">
                {errors.image?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mt-4">
            <input type="submit" value="ADD" className="btn btn-accent w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctors;
