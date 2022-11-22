import React from "react";

const BlankDataAlert = ({ title }) => {
  return (
    <div>
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body">
          <div className="flex items-center justify-center flex-col py-24">
            <h2 className="text-4xl text-red-600 font-bold">No Data to Show!</h2>
            <p className="mt-4 text-orange-600 text-2xl font-semibold">Please add some information to show!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlankDataAlert;
