const nav = [
  {
    text: 'JavaScript',
    items: [
      {
        text: 'ECMAScript',
        items: [
          { text: 'ECMAScript5', link: '/guide/JavaScript/ECMAScript/01' },
          { text: 'ECMAScript6', link: '/guide/JavaScript/ECMAScript/02' }
        ]
      },
      {
        text: 'WebApi',
        items: [
          { text: 'DOM', link: '/guide/JavaScript/WebApi/01' },
          { text: 'BOM', link: '/guide/JavaScript/WebApi/02' },
        ]
      }
    ]
  }
]

const sidebar = {
  '/guide/JavaScript/': [
    {
      text: 'ECMAScript5',
      items: [
        { text: '简介与基础语法', link: '/guide/JavaScript/ECMAScript/01' },
        {
          text: '数据结构',
          link: '/guide/JavaScript/ECMAScript/01_01'
        }
      ]
    },
    {
      text: 'ECMAScript6',
      items: [
        { text: '简介与基础语法', link: '/guide/JavaScript/ECMAScript/01' },
        {
          text: '数据结构',
          link: '/guide/JavaScript/ECMAScript/01_01'
        }
      ]
    },
    {
      text: 'Essentials',
      items: [
        {
          text: 'Creating an Application',
          link: '/guide/essentials/application'
        },
        {
          text: 'Template Syntax',
          link: '/guide/essentials/template-syntax'
        },
        {
          text: 'Reactivity Fundamentals',
          link: '/guide/essentials/reactivity-fundamentals'
        },
        {
          text: 'Computed Properties',
          link: '/guide/essentials/computed'
        },
        {
          text: 'Class and Style Bindings',
          link: '/guide/essentials/class-and-style'
        },
        {
          text: 'Conditional Rendering',
          link: '/guide/essentials/conditional'
        },
        { text: 'List Rendering', link: '/guide/essentials/list' },
        {
          text: 'Event Handling',
          link: '/guide/essentials/event-handling'
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
