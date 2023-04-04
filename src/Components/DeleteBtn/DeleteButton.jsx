import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

const DeleteButton = ({ onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    onDelete();
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <button onClick={handleClick}>delete</button>
      <CSSTransition
        in={showConfirm}
        timeout={700}
        classNames={{
          enter: "fade-enter",
          enterActive: "fade-enter-active",
          exit: "fade-exit",
          exitActive: "fade-exit-active",
        }}
        unmountOnExit
      >
        <div className="confirm-container">
          <div className="confirm-dialog">
            <p>Are you sure you want to delete?</p>
            <div className="confirm-buttons">
              <button onClick={handleConfirmYes}>Yes</button>
              <button onClick={handleConfirmNo}>Cancel</button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DeleteButton;
