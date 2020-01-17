import React from "react";
import joinLogo from "../../img/cut/其他/充实工作，快乐生活.png";
import "./Join.css";
class Join extends React.Component {
  render() {
    return (
      <div className="join">
        <img className="joinLogo" src={joinLogo} alt="" />
      </div>
    );
  }
}

export default Join;
