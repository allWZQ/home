import React from "react";
import infoLogo from "../../img/cut/其他/了解更多资讯风采.png";
import "./Info.css";
import Paging from "../Info/paging/index";

const Info = () => {
  return (
    <div className="info">
      <img className="infoLogo" src={infoLogo} alt="" />
      <div className="info_wrap">
        <div className="info_box1">
          <span className="info_text1">公司动态</span>
          <span className="info_text2">媒体互动</span>
        </div>
        <div className="info_box2">
          <Paging />
        </div>
      </div>
    </div>
  );
};

export default Info;
