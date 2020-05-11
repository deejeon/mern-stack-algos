/**
 * takes in two SORTED arrays
 * returns a new SORTED array
 * with the largest occurrence of each distinct number
 * BONUS: deduplicate the output
 */

function intersectSortedArrays(arr1, arr2) {
    let newArr = [];
    let freqTable = {};
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        count++;
        if (arr1[i] === arr1[i+1]) {
            continue;
        }
        freqTable[arr1[i]] = count;
        count = 0;
    }
    for (let j = 0; j < arr2.length; j++) {
        count++;
        if (arr2[j] === arr2[j+1]) {
            continue;
        }
        if (freqTable.hasOwnProperty(arr2[j]) && freqTable[arr2[j]] < count) {
            freqTable[arr2[j]] = count;
        }
        else if (!freqTable.hasOwnProperty(arr2[j])) {
            freqTable[arr2[j]] = count;
        }
        count = 0;
    }
    for (let key in freqTable) {
        let number = parseInt(key);
        for (let k = 0; k < freqTable[key]; k++) {
            newArr.push(number);
        }
    }
    return newArr;
}

console.log(intersectSortedArrays([1, 2, 2, 2, 2, 7], [2, 3, 3, 3, 5]));
// should log [1, 2, 2, 3, 3]


function intersectSortedArraysDedupe(arr1, arr2) {
    let newArr = [];
    let freqTable = {};
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        count++;
        if (arr1[i] === arr1[i+1]) {
            continue;
        }
        freqTable[arr1[i]] = count;
        count = 0;
    }
    for (let j = 0; j < arr2.length; j++) {
        count++;
        if (arr2[j] === arr2[j+1]) {
            continue;
        }
        if (freqTable.hasOwnProperty(arr2[j]) && freqTable[arr2[j]] < count) {
            freqTable[arr2[j]] = count;
        }
        else if (!freqTable.hasOwnProperty(arr2[j])) {
            freqTable[arr2[j]] = count;
        }
        count = 0;
    }
    for (let key in freqTable) {
        let number = parseInt(key);
        newArr.push(number);
    }
    return newArr;
}

console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
// should log [1, 2, 3]

// niv's

// function intersectSortedArrays(arr1, arr2) {
//     var newArr = [];
//     tracker1 = 0;
//     tracker2 = 0; s
//     while(tracker1<arr1.length && tracker2<arr2.length){
//         if (arr1[tracker1]<arr2[tracker2]){
//             newArr.push(arr1[tracker1]);
//             tracker1++;
//         }
//         else if (arr1[tracker1]>arr2[tracker2]){
//             newArr.push(arr2[tracker2]);
//             tracker2++;
//         }
//         else {
//             newArr.push(arr1[tracker1]);
//             tracker1++;
//             tracker2++;
//         }
//     }
//     while(tracker1<arr1.length){
//       newArr.push(arr1[tracker1]);
//       tracker1++;
//     }
//     while(tracker2<arr2.length){
//       newArr.push(arr2[tracker2]);
//       tracker2++;
//     }
//     return newArr;
//   }

//   console.log(intersectSortedArrays([1, 2, 2], [2, 3, 3]));
//   // should log [1, 2, 2, 3, 3]


//   function intersectSortedArraysDedupe(arr1, arr2) {
//     var newArr = [];
//     tracker1 = 0;
//     tracker2 = 0;
//     while(tracker1<arr1.length && tracker2<arr2.length){
//         if (arr1[tracker1]<arr2[tracker2]){
//             if(newArr[newArr.length-1]!=arr1[tracker1]){
//                 newArr.push(arr1[tracker1]);
//             }
//             tracker1++;
//         }
//         else if (arr1[tracker1]>arr2[tracker2]){
//             if(newArr[newArr.length-1]!=arr2[tracker2]){
//                 newArr.push(arr2[tracker2]);
//             }
//             tracker2++;
//         }
//         else if (arr1[tracker1]==arr2[tracker2]){
//             if(newArr[newArr.length-1]!=arr1[tracker1]){
//                 newArr.push(arr1[tracker1]);
//             }
//             tracker1++;
//             tracker2++;
//         }
//     }
//     while(tracker1<arr1.length){
//         if(newArr[newArr.length-1]!=arr1[tracker1]){
//             newArr.push(arr1[tracker1]);
//         }
//         tracker1++;
//     }
//     while(tracker2<arr2.length){
//         if(newArr[newArr.length-1]!=arr2[tracker2]){
//             newArr.push(arr2[tracker2]);
//         }
//         tracker2++;
//     }
//     return newArr;
//   }

//   console.log(intersectSortedArraysDedupe([1, 2, 2], [2, 3, 3]));
//   // should log [1, 2, 3]