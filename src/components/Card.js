import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import person from '../images/person.png';
import ConfirmationBox from './ConfirmationBox';
import '../App.css';
function Card(props) {
    const [unhide, setUnhide] = useState(false);
    const deleteHandler = (id) => {
        confirmToggler();
    }
    const deleteInfo = async (id) => {
        await axios.delete(`http://localhost:5000/info/${id}`);
        props.fetchInfo();
    };

    const confirmToggler = () => {
        setUnhide(!unhide);
    }
    return (
        <div className="conf-card">
            <div className={unhide ? "confirm-align" : "display-none"}>
                <ConfirmationBox fetchInfo={props.fetchInfo} confirmToggler={confirmToggler} deleteInfo={deleteInfo} id={props.id} />
            </div>


            <div className="cardn">
                <div className="pgrp">
                    <img src={person} alt="" />

                    <div className="dropdown-container" tabIndex="-1">
                        <div className="dots">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="dropdown">
                            <Link exact="true" to={`/Contact/${props.id}`}>
                                <button>Edit Contact</button>
                            </Link>
                            <button onClick={() => deleteHandler(props.id)}>Delete Contact</button>
                        </div>
                    </div>
                </div>
                <div className="first-name-last-name">
                    <div className="grp">
                        <label htmlFor="firstName">First Name:</label>
                        <p type="text" name="firstName"  >{props.firstName}</p>
                    </div>
                    <div className="grp">
                        <label htmlFor="lastName">Last Name:</label>
                        <p type="text" name="lastName"  >{props.lastName}</p>
                    </div>
                </div>
                <div className="grp">
                    <label htmlFor="contact">Contact: </label>
                    <p type="text" name="contact" >{props.contact}</p>
                </div>
                <div className="grp">
                    <label htmlFor="email">E-mail: </label>
                    <p type="text" name="email">{props.email}</p>
                </div>

            </div>
        </div>

    )
}

export default Card
