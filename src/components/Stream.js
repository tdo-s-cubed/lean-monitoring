import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserDataBox from "./UserDataBox";

export default () => {
  const { id } = useParams();
  const [streams, setStreams] = useState(false);

  // String shortening functionality (can be used by called by- variable.trunc(num_of_charecters_to_cut_at))
  String.prototype.trunc =
    String.prototype.trunc ||
    function(n) {
      return this.length > n ? this.substr(0, n - 1) + " ..." : this;
    };

  // API CALL
  useEffect(() => {
    axios
      .get("https://qs-sand01.s-cubed.local/qrs/app/hublist/full?", {
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
        console.log(response.data);

        const appData = [];

        response.data.forEach(app => {
          if (app.stream !== null) {
            appData.push(app);
          } else {
            // console.log(": apps has no stream assigned")
          }
        });

        setStreams(appData);
        appData.map(appdata =>
          console.log(" stream:id" + appdata.stream.id + " " + appdata.name)
        );
        //setStreams(response.data);
      });
  }, []);

  if (streams.length > 0) {
    const SelectedStreamsApps = streams.filter(app => app.stream.id === id);

    return (
      <div className="_stream-container">
        <UserDataBox />

        <ul className="_stream-cards">
          {SelectedStreamsApps.map(app => (
            // Format lastReloadTime date

            <li key={app.id}>
              <div className="card">
                <a
                  href={`https://qs-sand01.s-cubed.local/sense/app/${app.id}/overview`}
                >
                  <img
                    src={`${
                      app.thumbnail !== ""
                        ? `https://qs-sand01.s-cubed.local/hub/..${app.thumbnail}`
                        : "https://qs-sand01.s-cubed.local/hub/../resources/hub/img/core/static/Default_thumbnail_app.svg"
                    }`}
                    className="card-img-top"
                    alt="app thumbnail"
                  ></img>
                </a>

                <div className="card-body">
                  <div className="flex-top">
                    <h5 className="card-title">{app.name.trunc(50)}</h5>
                    <p className="card-text">{app.description.trunc(75)}</p>
                  </div>

                  <div className="flex-end">
                    <h6 className="card-subtitle mb-2 text-muted">
                      Last reloaded:
                      {/* Formting the date format */}
                      {app.lastReloadTime
                        .replace("T", " ")
                        .substring(0, app.lastReloadTime.length - 5)}
                    </h6>
                    <a
                      href={`https://qs-sand01.s-cubed.local/sense/app/${app.id}/overview`}
                      className="btn btn-primary"
                    >
                      Open Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};
