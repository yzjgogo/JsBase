var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一:
export {
  flag, sum
}

// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88
// export {num1,height} //这样也可以


// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 4.export default
//一个文件里，export default只能有一个，因此这里我把address注释了，为了演示export default function (argument)

// const address = '北京市'
// export default address

export default function (argument) {
  console.log(argument);
}







