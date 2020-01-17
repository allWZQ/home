import React from "react";
import "../About/About.css";
import { NavLink, Route } from "react-router-dom";
import aboutLog from "../../img/cut/其他/图层7副本.png";
import Introduce from "../About/Introduce/index";
import Contact from "../About/Contact/index";
import Culture from "../About/Culture/index";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: 0
    };
  }
  handleAboutClick(event) {
    this.setState({
      isSelect: Number(event.currentTarget.getAttribute("Index"))
    });
  }
  render() {
    let data = {
      item: [
        {
          path: "/about/1",
          name: "公司简介"
        },
        {
          path: "/about/2",
          name: "企业文化"
        },
        {
          path: "/about/3",
          name: "联系我们"
        }
      ]
    };
    return (
      <div>
        <main>
          <img className="aboutlog" src={aboutLog} alt="" />
          <div className="main1_wrap">
            <div className="main_menu">
              {data.item.map((value, index) => {
                return (
                  <NavLink to={value.path} key={index}>
                    <span
                      index={index}
                      className={this.state.isSelect === index ? "avtive" : ""}
                      id="main_name"
                      onClick={this.handleAboutClick.bind(this)}
                    >
                      <div>{value.name}</div>
                    </span>
                  </NavLink>
                );
              })}
            </div>
            <Route component={Introduce} path="/about/1" />
            <Route component={Culture} path="/about/2" />
            <Route component={Contact} path="/about/3" />
          </div>
        </main>
      </div>
    );
  }
}

export default About;
