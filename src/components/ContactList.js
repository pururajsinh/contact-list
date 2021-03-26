import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function ContactList() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await fetch("./info");
    const data = await res.json();
    setInfo(data);
  };
  return (
    <div className="contact-list">
      {info
        ? info.map((inf) => (
            <div>
              <Card
                firstName={inf.firstName}
                lastName={inf.lastName}
                email={inf.email}
                contact={inf.contact}
              />
            </div>
          ))
        : null}
      <Link to="/AddUser">
        <button>Add New Contact</button>
      </Link>
    </div>
  );
}

export default ContactList;
