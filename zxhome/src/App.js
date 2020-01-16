//主区域
import React from "react";
import "./App.css";
import { About, Footer, Home, Info, Nav, NotFound } from "./views";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/home" from="/" exact />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
