import React from "react";
import "./Nav.css";
import logo from "../../img/cut/首页/紫讯-LOGO.png";
import servelog1 from "../../img/cut/首页/紫鸟.png";
import servelog1copy from "../../img/cut/首页/紫鸟634拷贝2.png";
import servelog2 from "../../img/cut/首页/图层634拷贝.png";
import servelog2copy from "../../img/cut/首页/图层634.png";
import servelog3 from "../../img/cut/首页/图层647.png";
import servelog3copy from "../../img/cut/首页/图层647拷贝.png";
import consult1 from "../../img/cut/首页/dongtaiquan.png";
import consult1copy from "../../img/cut/首页/dongtaiquan拷贝.png";
import consult2 from "../../img/cut/首页/shexiangji-2.png";
import consult2copy from "../../img/cut/首页/shexiangji-2拷贝.png";
import about1 from "../../img/cut/首页/Contact-User.png";
import aboutcopy1 from "../../img/cut/首页/Contact-User拷贝.png";
import about2 from "../../img/cut/首页/shu.png";
import about2copy from "../../img/cut/首页/shu拷贝.png";
import about3 from "../../img/cut/首页/联系(1).png";
import about3copy from "../../img/cut/首页/联系(1)拷贝.png";
import join1 from "../../img/cut/首页/zhaopin.png";
import join1copy from "../../img/cut/首页/zhaopin拷贝.png";
import join2 from "../../img/cut/首页/drxx51.png";
import join2copy from "../../img/cut/首页/drxx51拷贝.png";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isNav: 0
    };
  }
  handleNavClick(event) {
    this.setState({
      isNav: Number(event.currentTarget.getAttribute("index"))
    });
  }
  render() {
    let data = {
      nav: [
        {
          path: "/home",
          name: "首页"
        },
        {
          id: "navtitle1",
          path: "/sever",
          name: "产品服务"
        },
        {
          id: "navtitle2",
          path: "/info",
          name: "咨询中心"
        },
        {
          id: "navtitle3",
          path: "/about/1",
          name: "关于我们"
        },
        {
          id: "navtitle4",
          path: "/join",
          name: "加入我们"
        }
      ]
    };
    return (
      <nav>
        <div className="zxlog">
          <img src={logo} alt="" />
        </div>
        <div className="navTitle_wrap">
          {data.nav.map((value, index) => {
            return (
              <span
                key={index}
                index={index}
                className={this.state.isNav === index ? "avtive" : ""}
                id={value.id}
                onClick={this.handleNavClick.bind(this)}
              >
                <div className="navTitle_title">
                  <NavLink to={value.path}>{value.name}</NavLink>
                </div>
                <li className="serve">
                  <div className="drop_wrap">
                    <div className="drop_wrap_n">
                      <div className="drop_text3">
                        <img className="prototype" src={servelog1} alt="" />
                        <img className="copy3" src={servelog1copy} alt="" />
                        <Link to="/sever">
                          <span className="text3">菜鸟数据魔方</span>
                        </Link>
                      </div>
                      <div className="drop_text3">
                        <img className="prototype" src={servelog2} alt="" />
                        <img className="copy3" src={servelog2copy} alt="" />
                        <span className="text3">酷鸟卖家助手</span>
                      </div>
                      <div className="drop_text3">
                        <img className="prototype" src={servelog3} alt="" />
                        <img className="copy3" src={servelog3copy} alt="" />
                        <span className="text3">超级浏览器</span>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="drop_wrap2">
                  <div className="drop_wrap_n">
                    <div className="drop_text3">
                      <img className="prototype" src={consult1} alt="" />
                      <img className="copy3" src={consult1copy} alt="" />
                      <span className="text3">公司动态</span>
                    </div>
                    <div className="drop_text3">
                      <img className="prototype" src={consult2} alt="" />
                      <img className="copy3" src={consult2copy} alt="" />
                      <span className="text3">媒体互动</span>
                    </div>
                  </div>
                </div>
              </span>
            );
          })}
        </div>
      </nav>
    );
  }
}
export default Nav;
