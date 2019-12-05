import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

export default () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios
      .get("https://qs-sand01.s-cubed.local/qps/user?", {
        params: {
          Xrfkey: 1234567890123456
        },
        headers: {
          "x-Qlik-Xrfkey": "1234567890123456",
          userid: "tdo"
        },
        withCredentials: true
      })
      .then(response => {
        const userData = response;
        setUser(userData);
        console.log(userData);
      });
  }, []);

  return (
    <div className="user-data-box">
      <div className="jumbotron">
        <h1 className="display-4">Hello, Daniel!</h1>
        <p>Last log-in date: 05.10.2019</p>
        <p>Sessions: 145</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Log out
        </a>
      </div>
    </div>
  );
};
