// Primitive and Non primitive Data types

let myEmail = "test@example.com";

let assignEmail = myEmail

console.log(assignEmail)

assignEmail = "assign@example.com"
console.log(myEmail)

console.log(assignEmail)

let userOne = {
    name: "Shivam",
    email: "shivam@example.com"
}

let userTwo = userOne;

console.log(userOne, userTwo)

userTwo.email = "shivam@gmail.com";
console.log(userTwo, userOne)


// stack and Heap concept is When your data type is primitive type and ypu assign a variable value to the another variable like I have define in above it create a another stack of new variable and for non primitive types the object or array is reference type so it goes to the Heap Memory and get the value from same Reference point and also change the Original Reference point value.