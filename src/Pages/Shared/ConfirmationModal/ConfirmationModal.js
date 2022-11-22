import React from "react";

const ConfirmationModal = ({ title, successButtonName, message, closeModal, successAction, modalData }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-error">
              {successButtonName}
            </label>
            <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-secondary">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
