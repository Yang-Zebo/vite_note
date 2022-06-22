module.exports = {
  tabWidth: 2, // 缩进字节数
  printWidth: 30, // 超过最大值换行
  useTabs: false, // 缩进不使用tab，使用空格
  semi: false, // 句尾添加分号
  singleQuote: true, // 使用单引号代替双引号
  arrowParens: "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  endOfLine: "auto", // 结尾是 \n \r \n\r auto
  ignorePath: ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  requireConfig: false, // Require a 'prettierconfig' to format prettier
  trailingComma: false // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号
}
