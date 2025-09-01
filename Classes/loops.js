

for(let i = 1; i<=5; i++){
    console.log("Hello", i);
}

console.log("-------------------------------------------------------");

for( let i = 3; i<10; i=i+2){
    console.log("Hello", i);
}
console.log("-------------------------------------------------------");

for (let i = 5; i>=1; i--){
    console.log("Hello", i);
}

console.log("-------------------------------------------------------");

function greeting(name) {
    console.log("Hello", name);
}

for (let i = 1; i<=7;i++){
  greeting("Anil "+ i);
}

console.log("-------------------------------------------------------");

let arr = [10,20,30,40,50,77,55,43,23,13,7,87,67,90];

lengthOfArray = arr.length;
console.log("Length of array:", lengthOfArray);

for (let i = 0; i<lengthOfArray; i++){
  console.log("Element at index", i, "is", arr[i]);
}

console.log("-------------------------------------------------------");

for (let i = 0; i<lengthOfArray; i++){
    if (arr[i] %2 === 0) {
        console.log("Even number found:", arr[i]);
    }
}

console.log('While Loop------------------')

let i = 0;
    while(i<5){
        i++
        console.log('Hello ' +i)
    }
console.log('While Loop------------------reverse')
let j= 5

while(j>=1){
    console.log('Hello ' +j)
    j--
}

console.log('----------------Problem1----------------')

let arr1 = [10,11,12,13,14,15,16,17,18,19,20]

for (let i = 0; i<arr1.length; i++){
    if (arr1[i] == 15) {
        console.log('Found 15 at index:', i);
    } else {
        console.log('Not Found 15 at index:', i);
    }
}
console.log('----------------Problem1 function----------------')

let arr2 = [10,11,12,13,14,15,16,17,18,19,20]

function searchNumberFromArray(num2){
    for (let i = 0; i<arr2.length; i++){
        if(arr2[i] == num2) {
            return i;
        }
    }
    return -1;
}
let result = searchNumberFromArray(10);
console.log('Result:', result);

console.log('----------------Problem2 function----------------')

function countNegativeNumbersFromArray(arr3){
    let count = 0;
    for (let i = 0; i<arr3.length; i++){
        if(arr3[i] < 0) {
            count++;
        }
    }
    return count;
}
let result2 = countNegativeNumbersFromArray([-1, 2, -3, 4, -5, -6, 7, 8, 9, -10]);
console.log('Result:', result2);

console.log('----------------Problem3 function----------------')

function findTheLargestElement(arr4){
    let largestNumber = 0;
    for ( let i = 0; i<arr4.length; i++){
        if (arr4[i] > largestNumber){
            largestNumber = arr4[i];
        }
    }
    return largestNumber;
}

let res4 = findTheLargestElement([10, 20, 30, 40, 50,88,99,7726,Infinity]);
console.log('Result:', res4);

console.log('----------------Problem4 function----------------')

function findTheSmallestElement(arr5){
    let smallestNumber = arr5[0];
    for ( let i = 1; i<arr5.length; i++){
        if (arr5[i] < smallestNumber){
            smallestNumber = arr5[i];
        }
    }
    return smallestNumber;
}

let res5 = findTheSmallestElement([-1,-2,-3,-10,19,10,-Infinity, 20, 30, 40, 50,88,99,7726]);
console.log('Result:', res5);
