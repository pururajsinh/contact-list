import React from 'react'
import person from '../images/person.png'
import '../App.css'
function Card(props) {
    return (
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
                        <button>View Contact</button>
                        <button>Delete Contact</button>
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
    )
}

export default Card
