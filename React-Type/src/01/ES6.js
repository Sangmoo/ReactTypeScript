/**
 * 자바 스크립트 문자열 사용
 */

// ES5 문법
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;
var product = { name: '도서', price: '4200원' };
var message = '제품' + product.name + '의 가격은' + product.price + '입니다';
var multiLine = '문자열1\n문자열2';
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + (value1 + value2) + '입니다. ';
var operator2 = '불리언값은 ' + (boolValue ? '참' : '거짓') + '입니다. ';

//ES6 문법
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`;

var product = { name: '도서', price: '4200원' };
var message = `제품 ${product.name}의 가격은 ${product.price}입니다`; // 백틱(`) 사용
var multiLine = `문자열1 
문자열2`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;

/**
 * 자바 스크립트 배열
 */

// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';
function func() {
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1);
}

// ES6 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
// combined = ['one', 'two', 'three', 'four'];
const [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []
function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예
// var wrongArr = ...array1; // var goodArr = array1; 으로 사용해야 한다.

// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
delete others.other;

// ES6 예제
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}
