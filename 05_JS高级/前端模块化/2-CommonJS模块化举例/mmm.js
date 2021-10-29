

//yzj CommonJS的导入，关键字require还不支持，因为没有引入CommonJS包
var aaa = require('./aaa.js')
var flag = aaa.flag;
var sum = aaa.sum;

//结构声明
var {flag, sum} = require('./aaa.js')
sum(20, 30)

