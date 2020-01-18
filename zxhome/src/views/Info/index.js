import React from "react";
import infoLogo from "../../img/cut/其他/了解更多资讯风采.png";
import "./Info.css";
import Paging from "../Info/paging/index";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfo: 0
    };
  }
  handleInfoClick(event) {
    this.setState({
      isInfo: Number(event.currentTarget.getAttribute("index"))
    });
  }
  render() {
    let data = {
      item: [
        {
          name: "公司动态"
        },
        {
          name: "媒体互动"
        }
      ]
    };
    return (
      <div className="info">
        <img className="infoLogo" src={infoLogo} alt="" />
        <div className="info_wrap">
          <div className="info_box1">
            {data.item.map((value, index) => {
              return (
                <span
                  key={index}
                  index={index}
                  className={this.state.isInfo === index ? "avtive" : ""}
                  onClick={this.handleInfoClick.bind(this)}
                >
                  {value.name}
                </span>
              );
            })}
          </div>
          <Paging />
        </div>
      </div>
    );
  }
}

export default Info;
