

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