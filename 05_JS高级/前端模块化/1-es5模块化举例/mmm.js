//使用aaa.js中导出的对象，从而引用到aaa.js里的东西
;(function () {
  // 1.想使用flag
  if (moduleA.flag) {
    console.log('小明是天才, 哈哈哈');
  }

  // 2.使用sum函数
  console.log(moduleA.sum(40, 50));
})()


