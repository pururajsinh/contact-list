import React, { useState } from "react";
import person from "../images/person.png";
import { useHistory } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const history = useHistory();
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });
  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postInfo(info);
    history.push("/");
  };
  const postInfo = async (data) => {
    // await fetch("/info", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    await axios.post("http://localhost:5000/info", info);
  };
  return (
    <div className="add-user">
      <div className="img-icon">
        <img src={person} alt="person-icon" />
      </div>
      <div className="formin">
        <form>
          <div className="inputvalues">
            <input
              type="text"
              name="firstName"
              placeholder="First-Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="last-Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact"
              placeholder="Phone-Number"
              onChange={handleChange}
            />
            <input
              type="e-mail"
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
            />
          </div>
          <div className="btn">
            <button onClick={handleSubmit}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
