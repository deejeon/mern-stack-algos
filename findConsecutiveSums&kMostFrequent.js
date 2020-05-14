/**
 * takes in an array of integers
 * and a given sum
 * returns an array of ALL the consecutive integers
 * that make the sum
 * BONUS: what if there are zeros in the input array?
 */

function findConsecutiveSums(arr, sum) {
    let newArr = [];
    let currentSum = 0;

    for (let i=0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum === sum) { 
            newArr.push(arr.slice(i, i+1)) 
        }

        for (let j=i+1; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum === sum) { 
                newArr.push(arr.slice(i,j+1)) 
            }
            else if (currentSum > sum) {
                currentSum = 0;
                break;
            }
        }
    }
    return newArr;
}

console.log(findConsecutiveSums([2, 5, 0, 0, 3, 6, 7, 0, 0, 23, 12], 16));
// should log [
//   [2, 5, 3, 6],
//   [3, 6, 7]
// ]


/**
 * takes in an array of integers
 * and an integer
 * returns an array of the "k" most frequent values
 * the input array WON'T NECESSARILY BE IN ORDER
 * the output array NEED NOT BE ORDERED
 * you can assume there's always a valid answer
 */

function kMostFrequent(arr, k) {
    let newArr = [];
    let freqTable = {};

    for (let i=0; i < arr.length; i++) {
        if (freqTable.hasOwnProperty(arr[i])) freqTable[arr[i]] += 1;
        else freqTable[arr[i]] = 1;
    }

    while (newArr.length < k) {
        let maxCount = 0;
        let maxValue = 0;

        for (key in freqTable) {
            if (freqTable[key] > maxCount) {
                maxCount = freqTable[key];
                maxValue = parseInt(key);
            }
        }
        newArr.push(maxValue);
        delete freqTable[maxValue];
    }
    return newArr;
}

console.log(kMostFrequent([1, 1, 1, 2, 2, 3], 2));
// should log [1, 2]

console.log(kMostFrequent([0, 0, 0, 2, 2, 3], 1));
// should log [0]

console.log(kMostFrequent([1, 3, 2, 2, 1, 3], 3));
// should log [1, 2, 3] in any order