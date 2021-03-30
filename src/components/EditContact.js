import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditContactForm from "./EditContactForm";

function Contact(props) {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const loadInfo = async () => {
    const result = await axios.get(`http://localhost:5000/info/${id}`);
    const data = await result.data;
    return data;
  };
  useEffect(() => {
    const fetchData = async () => {
      setInfo(await loadInfo());
    };
    fetchData();
  }, []);

  return (
    <div className="max-res">
      {info ? (
        <EditContactForm info={info} id={id} />
      ) : (
        <div>
          <p>loading</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
