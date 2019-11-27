import React from 'react'
import DrawerHeader from './components/Drawer-header'
import Stream from './components/Stream'
import QlikApp from './components/QlikApp'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/styles.css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-3 _side-nav-container">
              <DrawerHeader />
            </div>
            <div className="">
            <Switch>
              <Route exact path="/">
                Home route
              </Route>
              <Route path="/streams/:id">
                <Stream />
              </Route>
              <Route path="/:streamId/apps/:appId">
                <QlikApp />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
