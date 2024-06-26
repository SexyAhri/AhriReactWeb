/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { ChangeLoading } from "../../redux/counterSlice";
import FadeInOut from "./FadeInOut";
import "../styles/Background.css";
import { useEffect, useState } from "react";
export default function Background() {
  const dispatch = useDispatch();
  const backgroundShow = useSelector(
    (state: any) => state.counter.backgroundShow
  );
  const isLoading = useSelector((state: any) => state.counter.isLoading);
  const coverType = useSelector((state: any) => state.counter.coverType);
  const [bgUrl, setBgUrl] = useState("");
  const time = Number(2000);
  const bgRandom = Math.floor(Math.random() * 10 + 1);
  const changeBg = (type: string) => {
    switch (type) {
      case "0":
        setBgUrl(`/images/background${bgRandom}.jpg`);
        break;
      case "1":
        setBgUrl("https://api.dujin.org/bing/1920.php");
        break;
      case "2":
        setBgUrl("https://api.vvhan.com/api/wallpaper/views");
        break;
      case "3":
        setBgUrl("https://api.vvhan.com/api/wallpaper/acg");
        break;
    }
  };

  //   壁纸加载完成
  const imgLoadComplete = () => {
    setTimeout(() => {
      dispatch(ChangeLoading(true));
    }, Math.floor(Math.random() * (600 - 300 + 1)) + 300);
  };
  // 壁纸加载错误
  const imgLoadError = () => {
    setBgUrl(`/images/background${bgRandom}.jpg`);
  };
  // 图画动画完成
  const imgAnimationEnd = () => {};
  useEffect(() => {
    changeBg(coverType);
  }, [coverType]);
  return (
    <div className={backgroundShow ? "cover show" : "cover"}>
      {isLoading && (
        <img
          src={bgUrl}
          alt="cover"
          className="bg"
          onLoad={imgLoadComplete}
          onError={imgLoadError}
          onAnimationEnd={imgAnimationEnd}
        />
      )}
      <div className={backgroundShow ? "gray hidden" : "gray"}></div>
      <FadeInOut duration={time}>
        {backgroundShow && coverType !== "3" && (
          <a className="down" href={bgUrl} target="_blank">
            下载壁纸
          </a>
        )}
      </FadeInOut>
    </div>
  );
}
