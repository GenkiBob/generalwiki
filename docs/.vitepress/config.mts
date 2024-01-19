import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WIKI",
  description: "多莉魔法学院知识库",
  // base: '/generalwiki/',
  base: '/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: '快速使用',
        items: [
          { text: '苹果手机/平板教程', link: '/' },
          { text: '安卓/鸿蒙 手机/平板教程', link: '/android' },
          { text: 'Windows电脑教程', link: '/windows' },
          { text: 'Mac苹果电脑教程', link: '/mac' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
