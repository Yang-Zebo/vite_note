import navConfig from './config/navConfig'
import sidebarConfig from './config/sidebarConfig'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Web前端学习笔记',
  description: 'Personal knowledge notes on web front-end development, covering JavaScript, TypeScript, Vue, React and more',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['meta', { name: 'keywords', content: 'JavaScript, TypeScript, Vue, React, 前端开发, Web开发, 学习笔记' }],
    ['meta', { name: 'author', content: 'Yang Zebo' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'Web前端学习笔记' }],
    ['meta', { property: 'og:description', content: 'Personal knowledge notes on web front-end development, covering JavaScript, TypeScript, Vue, React and more' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/images/logo.jpg',
    search: {
      provider: 'local',
    },
    nav: navConfig,
    sidebar: sidebarConfig,
    lastUpdatedText: '最近更新',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yang-Zebo/vite_note' },
    ],
    editLink: {
      pattern: 'https://github.com/Yang-Zebo/vite_note/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: 'Released under the MIT License',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Yang Zebo`,
    },
  },
})
