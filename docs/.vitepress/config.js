const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: '基础语法',
        link: '/guide/JavaScript/JiChu/RuMen/00'
      },
      {
        text: '基础对象',
        link: '/guide/JavaScript/DuiXiang/BiaoZhun/00'
      },
      {
        text: '要点难点',
        link: '/guide/JavaScript/TiShen/00'
      },
      {
        text: 'WebApi',
        link: '/guide/JavaScript/WebApi/Dom/00'
      },
      {
        text: 'TypeScript',
        link: '/guide/JavaScript/Ts/JiChu/00'
      }
    ]
  },
  {
    text: '后端相关',
    items: [
      {
        text: 'NodeJS',
        link: '/guide/NodeJs/NodeApi/01/01_00'
      },
      {
        text: 'SQL',
        link: '/guide/NodeJs/SQL/01/01_00'
      }
    ]
  },
  {
    text: '前端框架',
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
    text: '其他要点',
    items: [
      {
        text: '补充与拓展',
        link: '/guide/Others/Expand/00'
      },
      {
        text: 'Webpack',
        link: '/guide/Others/Webpack/00'
      }
    ]
  }
]

const sidebar = {
  '/guide/JavaScript/JiChu/': [
    {
      text: '语法入门',
      items: [
        {
          text: '简介',
          link: '/guide/JavaScript/JiChu/RuMen/00'
        },
        {
          text: '语句和变量',
          link: '/guide/JavaScript/JiChu/RuMen/01'
        },
        {
          text: '条件语句',
          link: '/guide/JavaScript/JiChu/RuMen/02'
        },
        {
          text: '循环语句',
          link: '/guide/JavaScript/JiChu/RuMen/03'
        },
        {
          text: '数据类型',
          link: '/guide/JavaScript/JiChu/RuMen/04'
        },
        {
          text: '运算符',
          link: '/guide/JavaScript/JiChu/RuMen/05'
        }
      ]
    },
    {
      text: '语法扩展',
      items: [
        {
          text: '变量声明',
          link: '/guide/JavaScript/JiChu/KuoZhan/00'
        },
        {
          text: '结构赋值',
          link: '/guide/JavaScript/JiChu/KuoZhan/01'
        },
        {
          text: '字符串扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/02'
        },
        {
          text: '数值扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/03'
        },
        {
          text: '函数扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/04'
        },
        {
          text: '数组扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/05'
        },
        {
          text: '对象扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/06'
        },
        {
          text: '运算符扩展',
          link: '/guide/JavaScript/JiChu/KuoZhan/07'
        },
        {
          text: '模块化',
          link: '/guide/JavaScript/JiChu/KuoZhan/08'
        }
      ]
    }
  ],
  '/guide/JavaScript/DuiXiang/': [
    {
      text: '常用对象方法',
      items: [
        {
          text: 'Object 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/00'
        },
        {
          text: '对象的属性描述对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/01'
        },
        {
          text: 'Array 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/02'
        },
        {
          text: '包装对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/03'
        },
        {
          text: 'Boolean 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/04'
        },
        {
          text: 'Number 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/05'
        },
        {
          text: 'String 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/06'
        },
        {
          text: 'Math 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/07'
        },
        {
          text: 'Date 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/08'
        },
        {
          text: 'RegExp 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/09'
        },
        {
          text: 'JSON 对象',
          link: '/guide/JavaScript/DuiXiang/BiaoZhun/10'
        }
      ]
    },
    {
      text: '补充对象方法',
      items: [
        {
          text: '基础补充',
          link: '/guide/JavaScript/DuiXiang/BuChong/00'
        },
        {
          text: '对象创建与操作',
          link: '/guide/JavaScript/DuiXiang/BuChong/01'
        },
        {
          text: 'Map,Set 相关',
          link: '/guide/JavaScript/DuiXiang/BuChong/02'
        },
        {
          text: 'Symbol 类型',
          link: '/guide/JavaScript/DuiXiang/BuChong/03'
        },
        {
          text: 'Promise 对象',
          link: '/guide/JavaScript/DuiXiang/BuChong/04'
        },
        {
          text: 'Reflect 对象',
          link: '/guide/JavaScript/DuiXiang/BuChong/05'
        },
        {
          text: 'Proxy 对象',
          link: '/guide/JavaScript/DuiXiang/BuChong/06'
        },
        {
          text: 'Generator 与 async',
          link: '/guide/JavaScript/DuiXiang/BuChong/07'
        }
      ]
    },
  ],
  '/guide/JavaScript/TiShen/': [
    {
      text: 'this 指向',
      link: '/guide/JavaScript/TiShen/00'
    },
    {
      text: '深浅拷贝',
      link: '/guide/JavaScript/TiShen/01'
    },
    {
      text: '原型与原型链',
      link: '/guide/JavaScript/TiShen/02'
    },
    {
      text: '闭包与递归',
      link: '/guide/JavaScript/TiShen/03'
    },
    {
      text: '事件流与事件委托',
      link: '/guide/JavaScript/TiShen/04'
    },
    {
      text: '手写简易 HashMap',
      link: '/guide/JavaScript/TiShen/05'
    },
    {
      text: '事件循环 event loop',
      link: '/guide/JavaScript/TiShen/06'
    },
    {
      text: '手写Promise',
      link: '/guide/JavaScript/TiShen/07'
    }
  ],
  '/guide/JavaScript/WebApi/': [
    {
      text: 'DOM',
      items: [
        {text: 'DOM 概述', link: '/guide/JavaScript/WebApi/Dom/00'},
        {text: 'Node 接口', link: '/guide/JavaScript/WebApi/Dom/01'},
        {text: '节点集合接口', link: '/guide/JavaScript/WebApi/Dom/02'}
      ]
    },
    {
      text: 'BOM',
      items: [
        {text: 'BOM概述', link: '/guide/JavaScript/WebApi/Bom/00'},
        {text: '其他对象', link: '/guide/JavaScript/WebApi/Bom/01'}
      ]
    },
    {
      text: '事件相关',
      items: [
        {
          text: '事件处理',
          link: '/guide/JavaScript/WebApi/ShiJian/00'
        },
        {
          text: '事件模型',
          link: '/guide/JavaScript/WebApi/ShiJian/01'
        },
        {
          text: 'Event 对象',
          link: '/guide/JavaScript/WebApi/ShiJian/02'
        },
        {
          text: '鼠标事件',
          link: '/guide/JavaScript/WebApi/ShiJian/03'
        },
        {
          text: '键盘事件',
          link: '/guide/JavaScript/WebApi/ShiJian/04'
        },
        {
          text: '表单事件',
          link: '/guide/JavaScript/WebApi/ShiJian/05'
        },
        {
          text: '触摸事件',
          link: '/guide/JavaScript/WebApi/ShiJian/06'
        },
        {
          text: '其他事件',
          link: '/guide/JavaScript/WebApi/ShiJian/07'
        }
      ]
    }
  ],
  '/guide/JavaScript/Ts/': [
    {
      text: '基础知识',
      items: [
        {
          text: '常用类型',
          link: '/guide/JavaScript/Ts/JiChu/00'
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
        {text: '原生服务器', link: '/guide/NodeJs/NodeApi/02/02_00'},
        {text: 'Express服务器', link: '/guide/NodeJs/NodeApi/02/02_01'},
        {text: 'Koa服务器', link: '/guide/NodeJs/NodeApi/02/02_02'}
      ]
    }
  ],
  '/guide/NodeJs/SQL/': [
    {
      text: 'SQL基础',
      items: [
        {text: 'SQL安装与使用', link: '/guide/NodeJs/SQL/01/01_00'}
      ]
    }
  ],
  '/guide/Frame/Vue/': [
    {
      text: 'Vue',
      items: [
        {text: '基础语法', link: '/guide/Frame/Vue/01/01_00'},
        {text: 'Vuex', link: '/guide/Frame/Vue/01/01_01'},
        {text: 'Vue2响应式原理', link: '/guide/Frame/Vue/01/01_02'}
      ]
    }
  ],
  '/guide/Others/Expand/': [
    {
      text: '补充与拓展',
      items: [
        {text: 'Git 使用', link: '/guide/Others/Expand/00'},
        {text: '工具网站', link: '/guide/Others/Expand/01'},
        {text: '流媒体传输与协议', link: '/guide/Others/Expand/02'},
        {text: '内存相关', link: '/guide/Others/Expand/03'},
        {text: '网络相关', link: '/guide/Others/Expand/04'},
        {text: '前端存储', link: '/guide/Others/Expand/05'},
        {text: '文件下载', link: '/guide/Others/Expand/06'},
        {text: '解析excel', link: '/guide/Others/Expand/07'},
        {text: '生成PDF与打印', link: '/guide/Others/Expand/08'},
        {text: '数据可视化面板', link: '/guide/Others/Expand/09'}
      ]
    }
  ],
  '/guide/Others/Webpack/': [
    {
      text: 'Webpack',
      items: [
        {text: 'Webpack 基础', link: '/guide/Others/Webpack/00'},
        {text: 'Webpack 优化', link: '/guide/Others/Webpack/01'}
      ]
    }
  ]
}

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
    nav,
    sidebar,
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
