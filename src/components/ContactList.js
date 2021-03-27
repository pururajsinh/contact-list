import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function ContactList() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    // const res = await fetch("./info");
    // const data = await res.json();
    const res = await axios.get("http://localhost:5000/info");
    //const dataJson = await data.json();
    await setInfo(res.data);
    //console.log(res.data);
  };
  return (
    <div className="contact-list">
      {info
        ? info.map((inf) => (
            <div>
              <Card
                key={inf.id}
                id={inf.id}
                firstName={inf.firstName}
                lastName={inf.lastName}
                email={inf.email}
                contact={inf.contact}
                fetchInfo={fetchInfo}
              />
            </div>
          ))
        : null}
    </div>
  );
}

export default ContactList;
