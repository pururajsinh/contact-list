import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import EmptyCard from "./EmptyCard";

function ContactList() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const res = await axios.get("http://localhost:5000/info");
    await setInfo(res.data);
  };

  return (
    <div className="contact-list">
      {info ? (
        info.length ? (
          info.map((inf) => (
            <div key={inf.id}>
              <Card
                id={inf.id}
                firstName={inf.firstName}
                lastName={inf.lastName}
                email={inf.email}
                contact={inf.contact}
                fetchInfo={fetchInfo}
              />
            </div>
          ))
        ) : (
          <div>
            <EmptyCard />
          </div>
        )
      ) : null}
    </div>
  );
}

export default ContactList;
