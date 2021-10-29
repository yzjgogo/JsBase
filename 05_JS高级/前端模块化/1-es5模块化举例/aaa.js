//匿名函数闭包实现作用域减小，避免命名冲突，或者或避免，任意js文件都可以引用变量
//定义返回值，将别的地方需要的变量，方法等导出，别的js文件(例如mmm.js)就可以使用moduleA了，因为moduleA是var修饰，是全局的
var moduleA = (function () {
  // 导出的对象
  var obj = {}

  // 小明
  var name = '小明'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true

  if (flag) {
    console.log(sum(10, 20));
  }


  obj.flag = flag;
  obj.sum = sum;

  return obj
})()


