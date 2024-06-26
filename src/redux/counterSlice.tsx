import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isLoading: false, // 加载状态
    innerWidth: null, // 当前窗口宽度
    coverType: "0", // 壁纸种类
    siteStartShow: false, // 建站日期显示
    musicClick: false, // 音乐链接是否跳转
    musicIsOk: false, // 音乐是否加载完成
    musicVolume: 0, // 音乐音量;
    musicOpenState: false, // 音乐面板开启状态
    backgroundShow: false, // 壁纸展示状态
    boxOpenState: false, // 盒子开启状态
    mobileOpenState: false, // 移动端开启状态
    mobileFuncState: false, // 移动端功能区开启状态
    setOpenState: false, // 设置页面开启状态
    playerState: false, // 当前播放状态
    playerTitle: null, // 当前播放歌曲名
    playerArtist: null, // 当前播放歌手名
    playerLrc: "歌词加载中", // 当前播放歌词
    playerLrcShow: true, // 是否显示底栏歌词
    footerBlur: true, // 底栏模糊
    playerAutoplay: false, // 是否自动播放
    playerLoop: "all", // 循环播放 "all", "one", "none"
    playerOrder: "list", // 循环顺序 "list", "random"
  },
  reducers: {
    // 两秒后把isLoading设置为false
    ChangeLoading: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const { ChangeLoading } = counterSlice.actions;
export default counterSlice.reducer;
