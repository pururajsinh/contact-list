import React from "react";
import warning from "../images/warning-sign.png";
function ConfirmationBox(props) {
  const handleYes = () => {
    props.deleteInfo(props.id);
    props.confirmToggler();
  };

  const handleNo = () => {
    props.confirmToggler();
  };

  return (
    <div className="confirmation">
      <div className="modal">
        <div className="confirm-image">
          <img src={warning} alt="warning" />
        </div>
        <h1>Delete this contact?</h1>
        <p>You will not be able to recover it.</p>
        <div className="btn-grp">
          <button className="cancel" onClick={handleNo}>
            No
          </button>
          <button onClick={handleYes}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationBox;
