
function printHelloWorld(){
    console.log("Hello, World!");
}

printHelloWorld()

function sum(a, b) {
    return a + b;
}
sum(5, 10);

function sum1(a,b){
    let add = a + b;
    console.log(add);
}
sum1(3,7);  

function square(num) {
    return num * num;
}

let result = square(4);
console.log(result);

// If-else

function voteEligible(age){
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else if (age < 0) {
        console.log("Invalid age.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

voteEligible(20); // Output: You are eligible to vote.
voteEligible(16); // Output: You are not eligible to vote.
voteEligible(-5); // Output: Invalid age.

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even.");
    } else {
        console.log(num + " is odd.");
    }
}

isEvenOrOdd(4); // Output: 4 is even.
isEvenOrOdd(7); // Output: 7 is odd.