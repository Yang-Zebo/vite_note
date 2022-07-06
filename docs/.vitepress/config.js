const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: 'ECMAScript',
        items: [
          { 
            text: '语法',
            link: '/guide/JavaScript/ECMAScript/01/01_00'
          },
          {
            text: '拓展',
            link: '/guide/JavaScript/ECMAScript/04/04_00'
          }
        ]
      },
      {
        text: 'WebApi',
        items: [
          {
            text: 'DOM',
            link: '/guide/JavaScript/WebApi/01/01_00'
          },
          {
            text: 'BOM',
            link: '/guide/JavaScript/WebApi/02/02_00'
          },
          {
            text: '事件',
            link: '/guide/JavaScript/WebApi/03/03_00'
          }
        ]
      }
    ]
  },
  {
    text: 'NodeJS',
    items: [
      {
        text: 'Node api',
        link: '/guide/NodeJs/NodeApi/01/01_00'
      }
    ]
  },
  {
    text: 'Frame',
    items: [
      {
        text: 'Vue',
        items: [
          { 
            text: '语法',
            link: '/guide/Frame/Vue/01/01_00'
          },
          { 
            text: '核心库',
            link: '/guide/Frame/Vue/02/02_00'
          }
        ]
      },
      {
        text: 'React',
        link: '/guide/Frame/React/01/01_00'
      }
    ]
  },
  {
    text: 'Others',
    items: [
      {
        text: '知识补充',
        link: '/guide/Others/01/01_00'
      }
    ]
  }
]

const sidebar = {
  '/guide/JavaScript/ECMAScript/': [
    {
      text: 'ECMAScript入门',
      items: [
        { text: '简介', link: '/guide/JavaScript/ECMAScript/01/01_00' },
        {
          text: '语句和变量',
          link: '/guide/JavaScript/ECMAScript/01/01_01'
        },
        {
          text: '条件语句',
          link: '/guide/JavaScript/ECMAScript/01/01_02'
        },
        {
          text: '循环语句',
          link: '/guide/JavaScript/ECMAScript/01/01_03'
        },
        {
          text: '数据类型',
          link: '/guide/JavaScript/ECMAScript/01/01_04'
        },
        {
          text: '运算符',
          link: '/guide/JavaScript/ECMAScript/01/01_05'
        },
        {
          text: '标准库',
          link: '/guide/JavaScript/ECMAScript/01/01_06'
        }
      ]
    },
    {
      text: 'ECMAScript进阶',
      items: [
        { text: '变量声明', link: '/guide/JavaScript/ECMAScript/02/02_00' },
        {
          text: '结构赋值',
          link: '/guide/JavaScript/ECMAScript/02/02_01'
        },
        {
          text: '字符串扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/02/02_02'
        },
        {
          text: '数值扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/02/02_03'
        },
        {
          text: '函数扩展',
          link: '/guide/JavaScript/ECMAScript/02/02_04'
        },
        {
          text: '数组扩展',
          link: '/guide/JavaScript/ECMAScript/02/02_05'
        },
        {
          text: '对象扩展',
          link: '/guide/JavaScript/ECMAScript/02/02_06'
        },
        {
          text: '对象新增方法',
          link: '/guide/JavaScript/ECMAScript/02/02_07'
        },
        {
          text: '运算符扩展',
          link: '/guide/JavaScript/ECMAScript/02/02_08'
        },
        {
          text: '模块化',
          link: '/guide/JavaScript/ECMAScript/02/02_09'
        }
      ]
    },
    {
      text: 'ECMAScript深入',
      items: [
        {
          text: '基础补充',
          link: '/guide/JavaScript/ECMAScript/03/03_00'
        },
        {
          text: '对象创建与操作',
          link: '/guide/JavaScript/ECMAScript/03/03_01'
        },
        {
          text: 'Map,Set 相关',
          link: '/guide/JavaScript/ECMAScript/03/03_02'
        },
        {
          text: 'Symbol 类型',
          link: '/guide/JavaScript/ECMAScript/03/03_03'
        },
        {
          text: 'Promise 对象',
          link: '/guide/JavaScript/ECMAScript/03/03_04'
        },
        {
          text: 'Reflect 对象',
          link: '/guide/JavaScript/ECMAScript/03/03_05'
        },
        { text: 'Proxy 对象', link: '/guide/JavaScript/ECMAScript/03/03_06' },
        {
          text: 'Generator 与 async',
          link: '/guide/JavaScript/ECMAScript/03/03_07'
        }
      ]
    },
    {
      text: '难点拓展',
      items: [
        {
          text: 'this 指向',
          link: '/guide/JavaScript/ECMAScript/04/04_00'
        },
        { text: '内存相关', link: '/guide/JavaScript/ECMAScript/04/04_01' },
        {
          text: '深浅拷贝',
          link: '/guide/JavaScript/ECMAScript/04/04_02'
        },
        { text: '原型与原型链', link: '/guide/JavaScript/ECMAScript/04/04_03' },
        {
          text: '闭包与递归',
          link: '/guide/JavaScript/ECMAScript/04/04_04'
        },
        {
          text: '事件流与事件委托',
          link: '/guide/JavaScript/ECMAScript/04/04_05'
        },
        {
          text: '手写简易 HashMap',
          link: '/guide/JavaScript/ECMAScript/04/04_06'
        },
        {
          text: '事件循环 event loop',
          link: '/guide/JavaScript/ECMAScript/04/04_07'
        },
        {
          text: '浏览器与网络相关',
          link: '/guide/JavaScript/ECMAScript/04/04_08'
        }
      ]
    }
  ],
  '/guide/JavaScript/WebApi/': [
    {
      text: 'DOM',
      items: [
        { text: 'DOM 概述', link: '/guide/JavaScript/WebApi/01/01_00' },
        { text: 'Node 接口', link: '/guide/JavaScript/WebApi/01/01_01' },
        { text: '节点集合接口', link: '/guide/JavaScript/WebApi/01/01_02' },
      ]
    },
    {
      text: 'BOM',
      items: [
        { text: '简介', link: '/guide/JavaScript/WebApi/02/02_00' }
      ]
    },
    {
      text: '事件',
      items: [
        { text: '简介', link: '/guide/JavaScript/WebApi/03/03_00' },
        { text: '事件模型', link: '/guide/JavaScript/WebApi/03/03_01' },
        { text: 'Event 对象', link: '/guide/JavaScript/WebApi/03/03_02' },
        { text: '鼠标事件', link: '/guide/JavaScript/WebApi/03/03_03' },
        { text: '键盘事件', link: '/guide/JavaScript/WebApi/03/03_04' },
        { text: '表单事件', link: '/guide/JavaScript/WebApi/03/03_05' },
        { text: '触摸事件', link: '/guide/JavaScript/WebApi/03/03_06' },
        { text: '其他事件', link: '/guide/JavaScript/WebApi/03/03_07' },
      ]
    },
  ],
  '/guide/NodeJs/NodeApi/': [
    {
      text: 'NodeJs 入门',
      items: [
        { text: 'Node 模块化与模块化开发', link: '/guide/NodeJs/NodeApi/01/01_00' },
      ]
    },
  ],
  '/guide/Frame/Vue/': [
    {
      text: '基础使用',
      items: [
        { text: '指令使用', link: '/guide/Frame/Vue/01/01_00' },
        { text: '数据绑定', link: '/guide/Frame/Vue/01/01_01' },
        { text: '事件绑定', link: '/guide/Frame/Vue/01/01_02' },
        { text: '样式绑定', link: '/guide/Frame/Vue/01/01_03' },
        { text: '列表渲染', link: '/guide/Frame/Vue/01/01_04' },
        { text: '条件渲染', link: '/guide/Frame/Vue/01/01_05' },
      ]
    },
    {
      text: '核心库',
      items: [
        { text: 'vuex', link: '/guide/Frame/Vue/02/02_00' },
      ]
    }
  ],
  '/guide/Others/': [
    {
      text: '知识补充',
      items: [
        { text: 'git使用', link: '/guide/Others/01/01_00' }
      ]
    },
  ]
}

export default {
  lang: 'zh-CN',
  title: 'yzb-note', // 站点标题
  description: 'Sorting out personal front-end knowledge and notes', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签
  lastUpdated: true, // 最近更新时间
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }] // 设置浏览器标签页图标
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/logo.jpg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yang-Zebo/vite_note' }
    ],
    footer: {
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  }
}
