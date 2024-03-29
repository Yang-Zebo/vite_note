const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: 'ECMAScript',
        items: [
          {
            text: '入门',
            link: '/guide/JavaScript/ECMAScript/Base/01/01_00'
          },
          {
            text: '进阶',
            link: '/guide/JavaScript/ECMAScript/Improve/02/02_00'
          }
        ]
      },
      {
        text: 'WebApi',
        link: '/guide/JavaScript/WebApi/BOMDOM/01/01_00'
      }
    ]
  },
  {
    text: 'NodeJS',
    items: [
      {
        text: 'node 相关',
        link: '/guide/NodeJs/NodeApi/01/01_00'
      },
      {
        text: 'SQL 相关',
        link: '/guide/NodeJs/SQL/01/01_00'
      }
    ]
  },
  {
    text: 'Frame',
    items: [
      {
        text: 'Vue',
        link: '/guide/Frame/Vue/01/01_00'
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
        link: '/guide/Others/Expand/01/01_00'
      },
      {
        text: 'webpack',
        link: '/guide/Others/Webpack/02/02_00'
      }
    ]
  }
]

const sidebar = {
  '/guide/JavaScript/ECMAScript/Base/': [
    {
      text: '语法入门',
      items: [
        {
          text: '简介',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_00'
        },
        {
          text: '语句和变量',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_01'
        },
        {
          text: '条件语句',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_02'
        },
        {
          text: '循环语句',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_03'
        },
        {
          text: '数据类型',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_04'
        },
        {
          text: '运算符',
          link: '/guide/JavaScript/ECMAScript/Base/01/01_05'
        }
      ]
    },
    {
      text: '基础方法(标准库)',
      items: [
        {
          text: 'Object 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_00'
        },
        {
          text: '对象的属性描述对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_01'
        },
        {
          text: 'Array 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_02'
        },
        {
          text: '包装对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_03'
        },
        {
          text: 'Boolean 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_04'
        },
        {
          text: 'Number 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_05'
        },
        {
          text: 'String 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_06'
        },
        {
          text: 'Math 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_07'
        },
        {
          text: 'Date 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_08'
        },
        {
          text: 'RegExp 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_09'
        },
        {
          text: 'JSON 对象',
          link: '/guide/JavaScript/ECMAScript/Base/05/05_10'
        }
      ]
    }
  ],
  '/guide/JavaScript/ECMAScript/Improve/': [
    {
      text: 'ECMAScript扩展',
      items: [
        {
          text: '变量声明',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_00'
        },
        {
          text: '结构赋值',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_01'
        },
        {
          text: '字符串扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_02'
        },
        {
          text: '数值扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_03'
        },
        {
          text: '函数扩展',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_04'
        },
        {
          text: '数组扩展',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_05'
        },
        {
          text: '对象扩展',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_06'
        },
        {
          text: '对象新增方法',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_07'
        },
        {
          text: '运算符扩展',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_08'
        },
        {
          text: '模块化',
          link: '/guide/JavaScript/ECMAScript/Improve/02/02_09'
        }
      ]
    },
    {
      text: 'ECMAScript深入',
      items: [
        {
          text: '基础补充',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_00'
        },
        {
          text: '对象创建与操作',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_01'
        },
        {
          text: 'Map,Set 相关',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_02'
        },
        {
          text: 'Symbol 类型',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_03'
        },
        {
          text: 'Promise 对象',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_04'
        },
        {
          text: 'Reflect 对象',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_05'
        },
        {
          text: 'Proxy 对象',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_06'
        },
        {
          text: 'Generator 与 async',
          link: '/guide/JavaScript/ECMAScript/Improve/03/03_07'
        }
      ]
    },
    {
      text: 'ECMAScript难点',
      items: [
        {
          text: 'this 指向',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_00'
        },
        {
          text: '深浅拷贝',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_02'
        },
        {
          text: '原型与原型链',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_03'
        },
        {
          text: '闭包与递归',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_04'
        },
        {
          text: '事件流与事件委托',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_05'
        },
        {
          text: '手写简易 HashMap',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_06'
        },
        {
          text: '事件循环 event loop',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_07'
        },
        {
          text: '手写Promise',
          link: '/guide/JavaScript/ECMAScript/Improve/04/04_10'
        }
      ]
    }
  ],
  '/guide/JavaScript/WebApi/': [
    {
      text: 'DOM',
      items: [
        {text: 'DOM 概述', link: '/guide/JavaScript/WebApi/BOMDOM/01/01_00'},
        {text: 'Node 接口', link: '/guide/JavaScript/WebApi/BOMDOM/01/01_01'},
        {text: '节点集合接口', link: '/guide/JavaScript/WebApi/BOMDOM/01/01_02'}
      ]
    },
    {
      text: 'BOM',
      items: [
        {text: 'BOM概述', link: '/guide/JavaScript/WebApi/BOMDOM/02/02_00'},
        {text: '其他对象', link: '/guide/JavaScript/WebApi/BOMDOM/02/02_01'}
      ]
    },
    {
      text: '事件相关',
      items: [
        {
          text: '事件处理',
          link: '/guide/JavaScript/WebApi/03/03_00'
        },
        {
          text: '事件模型',
          link: '/guide/JavaScript/WebApi/03/03_01'
        },
        {
          text: 'Event 对象',
          link: '/guide/JavaScript/WebApi/03/03_02'
        },
        {
          text: '鼠标事件',
          link: '/guide/JavaScript/WebApi/03/03_03'
        },
        {
          text: '键盘事件',
          link: '/guide/JavaScript/WebApi/03/03_04'
        },
        {
          text: '表单事件',
          link: '/guide/JavaScript/WebApi/03/03_05'
        },
        {
          text: '触摸事件',
          link: '/guide/JavaScript/WebApi/03/03_06'
        },
        {
          text: '其他事件',
          link: '/guide/JavaScript/WebApi/03/03_07'
        }
      ]
    }
  ],
  '/guide/NodeJs/NodeApi/': [
    {
      text: 'NodeJs基础',
      items: [
        {text: '模块化与模块化', link: '/guide/NodeJs/NodeApi/01/01_00'},
        {text: '常用模块', link: '/guide/NodeJs/NodeApi/01/01_01'},
        {text: '包管理工具', link: '/guide/NodeJs/NodeApi/01/01_02'}
      ]
    },
    {
      text: 'NodeJs服务器',
      items: [
        {text: '原生 node 服务器', link: '/guide/NodeJs/NodeApi/02/02_00'},
        {text: 'express 服务器', link: '/guide/NodeJs/NodeApi/02/02_01'},
        {text: 'koa 服务器', link: '/guide/NodeJs/NodeApi/02/02_02'}
      ]
    }
  ],
  '/guide/NodeJs/SQL/': [
    {
      text: 'SQL基础',
      items: [
        {text: 'SQL 安装与使用', link: '/guide/NodeJs/SQL/01/01_00'}
      ]
    }
  ],
  '/guide/Frame/Vue/': [
    {
      text: 'Vue',
      items: [
        {text: '基础语法', link: '/guide/Frame/Vue/01/01_00'},
        {text: 'Vuex', link: '/guide/Frame/Vue/01/01_01'},
        {text: 'Vue响应式原理', link: '/guide/Frame/Vue/01/01_02'}
      ]
    }
  ],
  '/guide/Others/Expand/': [
    {
      text: '知识补充',
      items: [
        {text: 'Git 使用', link: '/guide/Others/Expand/01/01_00'},
        {text: '工具网站', link: '/guide/Others/Expand/01/01_01'},
        {text: '流媒体传输与协议', link: '/guide/Others/Expand/01/01_02'},
        {text: '内存相关', link: '/guide/Others/Expand/01/01_03'},
        {text: '网络相关', link: '/guide/Others/Expand/01/01_04'},
        {text: '前端存储', link: '/guide/Others/Expand/01/01_05'},
      ]
    },
    {
      text: '应用拓展',
      items: [
        {
          text: '文件下载',
          link: '/guide/Others/Expand/02/01_00'
        },
        {
          text: '解析excel',
          link: '/guide/Others/Expand/02/01_01'
        },
        {
          text: '生成PDF与打印',
          link: '/guide/Others/Expand/02/01_02'
        },
        {
          text: '数据可视化面板',
          link: '/guide/Others/Expand/02/01_03'
        }
      ]
    }
  ],
  '/guide/Others/Webpack/': [
    {
      text: 'webpack',
      items: [
        {text: 'webpack 基础', link: '/guide/Others/Webpack/02/02_00'},
        {text: 'webpack 优化', link: '/guide/Others/Webpack/02/02_01'}
      ]
    }
  ]
}

export default {
  lang: 'zh-CN',
  title: 'yzb-note', // 站点标题
  description: 'Sorting out personal front-end knowledge and notes', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签
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
    nav,
    sidebar,
    socialLinks: [
      {icon: 'github', link: 'https://github.com/Yang-Zebo/vite_note'}
    ],
    footer: {
      // copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  }
}
