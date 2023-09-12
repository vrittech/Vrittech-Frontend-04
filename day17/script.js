// const str = 'madama'
// let reverseString = '';
// // methods 
// for (let i = str.length - 1; i >= 0; i--) {
//    reverseString += str[i]; // reverseString = reverseString + str[i]
// }

// if (str === reverseString) {
//    console.log(`${str} is palindrome`)
// } else {
//    console.log(`${str} is not palindrome`)
// }


const arr = ["Ram", "Sita", "Test", "New index", "teast index"];
const numbers = [1, 2, 3, 4, 15, 6, 7, 8, 9];
//first way to loop inside array - for loop
// const length = arr.length;
// for (let i = 2; i < length; i++) {
//    console.log(arr[i])
// }

console.log('---for of method below-----')
//second way to loop inside array -> for of loop
// for(variable of array){}
// for (let i of numbers) {
//    console.log(i)
// }

//Array methods
// length

console.log(numbers)
//push - add a new element to an array (end)
numbers.push(22);
numbers.push(33);
numbers.push(44);

// console.log(numbers)

//pop - remove a new element to an array (end)
numbers.pop()
numbers.pop()
numbers.pop()
numbers.pop()

// console.log(`Popped ${numbers}`)
console.log(numbers)
//unshift - add a new element to an array (beginning)
numbers.unshift("New data added")
console.log(numbers)
console.log('---shift------')
//shift- remove a new element to an array (beginning)
numbers.shift()
numbers.shift()
numbers.shift()
console.log(numbers)
console.log(numbers.length)

console.log(`This is first data ` + numbers[0])

const concat = 'a' + 'b'
console.log(concat)

//concat -- merge two arrays
const concatArr = numbers.concat(arr);
// const concatArr2 = [...arr, ...numbers];
console.log(concatArr)
// console.log(concatArr2)

//sort
const students = ["Prasanna", "Sahin", "Aayush", "Samaya"]

console.log('--------sort---------')
const nums = [199, 550, 77, 22, 1, 4]

const sortedNumber = nums.sort(function (num1, num2) {
   return num2 - num1;
})

console.log(sortedNumber)

console.log(`${sortedNumber[0]} is our maximum number`)
console.log(`${sortedNumber[sortedNumber.length - 1]} is our min number`)

// console.log()
//join

function sum(a, b) {
   return a + b;
}

const s = sum(2, 3);

function discount(percent, originalPrice) {
   return originalPrice - ((percent / 100) * originalPrice);
}

const test = ['1', '2', '3'];
const reverseArray = [];

for (let i = test.length - 1; i >= 0; i--) {
   reverseArray.push(test[i])
}

console.log(reverseArray)


// console.log(discount(71, 300))
// console.log(discount(65, 100))


// function concatString(str1, str2, str3) {
//    return {
//       concattedString: str1 + str2 + str3
//    };
// }

// console.log(concatString("We are", " concatting ", "new string"))

// function subtraction() { }
//normal function
//array function

const subtraction = () => { }
// const functionName
const summ = (a, b) => a + b;
// function discount(percent, originalPrice) {
//    return originalPrice - ((percent / 100) * originalPrice);
// }
const discountt = (percent, originalPrice) => {
   return originalPrice - ((percent / 100) * originalPrice);
}


summ(1, 2);

// var vs let vs const
// EcmaScript - js standard

//ES5 -< 2015 ES6 -> let, const (block function) instead of var, array function


//Javascript vs Typescript vs EcmaScript