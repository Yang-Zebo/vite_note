const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: 'ECMAScript',
        items: [
          { text: '入门', link: '/guide/JavaScript/ECMAScript/01' },
          { text: '进阶', link: '/guide/JavaScript/ECMAScript/02' }
        ]
      },
      {
        text: 'WebApi',
        items: [
          { text: 'DOM', link: '/guide/JavaScript/WebApi/01' }
        ]
      }
    ]
  }
]

export default {
  lang: 'zh-CN',
  title: 'yzb-note', // 站点标题
  description: 'Sorting out personal front-end knowledge and notes', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签
  lastUpdated: true, // 最近更新时间
  head: [],
  themeConfig: {
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yang-Zebo/vuepress_node' }
    ],
    footer: {
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  }
}
