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
            <img src={warning} alt="warning" />
            <p>Are you sure you want to delete the contact?</p>
            <div className="btn-grp">
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNo}>No</button>
            </div>

        </div>

    )
}

export default ConfirmationBox
