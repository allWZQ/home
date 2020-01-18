import React from "react";
import "../About/About.css";
import { Route } from "react-router-dom";
import aboutLog from "../../img/cut/其他/图层7副本.png";
import Introduce from "../About/Introduce/index";
import Contact from "../About/Contact/index";
import Culture from "../About/Culture/index";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: "/about/1"
    };
  }
  componentDidMount() {
    const { history } = this.props;

    history.listen(location => {
      console.log(location.pathname.indexOf("about"));
      if (location.pathname.indexOf("about")) {
        this.setState({
          isSelect: location.pathname
        });
      }
    });
  }
  componentWillMount() {
    this._loadisSelect();
  }
  _saveisSelect(isSelect) {
    sessionStorage.setItem("isSelect", isSelect);
  }
  _loadisSelect() {
    const isSelect = sessionStorage.getItem("isSelect");
    if (isSelect) {
      this.setState({
        isSelect
      });
    }
  }
  handleAboutClick(value) {
    const { history } = this.props;
    console.log(history);
    history.push(value.path);
    console.log(history.location.pathname);
    console.log(value);
    this.setState({
      isSelect: history.location.pathname
    });
    this._saveisSelect(value.path);
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
                  <span
                    key={index}
                    className={
                      this.state.isSelect === `/about/${index + 1}`
                        ? "avtive"
                        : ""
                    }
                    id="main_name"
                    onClick={this.handleAboutClick.bind(this, value)}
                  >
                    <div>{value.name}</div>
                  </span>
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
