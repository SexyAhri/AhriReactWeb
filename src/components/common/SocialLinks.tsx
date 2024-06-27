import "../styles/SocialLinks.less";
import socialLinks from "../../../assets/socialLinks.js";
import { useState } from "react";

export default function SocialLinks() {
  const [socialTip, setsocilTip] = useState("通过这里联系我吧");
  return (
    <div className="social">
      <div className="link">
        {socialLinks.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setsocilTip(item.tip)}
            >
              <img src={item.icon} className="icon" alt="" height={24} />
            </a>
          );
        })}
      </div>
      <span className="tip">{socialTip}</span>
    </div>
  );
}
