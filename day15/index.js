//Conditional Statement -> comparison operator

// if else condition

// let age = 27;

// let email = prompt('Enter your email ');

// if (!email) {
//    console.log('Please enter  email to continue');
// } else {
//    console.log('Valid email password')
// }

// syntax
// if(condition){
//    block of code
// }else{
//    next block of code
// }

// if (age >= 18) {
//    alert('Eligible to drink for age ' + age);
// } else {
//    alert('Not eligible to drink for age ' + age);
// }

//prompt marks => 80 greater -distinction
// >70 <80(first div)
// >65 <70(sec div)
// >40 <65(third div)
// >0 <40 fail
// -1 (not a valid marks)

// if i enter 77 output should be in console - Marks 77 is odd and It is first division
// if i enter 80 output should be in console - Marks 80 is even and It is distinction

// const marks = prompt('Enter your marks here');

// const num = Number(marks);

// let message;

// if (num % 2 === 0) {
//    message = 'even';
// } else {
//    message = 'odd';
// }

// if (num >= 80 && num <= 100) {
//    document.write('Marks ' + num + ' is ' + message + ' and It is dstinction');
// } else if (num >= 70 && num < 80) {
//    document.write('Marks ' + num + ' is ' + message + ' and It is first  division');
// } else if (num >= 65 && num < 70) {
//    document.write('Marks ' + num + ' is ' + message + ' and It is Sec division');
// } else if (num >= 40 && num < 65) {
//    document.write('Marks ' + num + ' is ' + message + ' and It is Third division');
// } else if (num >= 0 && num < 40) {
//    document.write('Marks ' + num + ' is ' + message + ' and It is Fail');
// } else {
//    document.write('Marks doesnot exist')
// }


//functions -> block of code which solved specific problem

// camel case
let firstName;
let lastNameTest;
// pascal case
//  FirstName;
//  LastNameTest;

// let email, password, gender, postalCode;
//function declaration

// function functionName(){
//syntax
//block of code
// }

//function call

// functionName()


// function data(a, b, c) {

//    console.log(c + a + b)
// }

// data('abc', 'def', 3)
// data(10, 20, 3)
// data(10, 'hey ok', 3)

function sum(x, y, z) {

   // let x, y, z;
   document.write(x + y + z)


}

// sum(1, 2, 3);
// sum(3, 2, 3);
// sum(1, 22, 3);
// sum(1, 23, 3);
// sum(14, 2, 3);
// sum(1, 72, 3);

const number = prompt('Enter a num');
const toNum = Number(number);

function calculateSeriesSum(num) {
   //add logic here

   console.log('Sum of series till 10 is', sum)
}

calculateSeriesSum(toNum)

// function multiplication(x, y) {
//    console.log(x * y)
// }

// multiplication(10, 10)
// sum();
// sum();
// sum();






