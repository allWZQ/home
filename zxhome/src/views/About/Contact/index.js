import React from "react";
import mainlog3 from "../../../img/cut/其他/联系我们.png";
const Contact = () => {
  return (
    <div className="main_box3">
      <div className="main_box3">
        <div className="main3">
          <div className="main3_wrap1">
            <div className="main3_wrap1_box">
              <div className="main3_1">
                <h1>
                  <div className="round"></div>公司名称
                </h1>
                <span>福州紫讯网络技术有限公司</span>
              </div>
              <div className="main3_2">
                <h1>
                  <div className="round"></div>公司电话
                </h1>
                <span>0591-83503067</span>
              </div>
              <div className="main3_1">
                <h1>
                  <div className="round"></div>公司传真
                </h1>
                <span>0591-83503067</span>
              </div>
              <div className="main3_2">
                <h1>
                  <div className="round"></div>公司地址
                </h1>
                <span>福州市鼓楼区杨桥东路8号利嘉广场西塔9楼</span>
              </div>
              <div className="Line"></div>
            </div>
            <div className="main3_3_box">
              <div className="main3_3">
                <h1>
                  <div className="round"></div>人事邮箱
                </h1>
                <span>hr@zixun.com</span>
              </div>
              <div className="main3_3">
                <h1>
                  <div className="round"></div>人事电话
                </h1>
                <span className="address">8128489585960</span>
              </div>
            </div>
          </div>
          <img src={mainlog3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
