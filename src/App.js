import React from 'react';
import Drawer from './components/Drawer'
import Stream from './components/Stream'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Drawer />
        <Switch>
            <Route exact path="/">
                Nothing to display
            </Route>
            <Route path="/streams/:id">
                <Stream />
            </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
