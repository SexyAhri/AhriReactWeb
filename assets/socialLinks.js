interface SocialLink {
  name: string;
  icon: string;
  tip: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: "/images/icon/github.png",
    tip: "去 Github 看看",
    url: "https://github.com/imsyy",
  },
  {
    name: "BiliBili",
    icon: "/images/icon/bilibili.png",
    tip: "(゜-゜)つロ 干杯 ~",
    url: "https://space.bilibili.com/98544142",
  },
  {
    name: "QQ",
    icon: "/images/icon/qq.png",
    tip: "有什么事吗",
    url: "https://res.abeim.cn/api/qq/?qq=1539250352",
  },
  {
    name: "Email",
    icon: "/images/icon/email.png",
    tip: "来封 Email ~",
    url: "mailto:one@imsyy.top",
  },
  {
    name: "Twitter",
    icon: "/images/icon/twitter.png",
    tip: "你懂的 ~",
    url: "https://twitter.com/iimmsyy",
  },
  {
    name: "Telegram",
    icon: "/images/icon/telegram.png",
    tip: "你懂的 ~",
    url: "https://t.me/bottom_user",
  },
];

export default socialLinks;
