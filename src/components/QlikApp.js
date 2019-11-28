import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import axios from 'axios'
import { useParams } from "react-router-dom";

export default () => {
  const { streamId } = useParams();
  const { appId } = useParams();

  return (
    <div>
      <h1>Qlik Sheets</h1>
      <p>Stream Id: {streamId}</p>
      <p>App Id: {appId}</p>
    </div>
  );
};
