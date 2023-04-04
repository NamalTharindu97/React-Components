import React, { useState } from "react";
import "./App.css";

const DeleteButton = ({ onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };
  const handleConfirmYes = () => {
    onDelete();
    setShowConfirm(false);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <button onClick={handleClick}>delete</button>
      {showConfirm && (
        <div className="confirm-container">
          <div className="confirm-dialog">
            <p>Are you sure you want to delete?</p>
            <div className="confirm-buttons">
              <button onClick={handleConfirmYes}>Yes</button>
              <button onClick={handleConfirmNo}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteButton;
