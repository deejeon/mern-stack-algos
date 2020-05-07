/**
 * takes in two sorted arrays
 * returns a new sorted array with the combined elements
 */

function combineSortedArrays(arr1, arr2) {
    let newArray = [];
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
        for ( ; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                newArray.push(arr1[i]);
                if (i === arr1.length - 1) {
                    newArray = newArray.concat(arr2.slice(j));
                }
                break;
            }
            else {
                newArray.push(arr2[j]);
                if (j === arr2.length - 1) {
                    newArray = newArray.concat(arr1.slice(i));
                }
            }
        }
    }
    return newArray;
}

// fix this
// function combineSortedArrays(arr1, arr2) {
//     let newArray = [];
//     let index1 = 0;
//     let index2 = 0;

//     while (index1 + index2 <= arr1.length + arr2.length) {
//         if (index1 === arr1.length) {
//             newArray.concat(arr2.slice(index2));
//             break;
//         }
//         if (index2 === arr2.length) {
//             newArray.concat(arr1.slice(index1));
//             break;
//         }
//         if (arr1[index1] < arr2[index2]) {
//             newArray.push(arr1[index1]);
//             index1++;
//         }
//         else {
//             newArray.push(arr2[index2]);
//             index2++;
//         }
//     }
//     return newArray;
// }

console.log(combineSortedArrays([2, 4, 6], [1, 3, 5])); // should log [1, 2, 3, 4, 5, 6]
console.log(combineSortedArrays([1], [3])); // should log [1, 3]
console.log(combineSortedArrays([1], [])); // should log [1]


/**
 * takes in an UNSORTED array
 * divide and conquer approach
 * returns a sorted array
 * function is recursive
 * it uses combineSortedArrays internally
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const sliceIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, sliceIndex);
    const secondHalf = arr.slice(sliceIndex);
    return combineSortedArrays(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]