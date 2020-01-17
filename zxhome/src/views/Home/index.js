import React from "react";
import "../Home/Home.css";
import banner from "../../img/cut/首页/banner.png";
import sb from "../../img/cut/首页/鼠标.png";
import sevre1 from "../../img/cut/首页/数据挖掘.png";
import sevre2 from "../../img/cut/首页/监控竞争对手.png";
import sevre3 from "../../img/cut/首页/采集选品.png";
import sevre4 from "../../img/cut/首页/关键词优化.png";
import sevre5 from "../../img/cut/首页/跟卖管理.png";
import sever6 from "../../img/cut/首页/自动调价.png";
import sever7 from "../../img/cut/首页/评论管理.png";
import sever8 from "../../img/cut/首页/产品分析.png";
import banner2 from "../../img/cut/首页/003.png";
import sd from "../../img/cut/首页/水滴.png";
import sever9 from "../../img/cut/首页/小图1.png";
import sever10 from "../../img/cut/首页/小图2.png";
import sever11 from "../../img/cut/首页/小图3.png";
import sever12 from "../../img/cut/首页/行业经验丰富.png";
import sever13 from "../../img/cut/首页/全站点服务.png";
import sever14 from "../../img/cut/首页/精英团队.png";
import sever15 from "../../img/cut/首页/多机构支持.png";
import sever16 from "../../img/cut/首页/合作/矢量智能对象.png";
import sever17 from "../../img/cut/首页/合作/aws.png";
import sever18 from "../../img/cut/首页/合作/ed67c082eb608e62cd80c23e0a244e93.png";
import sever19 from "../../img/cut/首页/合作/亚马逊.png";
import sever20 from "../../img/cut/首页/合作/ebay.png";
import sever21 from "../../img/cut/首页/合作/wish_logo_title_blue-4.png";
import sever22 from "../../img/cut/首页/合作/中国邮政.png";
import sever23 from "../../img/cut/首页/合作/CHINAEVERBRIGHTBANK.png";
import sever24 from "../../img/cut/首页/合作/速卖通.png";
const Home = () => {
  return (
    <div>
      <div className="main_wrap">
        <img src={banner} alt="" />
        <div className="log_wrap">
          <div className="column"></div>
          <img className="shubiao" src={sb} alt="" />
        </div>
        <div className="make_wrap">
          <div className="make_title">我们能为您做什么</div>
          <div className="make_main">
            <div className="make_box">
              <div className="make_data">
                <img src={sevre1} alt="" />
                <span>数据挖掘</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sevre2} alt="" />
                <span>监控竞争对手</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sevre3} alt="" />
                <span>采集选品</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sevre4} alt="" />
                <span>关键词优化</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sevre5} alt="" />
                <span>跟卖管理</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sever6} alt="" />
                <span>自动调价</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sever7} alt="" />
                <span>评论管理</span>
              </div>
            </div>
            <div className="make_box">
              <div className="make_data">
                <img src={sever8} alt="" />
                <span>产品分析</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main_wrap2">
          <img src={banner2} alt="" />
          <div className="log_wrap2">
            <div className="column2"></div>
            <img className="shubiao2" src={sb} alt="" />
          </div>
          <div className="sever_wrap">
            <div className="serve_box">
              <span>服务优势</span>
            </div>
            <div className="serve_box2">
              <span>快速实现</span>
              <img src={sd} alt="" />
              <span>全球销售</span>
            </div>
            <div className="serve_box3">
              <div className="serve_data1">
                <span>时间成本低</span>
                <h1>4</h1>
                <img src={sever9} alt="" />
                <h1>1</h1>
                <span>
                  成本节省 <i className="zwf">1</i>
                </span>
              </div>
              <div className="serve_data1">
                <span>市场风险低</span>
                <h1>4</h1>
                <img src={sever10} alt="" />
                <h1>1</h1>
                <span>
                  流量提升 <i className="zwf">1</i>
                </span>
              </div>
              <div className="serve_data1">
                <span>运营成本低</span>
                <h1>4</h1>
                <img src={sever11} alt="" />
                <h1>1</h1>
                <span>销售额提升</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main_wrap3">
          <div className="log_wrap3">
            <div className="column3"></div>
            <img className="shubiao3" src={sb} alt="" />
          </div>
        </div>
        <div className="about_wrap">
          <div className="about_box1">关于我们</div>
          <div className="about_box2">
            福州紫讯网络技术有限公司是一家专注于大数据挖掘，技术服务，软硬件开发、销售于一体的企业。公司自主研发了针对亚马逊卖家服务的酷鸟卖家助手，对跨境电商大数据进行分析挖掘的紫鸟数据魔方等软件。我们拥有一个充满朝气、高素质、年轻化、专业化的研发团队，为公司在软件研发领域的蓬勃发展提供源源不断的活力与动力。
          </div>
          <div className="about_box3">
            <div>
              <img src={sever12} alt="" />
              <span>行业经验丰富</span>
            </div>
            <div>
              <img src={sever13} alt="" />
              <span>全站点服务</span>
            </div>
            <div>
              <img src={sever14} alt="" />
              <span>经验团队</span>
            </div>
            <div>
              <img src={sever15} alt="" />
              <span>多机构支持</span>
            </div>
          </div>
        </div>
        <div className="main_wrap4">
          <div className="log_wrap4">
            <div className="column4"></div>
            <img className="shubiao4" src={sb} alt="" />
          </div>
          <div className="partner_wrap">
            <div className="partner_box">
              <div>合作伙伴</div>
              <div className="partner_logo">
                <div>
                  <img src={sever16} alt="" />
                </div>
                <div>
                  <img src={sever17} alt="" />
                </div>
                <div>
                  <img src={sever18} alt="" />
                </div>
              </div>
              <div className="partner_logo">
                <div className="partner_img1">
                  <img src={sever19} alt="" />
                </div>
                <div className="partner_img2">
                  <img src={sever20} alt="" />
                </div>
                <div className="partner_img3">
                  <img src={sever21} alt="" />
                </div>
              </div>
              <div className="partner_logo">
                <div>
                  <img src={sever22} alt="" />
                </div>
                <div>
                  <img src={sever23} alt="" />
                </div>
                <div>
                  <img src={sever24} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
