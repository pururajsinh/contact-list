import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import person from "../images/person.png";
import git from "../images/git.png";
import ig from "../images/ig.png";
import linkedin from "../images/linkedin.png";
import reddit from "../images/reddit.png";
import downArrow from "../images/arrow-down-sign-to-navigate.png";
import ConfirmationBox from "./ConfirmationBox";

function Card(props) {
  const [unhide, setUnhide] = useState(false);
  const [expand, setExpand] = useState(false);
  const [arrowDownShow, setArrowDownShow] = useState(true);
  const [arrowUpShow, setArrowUpShow] = useState(false);

  const capitalize = (toBeCapatalized) => {
    // return toBeCapatalized.charAt(0).toUpperCase() + toBeCapatalized.slice(1);
    return toBeCapatalized.replace(/\w\S*/g, (w) =>
      w.replace(/^\w/, (c) => c.toUpperCase())
    );
  };

  const formatContact = (toBeFormatted) => {
    return (
      "(" +
      toBeFormatted.substring(0, 3) +
      ")-" +
      toBeFormatted.substring(3, 6) +
      "-" +
      toBeFormatted.substring(6, 10)
    );
  };

  const deleteInfo = async (id) => {
    await axios.delete(`http://localhost:5000/info/${id}`);
    props.fetchInfo();
  };

  const confirmToggler = () => {
    setUnhide(!unhide);
  };

  const deleteHandler = (id) => {
    confirmToggler();
  };

  const expandHandler = () => {
    setArrowDownShow(!arrowDownShow);
    setArrowUpShow(!arrowUpShow);
    setExpand(!expand);
  };

  const firstName = capitalize(props.firstName);
  const lastName = capitalize(props.lastName);
  const contact = formatContact(props.contact);
  const email = props.email;
  return (
    <div className="conf-card">
      <div className={unhide ? "confirm-align" : "display-none"}>
        <ConfirmationBox
          fetchInfo={props.fetchInfo}
          confirmToggler={confirmToggler}
          deleteInfo={deleteInfo}
          id={props.id}
        />
      </div>

      <div className="cardn">
        <div className="pgrp">
          <div className="pgrp-img">
            <img src={person} alt="" />
          </div>

          <div classname="menu-hold">
            <button className="menu-btn">☰</button>

            <nav class="menu">
              <ul>
                <li>
                  <Link exact="true" to={`/Contact/${props.id}`}>
                    <li>Edit Contact</li>
                  </Link>
                </li>

                <li>
                  <li onClick={() => deleteHandler(props.id)}>Delete Contact</li>
                </li>
              </ul>
            </nav>
          </div>

        </div>
        <div className="first-name-last-name">
          <div className="grp">
            <p type="text" name="firstName">
              {firstName}
            </p>
            <p type="text" name="lastName">
              {lastName}
            </p>
          </div>
        </div>
        <div className="grp">
          <label htmlFor="contact">Contact: </label>
          <p type="text" name="contact">
            {contact}
          </p>
        </div>
        <span>
          <button
            className={arrowDownShow ? "arrow-down" : "display-none"}
            onClick={expandHandler}
          >
            <img src={downArrow} alt="" />
          </button>
        </span>
        <div className={expand ? "grp" : "display-none"}>
          <label htmlFor="email">E-mail:&nbsp;&nbsp;&nbsp; </label>
          <p type="text" name="email">
            {email}
          </p>
        </div>
        <div className={expand ? "img-grp" : "display-none"}>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={git} alt="" />
          </a>
          <a href="https://reddit.com" target="_blank">
            <img src={reddit} alt="" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={ig} alt="" />
          </a>
        </div>
        <span>
          <button
            className={arrowUpShow ? "arrow-up" : "display-none"}
            onClick={expandHandler}
          >
            <img src={downArrow} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Card;
