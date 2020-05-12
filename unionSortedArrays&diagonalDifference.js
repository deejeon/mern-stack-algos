/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the elements shared by both
 * BONUS: dedupe
 */

function unionSortedArrays(arr1, arr2) {
    let newArr = [];
    let tracker1 = 0;
    let tracker2 = 0;
    while (tracker1 < arr1.length && tracker2 < arr2.length) {
        if (arr1[tracker1] === arr2[tracker2]) {
            newArr.push(arr1[tracker1]);
            tracker1++;
            tracker2++
        }
        else if (arr1[tracker1] < arr2[tracker2]) {
            tracker1++;
        }
        else {
            tracker2++;
        }
    }
    return newArr;
}

console.log(unionSortedArrays([1, 2, 2, 3], [2, 2, 4]));
// should log [2, 2]


function unionSortedArraysDedupe(arr1, arr2) {
    let newArr = [];
    let tracker1 = 0;
    let tracker2 = 0;
    while (tracker1 < arr1.length && tracker2 < arr2.length) {
        if (arr1[tracker1] === arr1[tracker1 - 1]) {
            tracker1++;
            continue;
        }
        if (arr2[tracker2] === arr2[tracker2 - 1]) {
            tracker2++;
            continue;
        }
        if (arr1[tracker1] === arr2[tracker2]) {
            newArr.push(arr1[tracker1]);
            tracker1++;
            tracker2++
        }
        else if (arr1[tracker1] < arr2[tracker2]) {
            tracker1++;
        }
        else {
            tracker2++;
        }
    }
    return newArr;
}

console.log(unionSortedArraysDedupe([1, 2, 2, 3], [2, 2, 4]));
// should log [2]


/**
 * takes in a 2-dimensional array with equal rows and columns
 * returns an integer
 * the absolute difference between the sum of the two diagonals
 */

function diagonalDifference(twoDArray) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < twoDArray.length; i++) {
        sum1 += twoDArray[i][i];
        sum2 += twoDArray[i][twoDArray.length - 1 - i];
    }
    return Math.abs(sum1 - sum2);
}

Math.abs(5 - 10); // returns 5

console.log(diagonalDifference([
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]));
// should log 0: (1 + 5 + 9) - (3 + 5 + 7)