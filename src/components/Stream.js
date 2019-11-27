import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import {
    useParams
  } from "react-router-dom";
  

export default () => {

  const { id } = useParams();
  const [streams, setStreams] = useState(false);

  useEffect(() => {
    axios
    .get("https://qs-sand01.s-cubed.local/qrs/app/hublist?", {
      params: {
        Xrfkey: 1234567890123456
      },
      headers: {
        "x-Qlik-Xrfkey": "1234567890123456",
        userid: "tdo",
      },
      withCredentials: true
    })
    .then(response => {
      console.log(response.data)
      
      const appData = []

      response.data.forEach( app => {
        if(app.stream !== null){
          
          appData.push(app)
          
        } else {
          // console.log(": apps has no stream assigned")
        }
        
      })

      setStreams(appData)
      appData.map(appdata =>(console.log(" stream:id" + appdata.stream.id + " " + appdata.name)))
      //setStreams(response.data);
    })

  }, [])
 

    if (streams.length > 0) {

      const SelectedStreamsApps = streams.filter(app => app.stream.id === id)
      return(
       
        <ul className="nav flex-column">
        <h1>{id}</h1>
        
        {SelectedStreamsApps.map( app => (      

          <li key={app.id}>
            {/* To a new route */}
            <Link to={`/${id}/apps/${app.id}`}><p>{app.name}</p></Link>  
            {/* To Qlik app */}
            {/* <Link to={`https://qs-sand01.s-cubed.local/sense/app/${app.id}/overview`}><p>{app.name}</p></Link>   */}
            <a href={`https://qs-sand01.s-cubed.local/sense/app/${app.id}/overview`}>{app.name}</a>
          </li>
        ))}
      </ul>
      ) 
    } else {
      return 'No apps found'
    }  
}