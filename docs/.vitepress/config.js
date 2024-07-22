import navConfig from './config/navConfig'
import sidebarConfig from './config/sidebarConfig'
export default {
  lang: 'zh-CN',
  title: 'Home', // 站点标题
  lastUpdated: true, // 最近更新时间
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: 'icon', href: '/images/logo.jpg'}] // 设置浏览器标签页图标
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/logo.jpg',
    search: {
      provider: 'local'
    },
    nav: navConfig,
    sidebar: sidebarConfig,
    lastUpdatedText: "最近更新",
    socialLinks: [
      {icon: 'github', link: 'https://github.com/Yang-Zebo/vite_note'}
    ],
    footer: {
      message: "Released under the MIT License",
      copyright: `Copyright © 2022-${new Date().getFullYear()} Yang Zebo`
    }
  }
}
