import React from "react";
import mainlog from "../../../img/cut/其他/建筑大.png";
const Introduce = () => {
  return (
    <div className="main_box1">
      <div className="main1">
        <h1>福州紫讯网络技术有限公司</h1>
        <span>
          福州紫讯网络技术有限公司成立于2015年5月25日，是一家专注于大数据挖掘，技术服务，软硬件开发销售于一体的企业。
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司自主研发了针对亚马逊卖家服务的酷鸟卖家助手，对跨境电商大数据进行分析挖掘的紫鸟数据魔方等软件。我们拥有一个充满朝气、高素质、年轻化、专业化的研发团队，为公司在软件研发领域的蓬勃发展提供源源不断的活力与动力。公司员工现有
          82
          人，本科以上科技人员占总人数的87%，主要成员均来自国内知名企业的软件开发技术精英，具有丰富的行业经验。
        </span>
        <img src={mainlog} alt="" />
      </div>
    </div>
  );
};

export default Introduce;
