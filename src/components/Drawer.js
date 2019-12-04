import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [streams, setStreams] = useState(false);

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
        // console.log(response.data);

        const streamData = [];

        response.data.forEach(hub => {
          if (hub.stream !== null) {
            const stream = streamData.find(
              stream => stream.id === hub.stream.id
            );
            if (!stream) {
              streamData.push({
                ...hub.stream,
                hubs: [hub]
              });
            } else {
              const index = streamData.findIndex(
                stream => stream.id === hub.stream.id
              );
              streamData[index].hubs.push(hub);
            }
          }
        });

        setStreams(streamData);
        //setStreams(response.data);
      });
  }, []);

  if (streams.length > 0) {
    return (
      <ul className="nav flex-column">
        {streams.map(stream => (
          <li key={stream.id}>
            <NavLink
              to={`/streams/${stream.id}`}
              className="nav-item"
              activeClassName="is-active"
              exact={true}
            >
              <FontAwesomeIcon className="__icon" icon={faStream} />
              {stream.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  } else {
    return "loading...";
  }
};
