import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DrawerHeader from "./components/Drawer-header";
import Stream from "./components/Stream";
import QlikApp from "./components/QlikApp";
import NotFoundPage from "./components/NotFoundPage";
import SignIn from "./components/SignIn";
import UserDataBox from "./components/UserDataBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DrawerHeader />, div);
});
