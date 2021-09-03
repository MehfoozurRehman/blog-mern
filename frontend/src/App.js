import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
