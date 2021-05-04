import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import person from "../images/person.png";
function AddUser() {
  let history = useHistory(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (info) => {
    if (info) {
      await postInfo(info);
      history.push("/");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const postInfo = async (data) => {
    await axios.post("http://localhost:5000/info", data);
  };

  return (
    <div className="add-user">
      <div className="img-container">
        <div className="img-icon">
          <img src={person} alt="person-icon" />
        </div>
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
            placeholder="John"
            ref={register({
              minLength: {
                value: 3,
                message: "First-name must be at least 3 letters long",
              },
              pattern: {
                value: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
                message: "Please Enter a valid First-Name",
              },
            })}
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
            placeholder="Doe"
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
            placeholder="9409409404"
            ref={register({
              required: "Contact is required",
              minLength: {
                value: 10,
                message: "Contact should be at least 10 digits long",
              },
              maxLength: {
                value: 10,
                message: "Contact should be at most 10 digits long",
              },
              pattern: {
                value: /^[1-9]{1}[0-9]{9}/,
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
            placeholder="abc@example.com"
            ref={register({
              required: "Email-Id is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
