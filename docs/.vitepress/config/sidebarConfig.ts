export interface SidebarItem {
  text: string
  link: string
}

export interface SidebarGroup {
  text: string
  collapsed?: boolean
  items: (SidebarGroup | SidebarItem)[]
}

export type SidebarConfig = Record<string, (SidebarGroup | SidebarItem)[]>

const sidebarConfig: SidebarConfig = {
  '/guide/JavaScript/Basic/': [
    {
      text: '语法入门',
      collapsed: true,
      items: [
        { text: '简介', link: '/guide/JavaScript/Basic/GettingStarted/00' },
        { text: '语句和变量', link: '/guide/JavaScript/Basic/GettingStarted/01' },
        { text: '条件语句', link: '/guide/JavaScript/Basic/GettingStarted/02' },
        { text: '循环语句', link: '/guide/JavaScript/Basic/GettingStarted/03' },
        { text: '数据类型', link: '/guide/JavaScript/Basic/GettingStarted/04' },
        { text: '运算符', link: '/guide/JavaScript/Basic/GettingStarted/05' },
      ],
    },
    {
      text: '语法扩展',
      collapsed: true,
      items: [
        { text: '变量声明', link: '/guide/JavaScript/Basic/Extensions/00' },
        { text: '结构赋值', link: '/guide/JavaScript/Basic/Extensions/01' },
        { text: '字符串扩展', link: '/guide/JavaScript/Basic/Extensions/02' },
        { text: '数值扩展', link: '/guide/JavaScript/Basic/Extensions/03' },
        { text: '函数扩展', link: '/guide/JavaScript/Basic/Extensions/04' },
        { text: '数组扩展', link: '/guide/JavaScript/Basic/Extensions/05' },
        { text: '对象扩展', link: '/guide/JavaScript/Basic/Extensions/06' },
        { text: '运算符扩展', link: '/guide/JavaScript/Basic/Extensions/07' },
        { text: '模块化', link: '/guide/JavaScript/Basic/Extensions/08' },
      ],
    },
  ],
  '/guide/JavaScript/Objects/': [
    {
      text: '常用对象方法',
      collapsed: true,
      items: [
        { text: 'Object 对象', link: '/guide/JavaScript/Objects/Standard/00' },
        { text: '对象的属性描述对象', link: '/guide/JavaScript/Objects/Standard/01' },
        { text: 'Array 对象', link: '/guide/JavaScript/Objects/Standard/02' },
        { text: '包装对象', link: '/guide/JavaScript/Objects/Standard/03' },
        { text: 'Boolean 对象', link: '/guide/JavaScript/Objects/Standard/04' },
        { text: 'Number 对象', link: '/guide/JavaScript/Objects/Standard/05' },
        { text: 'String 对象', link: '/guide/JavaScript/Objects/Standard/06' },
        { text: 'Math 对象', link: '/guide/JavaScript/Objects/Standard/07' },
        { text: 'Date 对象', link: '/guide/JavaScript/Objects/Standard/08' },
        { text: 'RegExp 对象', link: '/guide/JavaScript/Objects/Standard/09' },
        { text: 'JSON 对象', link: '/guide/JavaScript/Objects/Standard/10' },
      ],
    },
    {
      text: '补充对象方法',
      collapsed: true,
      items: [
        { text: '基础补充', link: '/guide/JavaScript/Objects/Additional/00' },
        { text: '对象创建与操作', link: '/guide/JavaScript/Objects/Additional/01' },
        { text: 'Map,Set 相关', link: '/guide/JavaScript/Objects/Additional/02' },
        { text: 'Symbol 类型', link: '/guide/JavaScript/Objects/Additional/03' },
        { text: 'Promise 对象', link: '/guide/JavaScript/Objects/Additional/04' },
        { text: 'Reflect 对象', link: '/guide/JavaScript/Objects/Additional/05' },
        { text: 'Proxy 对象', link: '/guide/JavaScript/Objects/Additional/06' },
        { text: 'Generator 与 async', link: '/guide/JavaScript/Objects/Additional/07' },
      ],
    },
  ],
  '/guide/JavaScript/Advanced/': [
    { text: 'this 指向', link: '/guide/JavaScript/Advanced/00' },
    { text: '深浅拷贝', link: '/guide/JavaScript/Advanced/01' },
    { text: '原型与原型链', link: '/guide/JavaScript/Advanced/02' },
    { text: '闭包与递归', link: '/guide/JavaScript/Advanced/03' },
    { text: '事件流与事件委托', link: '/guide/JavaScript/Advanced/04' },
    { text: '手写简易 HashMap', link: '/guide/JavaScript/Advanced/05' },
    { text: '事件循环 event loop', link: '/guide/JavaScript/Advanced/06' },
    { text: '手写Promise', link: '/guide/JavaScript/Advanced/07' },
  ],
  '/guide/JavaScript/WebApi/': [
    {
      text: 'DOM',
      collapsed: true,
      items: [
        { text: 'DOM 概述', link: '/guide/JavaScript/WebApi/DOM/00' },
        { text: 'Node 接口', link: '/guide/JavaScript/WebApi/DOM/01' },
        { text: '节点集合接口', link: '/guide/JavaScript/WebApi/DOM/02' },
      ],
    },
    {
      text: 'BOM',
      collapsed: true,
      items: [
        { text: 'BOM概述', link: '/guide/JavaScript/WebApi/BOM/00' },
        { text: '其他对象', link: '/guide/JavaScript/WebApi/BOM/01' },
      ],
    },
    {
      text: '事件相关',
      collapsed: true,
      items: [
        { text: '事件处理', link: '/guide/JavaScript/WebApi/Events/00' },
        { text: '事件模型', link: '/guide/JavaScript/WebApi/Events/01' },
        { text: 'Event 对象', link: '/guide/JavaScript/WebApi/Events/02' },
        { text: '鼠标事件', link: '/guide/JavaScript/WebApi/Events/03' },
        { text: '键盘事件', link: '/guide/JavaScript/WebApi/Events/04' },
        { text: '表单事件', link: '/guide/JavaScript/WebApi/Events/05' },
        { text: '触摸事件', link: '/guide/JavaScript/WebApi/Events/06' },
        { text: '其他事件', link: '/guide/JavaScript/WebApi/Events/07' },
      ],
    },
  ],
  '/guide/JavaScript/TypeScript/': [
    {
      text: '基础知识',
      collapsed: true,
      items: [
        { text: '常用类型', link: '/guide/JavaScript/TypeScript/Basic/00' },
        { text: '类型缩小', link: '/guide/JavaScript/TypeScript/Basic/01' },
        { text: '函数类型', link: '/guide/JavaScript/TypeScript/Basic/02' },
        { text: '对象类型', link: '/guide/JavaScript/TypeScript/Basic/03' },
        { text: 'Class-类', link: '/guide/JavaScript/TypeScript/Basic/04' },
      ],
    },
  ],
  '/guide/NodeJs/NodeApi/': [
    {
      text: 'NodeJs基础',
      items: [
        { text: '模块化与模块化', link: '/guide/NodeJs/NodeApi/01/00' },
        { text: '常用模块', link: '/guide/NodeJs/NodeApi/01/01' },
        { text: '包管理工具', link: '/guide/NodeJs/NodeApi/01/02' },
      ],
    },
    {
      text: 'NodeJs服务器',
      items: [
        { text: '原生服务器', link: '/guide/NodeJs/NodeApi/02/00' },
        { text: 'Express服务器', link: '/guide/NodeJs/NodeApi/02/01' },
        { text: 'Koa服务器', link: '/guide/NodeJs/NodeApi/02/02' },
      ],
    },
  ],
  '/guide/NodeJs/SQL/': [
    {
      text: 'SQL基础',
      items: [
        { text: 'SQL安装与使用', link: '/guide/NodeJs/SQL/01/00' },
      ],
    },
  ],
  '/guide/Frame/Vue/': [
    {
      text: 'Vue',
      items: [
        { text: '基础语法', link: '/guide/Frame/Vue/01/00' },
        { text: 'Vuex', link: '/guide/Frame/Vue/01/01' },
        { text: 'Vue2响应式原理', link: '/guide/Frame/Vue/01/02' },
      ],
    },
  ],
  '/guide/Others/Expand/': [
    {
      text: '补充与拓展',
      items: [
        { text: 'Git 使用', link: '/guide/Others/Expand/00' },
        { text: '工具网站', link: '/guide/Others/Expand/01' },
        { text: '流媒体传输与协议', link: '/guide/Others/Expand/02' },
        { text: '内存相关', link: '/guide/Others/Expand/03' },
        { text: '网络相关', link: '/guide/Others/Expand/04' },
        { text: '前端存储', link: '/guide/Others/Expand/05' },
        { text: '文件下载', link: '/guide/Others/Expand/06' },
        { text: '解析excel', link: '/guide/Others/Expand/07' },
        { text: '生成PDF与打印', link: '/guide/Others/Expand/08' },
        { text: '数据可视化面板', link: '/guide/Others/Expand/09' },
      ],
    },
  ],
  '/guide/Others/Webpack/': [
    {
      text: 'Webpack',
      items: [
        { text: 'Webpack 基础', link: '/guide/Others/Webpack/00' },
        { text: 'Webpack 优化', link: '/guide/Others/Webpack/01' },
      ],
    },
  ],
}

export default sidebarConfig
