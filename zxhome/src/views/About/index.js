import React from "react";
import "../About/About.css";
import { Link, Route } from "react-router-dom";
import introduce from "../About/Introduce/index";
import aboutLog from "../../img/cut/其他/图层7副本.png";
import mainlog2 from "../../img/cut/其他/建筑.png";
import mainlog3 from "../../img/cut/其他/联系我们.png";

class About extends React.Component {
  render() {
    return (
      <div>
        <main>
          <img className="aboutlog" src={aboutLog} alt="" />
          <div className="main_wrap">
            <div className="main_menu">
              <Link to="/introduce">
                <div className="main_name">公司简介</div>
              </Link>

              <Link to="/Culture">
                <div className="main_name">企业文化</div>
              </Link>

              <Link to="/contact">
                <div className="main_name">联系我们</div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
