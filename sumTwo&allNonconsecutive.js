/**
 * takes in an array of integers
 * returns an array of TWO INDICES
 * the indices should point to the two elements
 * that add up to the given sum
 * assume that there is only one solution
 * numbers can only be used once
 */

function sumTwo(arr, sum) {
    let solution = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                solution.push(i);
                solution.push(j);
                return solution;
            }
        }
    }
}

// function sumTwo(arr, sum) {
//     let solution = [];
//     let i = 0;
//     let j = 1;
//     while (i < arr.length && j < arr.length) {
//         if (arr[i] + arr[j] === sum) {
//             solution.push(i);
//             solution.push(j);
//             return solution;
//         }
//         if (j === arr.length - 1) {
//             i++;
//             j = i+1;
//         }
//         else j++;
//     }
// }

console.log(sumTwo([2, 7, 11, 15], 9)); // should log [0, 1]


/**
 * takes in an array of integers
 * returns an ARRAY of OBJECTS
 * with each one having two key/value pairs: the index and the number
 * the array should have ONLY non-consecutive values
 * the first element of the array is NEVER considered non-consecutive
 */

function allNonConsecutive(arr) {
// your code here
    let newarr = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] !== arr[i]+1){
            newarr.push({
                i : i+1,
                n : arr[i+1]
            })
        }
    }
    return newarr;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
// should log [{i: 4, n: 6}, {i: 7, n: 10}] 6 and 10 are the only non-consecutives

console.log(allNonConsecutive([2, 3, 4, 7, 8, 12]));
// should log [{i: 3, n: 7}, {i: 5, n: 12}] 7 and 12 are the only non-consecutives