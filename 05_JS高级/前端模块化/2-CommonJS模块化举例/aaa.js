

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


//module关键字还不支持，因为没有引入CommonJS
module.exports = {
  flag: flag,
  sum: sum
}


