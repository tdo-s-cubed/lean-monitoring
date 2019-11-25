import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Link
} from "react-router-dom";

export default () => {
  const [streams, setStreams] = useState(false);

  useEffect(() => {
    axios
    .get("https://qs-sand01.s-cubed.local/dev/qrs/app/hublist?", {
      params: {
        Xrfkey: 1234567890123456
      },
      headers: {
        "x-Qlik-Xrfkey": "1234567890123456",
        userid: "tdo",
      }
    })
    .then(response => {
      console.log(response.data)
      
      const streamData = []

      response.data.forEach( hub => {
        if (hub.stream !== null) {
          const stream = streamData.find( stream => stream.id === hub.stream.id)
          if (!stream) {
            streamData.push({
              ...hub.stream,
              hubs: [hub]
            })
          } else {
            const index = streamData.findIndex(stream => stream.id === hub.stream.id)
            streamData[index].hubs.push(hub)
          }
        }
      })

      setStreams(streamData)
      //setStreams(response.data);
    })
  }, [])

  

    if (streams.length > 0) {
      return <ul>
      {streams.map( stream => (
        <li key={stream.id}>
          <Link to={`/streams/${stream.id}`}>{stream.name}</Link>
        </li>
      ))}
    </ul>
    } else {
      return 'loading ...'
    }
};


