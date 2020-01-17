//主区域
import React from "react";
import "./App.css";
import { About, Footer, Home, Sever, Info, Nav, NotFound, Join } from "./views";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="body">
      <Nav />
      <Switch>
        {/* exact是绝对匹配 /后面的都匹配不到*/}
        <Route path="/about/:id" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/sever" componetn={Sever} />
        <Route path="/info" component={Info} />
        <Route path="/join" component={Join} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/home" from="/" exact />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
