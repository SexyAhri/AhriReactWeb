import { useEffect } from "react";
import "../styles/Loading.css";
import { useSelector, useDispatch } from "react-redux";
import { ChangeLoading } from "../../redux/counterSlice";

const Loading = () => {
  // 读取.envzong配置文件
  const siteName: any = process.env.REACT_APP_VITE_SITE_NAME;
  const isLoading = useSelector((state: any) => state.counter.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(ChangeLoading(true));
    }, 500);
  }, [dispatch]);
  return (
    <div>
      <div id="loader-wrapper" className={isLoading ? "loaded" : ""}>
        <div className="loader">
          <div className="loader-circle" />
          <div className="loader-text">
            <span className="name">{siteName}</span>
            <span className="tip">加载中</span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};
export default Loading;
