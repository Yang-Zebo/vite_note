const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: 'ECMAScript',
        link: '/guide/JavaScript/ECMAScript/01'
      },
      {
        text: 'WebApi',
        link: '/guide/JavaScript/WebApi/01'
      }
    ]
  }
]

const sidebar = {
  '/guide/JavaScript/': [
    {
      text: 'ECMAScript入门',
      items: [
        { text: '简介', link: '/guide/JavaScript/ECMAScript/01' },
        {
          text: '语句和变量',
          link: '/guide/JavaScript/ECMAScript/01_01'
        },
        {
          text: '条件语句',
          link: '/guide/JavaScript/ECMAScript/01_02'
        },
        {
          text: '循环语句',
          link: '/guide/JavaScript/ECMAScript/01_03'
        },
        {
          text: '数据类型',
          link: '/guide/JavaScript/ECMAScript/01_04'
        },
        {
          text: '运算符',
          link: '/guide/JavaScript/ECMAScript/01_05'
        },
        {
          text: '标准库',
          link: '/guide/JavaScript/ECMAScript/01_06'
        }
      ]
    },
    {
      text: 'ECMAScript进阶',
      items: [
        { text: '变量声明', link: '/guide/JavaScript/ECMAScript/02' },
        {
          text: '结构赋值',
          link: '/guide/JavaScript/ECMAScript/02_01'
        },
        {
          text: '字符串扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/02_02'
        },
        {
          text: '数值扩展与新增方法',
          link: '/guide/JavaScript/ECMAScript/02_03'
        },
        {
          text: '函数扩展',
          link: '/guide/JavaScript/ECMAScript/02_04'
        },
        {
          text: '数组扩展',
          link: '/guide/JavaScript/ECMAScript/02_05'
        },
        {
          text: '对象扩展',
          link: '/guide/JavaScript/ECMAScript/02_06'
        },
        {
          text: '对象新增方法',
          link: '/guide/JavaScript/ECMAScript/02_07'
        },
        {
          text: '模块化',
          link: '/guide/JavaScript/ECMAScript/02_09'
        }
      ]
    },
    {
      text: 'ECMAScript深入',
      items: [
        {
          text: '基础补充',
          link: '/guide/JavaScript/ECMAScript/03'
        },
        {
          text: '对象创建与操作',
          link: '/guide/JavaScript/ECMAScript/03_01'
        },
        {
          text: 'Map,Set 相关',
          link: '/guide/JavaScript/ECMAScript/03_02'
        },
        {
          text: 'Symbol 类型',
          link: '/guide/JavaScript/ECMAScript/03_03'
        },
        {
          text: 'Promise 对象',
          link: '/guide/JavaScript/ECMAScript/03_04'
        },
        {
          text: 'Reflect 对象',
          link: '/guide/JavaScript/ECMAScript/03_05'
        },
        { text: 'Proxy 对象', link: '/guide/JavaScript/ECMAScript/03_06' },
        {
          text: 'Generator 与 async',
          link: '/guide/JavaScript/ECMAScript/03_07'
        },
        { text: 'Form Input Bindings', link: '/guide/essentials/forms' },
        {
          text: 'Lifecycle Hooks',
          link: '/guide/essentials/lifecycle'
        },
        { text: 'Watchers', link: '/guide/essentials/watchers' },
        { text: 'Template Refs', link: '/guide/essentials/template-refs' },
        {
          text: 'Components Basics',
          link: '/guide/essentials/component-basics'
        }
      ]
    },
    {
      text: 'Components In-Depth',
      items: [
        {
          text: 'Registration',
          link: '/guide/components/registration'
        },
        { text: 'Props', link: '/guide/components/props' },
        { text: 'Events', link: '/guide/components/events' },
        {
          text: 'Fallthrough Attributes',
          link: '/guide/components/attrs'
        },
        { text: 'Slots', link: '/guide/components/slots' },
        {
          text: 'Provide / inject',
          link: '/guide/components/provide-inject'
        },
        {
          text: 'Async Components',
          link: '/guide/components/async'
        }
      ]
    },
    {
      text: 'Reusability',
      items: [
        {
          text: 'Composables',
          link: '/guide/reusability/composables'
        },
        {
          text: 'Custom Directives',
          link: '/guide/reusability/custom-directives'
        },
        { text: 'Plugins', link: '/guide/reusability/plugins' }
      ]
    },
    {
      text: 'Built-in Components',
      items: [
        { text: 'Transition', link: '/guide/built-ins/transition' },
        {
          text: 'TransitionGroup',
          link: '/guide/built-ins/transition-group'
        },
        { text: 'KeepAlive', link: '/guide/built-ins/keep-alive' },
        { text: 'Teleport', link: '/guide/built-ins/teleport' },
        { text: 'Suspense', link: '/guide/built-ins/suspense' }
      ]
    },
    {
      text: 'Scaling Up',
      items: [
        { text: 'Single-File Components', link: '/guide/scaling-up/sfc' },
        { text: 'Tooling', link: '/guide/scaling-up/tooling' },
        { text: 'Routing', link: '/guide/scaling-up/routing' },
        {
          text: 'State Management',
          link: '/guide/scaling-up/state-management'
        },
        { text: 'Testing', link: '/guide/scaling-up/testing' },
        {
          text: 'Server-Side Rendering (SSR)',
          link: '/guide/scaling-up/ssr'
        }
      ]
    },
    {
      text: 'Best Practices',
      items: [
        {
          text: 'Production Deployment',
          link: '/guide/best-practices/production-deployment'
        },
        {
          text: 'Performance',
          link: '/guide/best-practices/performance'
        },
        {
          text: 'Accessibility',
          link: '/guide/best-practices/accessibility'
        },
        {
          text: 'Security',
          link: '/guide/best-practices/security'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'Overview', link: '/guide/typescript/overview' },
        {
          text: 'TS with Composition API',
          link: '/guide/typescript/composition-api'
        },
        {
          text: 'TS with Options API',
          link: '/guide/typescript/options-api'
        }
      ]
    },
    {
      text: 'Extra Topics',
      items: [
        {
          text: 'Ways of Using Vue',
          link: '/guide/extras/ways-of-using-vue'
        },
        {
          text: 'Composition API FAQ',
          link: '/guide/extras/composition-api-faq'
        },
        {
          text: 'Reactivity in Depth',
          link: '/guide/extras/reactivity-in-depth'
        },
        {
          text: 'Rendering Mechanism',
          link: '/guide/extras/rendering-mechanism'
        },
        {
          text: 'Render Functions & JSX',
          link: '/guide/extras/render-function'
        },
        {
          text: 'Vue and Web Components',
          link: '/guide/extras/web-components'
        },
        {
          text: 'Animation Techniques',
          link: '/guide/extras/animation'
        },
        {
          text: 'Reactivity Transform',
          link: '/guide/extras/reactivity-transform'
        }
      ]
    }
  ]
}

export default {
  lang: 'zh-CN',
  title: 'yzb-note', // 站点标题
  description: 'Sorting out personal front-end knowledge and notes', // 网站的描述。这将呈现为<meta>页面 HTML 中的标签
  lastUpdated: true, // 最近更新时间
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }] // 设置浏览器标签页图标
  ],
  themeConfig: {
    logo: '/images/logo.jpg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yang-Zebo/vuepress_node' }
    ],
    footer: {
      copyright: `Copyright © 2014-${new Date().getFullYear()} Evan You`
    }
  }
}
