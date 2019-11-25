import React from 'react'
import axios from 'axios'
import {
    useParams
  } from "react-router-dom";

export default () => {

    const { id } = useParams();

    axios
    .get(`https://qs-sand01.s-cubed.local/dev/qrs/app/${id}/hubinfo?`, {
      params: {
        Xrfkey: 1234567890123456
      },
      headers: {
        "x-Qlik-Xrfkey": "1234567890123456",
        userid: "tdo",
      }
    })
    .then(response => {
      console.log(response)
    }).catch(response => console.log(response))



    return <main>
        hello i am stream
    </main>
}