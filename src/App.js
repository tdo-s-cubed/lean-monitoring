import React from "react";
import DrawerHeader from "./components/Drawer-header";
import Stream from "./components/Stream";
import QlikApp from "./components/QlikApp";
import NotFoundPage from "./components/NotFoundPage";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="_content-container">
            <div className="_router-container">
              <div className="_router">
                <Switch>
                  <Route path="/LandingPage">
                    <LandingPage />
                  </Route>
                  <Route path="/SignIn">
                    <SignIn />
                  </Route>
                  <Route exact path="/home">
                    <DrawerHeader />
                    Home route
                  </Route>
                  <Route exact path="/">
                    <DrawerHeader />
                    Home route
                  </Route>
                  <Route path="/streams/:id">
                    <DrawerHeader />
                    <Stream />
                  </Route>
                  <Route path="/:streamId/apps/:appId">
                    <DrawerHeader />
                    <QlikApp />
                  </Route>
                  <Route>
                    <NotFoundPage />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
