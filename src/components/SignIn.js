import React from "react";
// import { useParams } from "react-router-dom";

export default () => {
  return (
    <div className="text-center form-container">
      <form className="form-signin">
        <img
          className="mb-4"
          src="../favicon.ico"
          alt=""
          width="164"
          height="164"
        />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          required=""
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <div className="checkbox mb-3"></div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
