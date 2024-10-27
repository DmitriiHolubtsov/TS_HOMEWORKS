"use strict";
function reverseArray(array) {
    return array.reverse();
}
const arr = [1, 2, 3];
const reversedArr = reverseArray(arr);
console.log(reversedArr);
console.log(reversedArr === arr);
