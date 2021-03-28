import React from 'react'
import warning from '../images/warning.png';
function ConfirmationBox(props) {
    const handleYes = () => {
        props.deleteInfo(props.id);
        props.confirmToggler();
    }
    const handleNo = () => {
        props.confirmToggler();
    }
    return (

        <div className="confirmation">
            <div className="modal">
                <div className="confirm-image">
                    <img src={warning} alt="warning" />
                </div>
                <p>Are you sure you want to delete the contact?</p>
                <div className="btn-grp">
                    <button onClick={handleNo}>No</button>
                    <button className="cancel" onClick={handleYes}>Yes</button>
                </div>
            </div>
        </div>

    )
}

export default ConfirmationBox
