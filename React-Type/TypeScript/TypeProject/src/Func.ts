// Use TypeScript Function

// 1. Basic
function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2);

// 2. Func Signiture
//let PrintFunc: (string, number) => void = function(name: string, age: number): void {};

// 3. Type Alias
// type stringNumberFunc = (string, number) => void;
// let f: stringNumberFunc = function(a: string, b: number): void {};
// let g: stringNumberFunc = function(a: string, b: number): void {};

// 4. Optional Parameter
function fn(arg1: string, arg?: number): void {}

function fn2(arg1: string, arg?: number) {
  console.log(`arg: ${arg}`);
}

fn2('Hello', 1);
fn2('Hello String Param');

// type OptinalArgFunc = (string, number?) => void;

// 5. Func Object
let add2 = function(a: number, b: number) {
  return a + b;
};
console.log(add2(1, 3));

// 6. First-Class Function
let f = function(a: number, b: number) {
  // Function Expression
  return a + b;
};

f = function(a, b) {
  return a - b;
};

// 7. Array Func
const isGreater = (a: number, b: number): boolean => a > b; // return 생략, True or False 반환

// 8. Method Chain
import { Calculator } from './method-chain/method-chain';

let clac = new Calculator();
let clacResult = clac
  .add(1)
  .add(2)
  .multiply(3)
  .multiply(5)
  .add(2)
  .multiply(3).value;
console.log(clacResult);
