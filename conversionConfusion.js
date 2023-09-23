let score = "33abc"

console.log(score);
let valueInNumber = Number(score)

console.log(valueInNumber)

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)


let number = 123;
console.log(typeof number)

let stringNumber  = String(number);

console.log(typeof stringNumber)



//  if the score is in number than you do not need to convert this to a number

// suppose you have no idea what is type of score is but you have to store it in the number format than you need to convert it to a number

// if the score is in string format and the use type the "22abc" than If you conver it to a number it will give you a NAN in console.log the score is Not a Number if the score is null it  type is object if it is undefined its type should be undefined if true/false if true it should be 1 or false it should be 0

// "33" => 33
// "33abc" => NAN
// 1 => true
// 0 => false
// "" => false
// "abc" => true


// opertions

let str1 = "shivam"
let str2 = "kumar"

console.log(str1 + " " + str2)

console.log("1" + 2);
console.log(2 + "1")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")