import React, { useEffect, useState } from "react";
import person from "../images/person.png";
import "../App.css";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

function Contact(props) {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  let history = useHistory();
  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    const result = await axios.get(`http://localhost:5000/info/${id}`);
    const data = await result.data;
    setInfo(data);
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/info/${id}`, info);
    history.push("/");
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
              value={info.firstName}
            />
            <input
              type="text"
              name="lastName"
              placeholder="last-Name"
              onChange={handleChange}
              value={info.lastName}
            />
            <input
              type="text"
              name="contact"
              placeholder="Phone-Number"
              onChange={handleChange}
              value={info.contact}
            />
            <input
              type="e-mail"
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              value={info.email}
            />
          </div>
          <div className="btn">
            <button onClick={submit}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
