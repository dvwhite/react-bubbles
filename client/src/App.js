import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";

// Component imports
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import BlockPage from './components/BlockPage';
import Login from "./components/Login.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubbles" component={BubblePage} />
        <PrivateRoute exact path="/blocks" component={BlockPage} />
      </div>
    </Router>
  );
}

export default App;
