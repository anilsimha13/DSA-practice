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

console.log('****************************************')


function secondLargestNumberInArray(arr4){
    if (arr4.length<2){
        return null
    }
    let firstLargestNumber = -Infinity
    let secondLargestNumber = -Infinity
    for(let i = 0; i< arr4.length; i++){
        if(arr4[i]>firstLargestNumber){
            secondLargestNumber = firstLargestNumber
            firstLargestNumber = arr4[i]
        }else if(arr4[i] > secondLargestNumber && arr4[i] != firstLargestNumber){
            secondLargestNumber = arr4[i]
        }
    }
    return secondLargestNumber
}
let arr4 = [11,11,10,10,10,8,9]
let res4 = secondLargestNumberInArray(arr4)
console.log(res4,'ww')

console.log('------**********************************')



function secondLargest(arr) {

        let firstLargestNum = - Infinity
        let secondLargestNum = - Infinity


    if(arr.length<2){
        return null
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > firstLargestNum){
            secondLargestNum = firstLargestNum
            firstLargestNum = arr[i]
        } else if (arr[i] > secondLargestNum && arr[i] != firstLargestNum){
            secondLargestNum = arr[i]

        }

    }

    return secondLargestNum
}

let arr = [1,2,3,4,5]
let rest = secondLargest(arr)
console.log(rest)