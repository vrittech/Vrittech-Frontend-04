console.log("I am here");

// Syntax ,Declaring variables, Data Types

// var, let, const

let newtest;

const cd = 1;

// 8 Data Types
// 1. Number 1,23,4,5
let num = 2;
const secNum = 10;
console.log(num, typeof num);

// 2. String
let str = "Hi my name's test ; 'lksadknjansdjlnaklnq213u81u238";
const str1 = "2";

console.log(str1, typeof str1);
console.log(str, typeof str);

// 3. Boolean
let bool = true;
let bool2 = false;

console.log(bool, typeof bool);
// 4. undefined
let notDef;

console.log(typeof notDef)
// 5. null
let abc = null;

console.log(typeof abc)
// 6. BigInt 7. Symbol

// 8. Object
// key: value pair
let stundet1 = {
   name: "Prashant",
   age: 28,
   rollNo: 33,
   isPresent: false
}

console.log(stundet1, typeof stundet1)
//Declaring a variable
let student = 30;
let st;


console.log(stundet1.name, typeof stundet1.name)
console.log(stundet1.age, typeof stundet1.age)
//1 Array Date Object
let tes = ['nska', 'ansdkja', 'bsadbh']
let newArr = [1, 2, 3, 4, 5]
console.log(newArr)
let students = ['Ram', 'Shyam', 'hari', 'Sita']
console.log(students)
let data = [1, 'str', true, false, -99]

let newArObj = [stundet1, {
   test: '124'
}, true, false, {
      data: 123
   }]

console.log(typeof newArObj);

// let num1 = 30;
// const num2 = 33;
// console.log(num1)
// num1 = 'test';
// num2 = 'test';
// console.log(num1)

// Operators 1. Arithmetic Operators


let num1 = 10;
let num2 = 31;

const sum = num1 + num2;
console.log('sum', sum);

const sub = num1 - num2;
console.log('sub', sub);

const mul = num1 * num2;
console.log('mul', mul);

const div = num1 / num2;
console.log('div', div);

const rem = num2 % num1;
console.log('rem', rem);

const exponential = 2 ** 5;
console.log('exponential', exponential)

num1++
console.log(num1)
num2--
console.log(num2)
// 10)30(3

// Assignment Operator =
let y = 10;
let z = 30;
// z = z + 30
z += 30;
console.log('z', z)
// z = z - 10
z -= 10;
console.log('z', z)

//Comparison operator
