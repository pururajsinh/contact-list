import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import person from "../images/person.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const inputFocus = useRef(null);
  let history = useHistory(null);
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    inputFocus.current.focus();
  }, []);
  const onSubmit = async (info) => {
    console.log("reached");
    console.log(info);
    if (info) {
      await postInfo(info);
      history.push("/");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/");
  };
  // const inputField = useRef(null);
  // useEffect(() => {
  //   inputField.current.focus();
  // }, []);
  // const [info, setInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   contact: "",
  // });
  // const handleChange = (e) => {
  //   setInfo({
  //     ...info,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const postInfo = async (data) => {
    await axios.post("http://localhost:5000/info", data);
  };
  return (
    <div className="add-user">
      <div className="img-icon">
        <img src={person} alt="person-icon" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputgrp">
          {errors.firstName && (
            <p className="index">{errors.firstName.message}</p>
          )}
          <input
            type="text"
            name="firstName"
            required
            ref={
              (register({
                minLength: {
                  value: 3,
                  message: "First-name must be at least 3 letters long",
                },
                pattern: {
                  value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                  message: "Please Enter a valid First-Name",
                },
              }),
              inputFocus)
            }
          />
          <label htmlFor="firstName" className="label-name">
            <span className="content-name">First-Name</span>
          </label>
        </div>
        <div className="inputgrp">
          {errors.lastName && (
            <p className="index">{errors.lastName.message}</p>
          )}
          <input
            type="text"
            name="lastName"
            required
            ref={register({
              minLength: {
                value: 3,
                message: "Last-Name must be at least 3 letters long",
              },
              pattern: {
                value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                message: "Please Enter a valid Last-Name",
              },
            })}
          />
          <label htmlFor="lastName" className="label-name">
            <span className="content-name">Last-Name</span>
          </label>
        </div>
        <div className="inputgrp">
          {errors.contact && <p className="index">{errors.contact.message}</p>}
          <input
            type="text"
            name="contact"
            required
            ref={register({
              required: "Contact is required",
              pattern: {
                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                message: "Not a valid 10-digit phone number",
              },
            })}
          />
          <label htmlFor="contact" className="label-name">
            <span className="content-name">Phone Number</span>
          </label>
        </div>
        <div className="inputgrp">
          {errors.email && <p className="index">{errors.email.message}</p>}
          <input
            type="email"
            name="email"
            required
            ref={register({
              required: "Email-Id is required",
              pattern: {
                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                message: "Please enter a valid email for eg: abc@example.com",
              },
            })}
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="submit-cancel">
          <div className="btn">
            <button className="cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>

          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
