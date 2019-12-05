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
    <div>
      <h1>Welcome {} !</h1>
    </div>
  );
};
