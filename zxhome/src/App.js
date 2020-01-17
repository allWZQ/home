//主区域
import React from "react";
import "./App.css";
import { About, Footer, Home, Info, Nav, NotFound, Join } from "./views";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Nav />
      <Switch>
        <Route path="/about/1" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/join" component={Join} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/home" from="/" exact />
        {/* <Redirect to="/404" /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
