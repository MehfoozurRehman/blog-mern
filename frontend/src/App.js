import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";
import BlogScreen from "./Screens/BlogScreen";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/blog" component={BlogScreen} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
