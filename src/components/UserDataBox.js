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
        setUser(response.data);
        // console.log(response.data);
      });
  }, []);

  if (user !== false) {
    return (
      <div className="user-data-box">
        <div className="jumbotron row">
          <div className="col-9">
            <h1 className="display-4">{`Hello, ${user.userName}`}</h1>
            {/* Hardcoded user data for later implementation */}
            <p>Last log-in date: 05.10.2019</p>
            <p>Sessions: 145</p>
          </div>
          <div className="col-3">
            {/* Should handle loging out part here!!! */}
            <a
              className="btn btn-primary btn-lg"
              href={`/SignIn`}
              role="button"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-data-box">
        <div className="jumbotron">
          <h1 className="display-4">{`Hello, Annanymos`}</h1>
          <p></p>
          <a className="btn btn-primary btn-lg" href="/" role="button">
            Log out
          </a>
        </div>
      </div>
    );
  }
};
