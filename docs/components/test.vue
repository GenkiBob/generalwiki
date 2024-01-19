<template>
  <div class="PlayVideo" id="PlayVideo">
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onBeforeUnmount,
    onMounted,
    toRefs,
  } from "vue";
  import DialogOptions from "@/store/dialogOptions";
  import Hls from "hls.js";
  import DPlayer from "dplayer";
  export default defineComponent({
    name: "PlayVideo",
    components: {},
    props: {},
    setup () {
      const baseUrl = process.env.VUE_APP_BASE_URL;
      const { data2 } = toRefs(DialogOptions.options);//传过来的数据

      let dp: any;
      // 初始化播放器
      const initPlayer = () => {
        dp = new DPlayer({
          container: document.getElementById("PlayVideo"),
          autoplay: true, //是否自动播放
          theme: "#0093ff", //主题色
          loop: true, //视频是否循环播放
          lang: "zh-cn",
          screenshot: true, //是否开启截图
          hotkey: true, //是否开启热键
          preload: "auto", //视频是否预加载
          volume: 0.7, //默认音量
          mutex: true, //阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
          // logo: "https://i.loli.net/2019/06/06/5cf8c5d94521136430.png",//自定义的播放按钮图片
          video: {
            url: data2.value.url, //视频地址
            type: "customHls",
            customType: {
              customHls: (video: any, player: any) => {
                // console.log("查看传递的参数", video, player);
                const hls = new Hls(); //实例化Hls  用于解析m3u8
                hls.loadSource(video.src);
                hls.attachMedia(video);
              },
            },
          },
        });
      };
      onMounted(() => {
        initPlayer();
      });
      onBeforeUnmount(() => {
        dp.destroy();//关闭弹窗后销毁播放器
      });
      return {
        baseUrl,
        data2,
        dp,
      };
    },
  });
</script>

<style lang="less" scoped>
  .PlayVideo {
    width: 100%;
    height: 100%;

    :deep(#refPlayerWrap) {
      width: 100%;
      height: 100%;
    }
  }
</style>