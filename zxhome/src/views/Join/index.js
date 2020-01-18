import React from "react";
import joinLogo from "../../img/cut/其他/充实工作，快乐生活.png";
import downLogo from "../../img/cut/其他/下.png";
import downLogo1copy from "../../img/cut/其他/下高亮.png";
import "./Join.css";

const Join = () => {
  return (
    <div className="join">
      <img className="joinLogo" src={joinLogo} alt="" />
      <div className="join_wrap">
        <div className="join_box1">
          <span className="join_text1">社会招聘</span>
          <span className="join_text2">校园招聘</span>
        </div>
        <div className="join_box2">
          <div className="join_box_son1">
            <div className="join_text3">
              <div className="join_round"></div>
              <h1>Java开发工程师</h1>
            </div>
            <div className="join_text4">
              <span>招聘人数：2</span>
              <span>工作地点：福州</span>
              <span>发布日期：2018/10/09</span>
            </div>
            <div className="join_min_logo">
              <img className="upLogo" src={downLogo1copy} alt="" />
              <img className="downLogo" src={downLogo} alt="" />
            </div>
          </div>
          <div className="join_box_son2">
            <div className="join_box_son4">
              <div className="join_text3">
                <div className="join_round"></div>
                <h1>Java开发工程师</h1>
              </div>
              <div className="join_text4">
                <span>招聘人数：2</span>
                <span>工作地点：福州</span>
                <span>发布日期：2018/10/09</span>
              </div>
              <div className="join_min_logo">
                <img className="upLogo" src={downLogo1copy} alt="" />
                <img className="downLogo" src={downLogo} alt="" />
              </div>
            </div>
            <div className="join_box_son2_main">
              <div className="join_box_son2_main1">
                <h1>岗位职责：</h1>
                <span>
                  1、
                  负责互联网产品策划，撰写详细的产品需求文档及原型设计文档，跟踪产品研发进度；
                </span>
                <span>
                  2、 分析用户行为和需求及竞争对手动向，有针对性进行产品改进；
                </span>
                <span>3、 把握并不断提升产品服务价值；</span>
                <span>4、 配合其他部门，在产品层面予以支持；</span>
                <span>5、 负责过电商类产品优先考虑。 "</span>
              </div>
              <div className="join_box_son2_main2">
                <h1>岗位要求：</h1>
                <span>1、 一年以上互联网产品经验。</span>
                <span>
                  2、
                  熟悉并热爱互联网行业，对互联网产品和目标用户有深刻认识和理解。对数据敏感，熟悉数据类产品优先考虑；
                </span>
                <span>
                  3、
                  准确识别并深刻理解用户需求，时刻保持敏锐的商业嗅觉，把握用户需求并在产品中实现；
                </span>
                <span>
                  4、
                  具备良好的理解能力和沟通协作能力，善于倾听；具备良好的服务精神和团队精神；踏实、积极主动的工作态度和高效彻底的执行力；
                </span>
                <span>5、 优秀的逻辑思维能力；超强的项目推动能力；</span>
                <span>6、 附带作品或对互联网行业某产品的分析优先考虑。</span>
              </div>
            </div>
          </div>
          <div className="join_box_son1">
            <div className="join_box_son1">
              <div className="join_text3">
                <div className="join_round"></div>
                <h1>Java开发工程师</h1>
              </div>
              <div className="join_text4">
                <span>招聘人数：2</span>
                <span>工作地点：福州</span>
                <span>发布日期：2018/10/09</span>
              </div>
              <div className="join_min_logo">
                <img className="upLogo" src={downLogo1copy} alt="" />
                <img className="downLogo" src={downLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="join_box_son3">
            <div className="paging_box2">
              <div className="paging_main2">
                <div className="paging1">上一页</div>
                <div className="paging1_number">1</div>
                <div className="paging1_number">2</div>
                <div className="paging1_number">3</div>
                <div className="paging1">下一页</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
