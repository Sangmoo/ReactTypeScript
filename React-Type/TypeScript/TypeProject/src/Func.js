"use strict";
// Use TypeScript Function
exports.__esModule = true;
// 1. Basic
function add(a, b) {
    return a + b;
}
var result = add(1, 2);
// 2. Func Signiture
//let PrintFunc: (string, number) => void = function(name: string, age: number): void {};
// 3. Type Alias
// type stringNumberFunc = (string, number) => void;
// let f: stringNumberFunc = function(a: string, b: number): void {};
// let g: stringNumberFunc = function(a: string, b: number): void {};
// 4. Optional Parameter
function fn(arg1, arg) { }
function fn2(arg1, arg) {
    console.log("arg: " + arg);
}
fn2('Hello', 1);
fn2('Hello String Param');
// type OptinalArgFunc = (string, number?) => void;
// 5. Func Object
var add2 = function (a, b) {
    return a + b;
};
console.log(add2(1, 3));
// 6. First-Class Function
var f = function (a, b) {
    // Function Expression
    return a + b;
};
f = function (a, b) {
    return a - b;
};
// 7. Array Func
var isGreater = function (a, b) { return a > b; }; // return 생략, True or False 반환
// 8. Method Chain
var method_chain_1 = require("./method-chain/method-chain");
var clac = new method_chain_1.Calculator();
var clacResult = clac
    .add(1)
    .add(2)
    .multiply(3)
    .multiply(5)
    .add(2)
    .multiply(3).value;
console.log(clacResult);
