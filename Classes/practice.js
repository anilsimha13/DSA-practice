//find if the element is present in array or not and print it's Index

function elementExisits(arr1,element){
    for (let i=0; i<arr1.length; i++){
        if (arr1[i] === element) {
            return i;
        }
    }
    return -1;
}

let res1 = elementExisits([11,222,3333,44444,555555],3333);
console.log('Result1:', res1);

console.log('****************************************')

function findLargest(arr2){
    let largestNum = 0
    for (let i=0; i<arr2.length; i++){
        if (arr2[i] > largestNum) {
            largestNum = arr2[i];
        }
    }
    return largestNum;
}

let res2 = findLargest([11,222,3333,44444,555555]);
console.log('Result2:', res2);
console.log('****************************************')

function findSmallest(arr3){
    let smallestNum = -1
    for (let i = 0; i<arr3.length; i++){
        if (smallestNum === -1 || arr3[i] < smallestNum) {
            smallestNum = arr3[i];
        }
    }
    return smallestNum;
}

let res3 = findSmallest([11,222,3333,44444,555555]);
console.log('Result3:', res3);