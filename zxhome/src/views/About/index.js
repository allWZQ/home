import React from "react";
import "../About/About.css";
import Introduce from "../About/Introduce/index";
import Contact from "../About/Contact/index";
import Culture from "../About/Culture/index";
import { Link, Route } from "react-router-dom";
import aboutLog from "../../img/cut/其他/图层7副本.png";
// import mainlog2 from "../../img/cut/其他/建筑.png";
// import mainlog3 from "../../img/cut/其他/联系我们.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <main>
          <img className="aboutlog" src={aboutLog} alt="" />
          <div className="main1_wrap">
            <div className="main_menu">
              <Link to="/about/1">
                <div className="main_name">公司简介</div>
              </Link>

              <Link to="/about/Contact">
                <div className="main_name">企业文化</div>
              </Link>

              <Link to="/about/Culture">
                <div className="main_name">联系我们</div>
              </Link>
            </div>
            <Route component={Contact} path="/about/Contact" />
            <Route component={Culture} path="/about/Culture" />
            <Route component={Introduce} path="/about/1" exact />
          </div>
        </main>
      </div>
    );
  }
}

export default About;
