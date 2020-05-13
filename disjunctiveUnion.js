/**
 * takes in two arrays
 * returns a NEW array
 * with elements that ONLY APPEAR in one array
 * elements in the input arrays NEED NOT BE SORTED
 * the ordering of your output array NEED NOT BE SORTED
 * BONUS: allow it to take in a 2D array
 */

// function disjunctiveUnion(arr1, arr2) {
//     let newArr = [];
//     let obj1 = {};
//     let obj2 = {};
//     for (let i=0; i < arr1.length; i++) {
//         obj1[arr1[i]] = 1;
//     }
//     for (let j=0; j < arr2.length; j++) {
//         obj2[arr2[j]] = 1;
//         if (!obj1.hasOwnProperty(arr2[j])) newArr.push(arr2[j]);
//     }
//     for (let i=0; i < arr1.length; i++) {
//         if (!obj2.hasOwnProperty(arr1[i])) newArr.push(arr1[i]);
//     }
//     return newArr;
function disjunctiveUnion(arr1, arr2) {
    let newArr = [];
    let obj = {};
    for (let i=0; i < arr1.length; i++) {
        if (obj.hasOwnProperty(arr1[i])) obj[arr1[i]] += 1;
        else obj[arr1[i]] = 1;
    }
    for (let j=0; j < arr2.length; j++) {
        if (obj.hasOwnProperty(arr2[j])) obj[arr2[j]] += 1;
        else obj[arr2[j]] = 1;
    }
    for (key in obj) {
        if (obj[key] === 1) newArr.push(parseInt(key));
    }
    return newArr;
}



console.log(disjunctiveUnion([1, 2], [1, 2]));
// should log [] since 1 and 2 are in both
console.log(disjunctiveUnion([1, 2, 3], [1, 2]));
// should log [3]


// function disjunctiveUnionBonus(arr) {
//     let newArr = [];
//     let objArr = [];
//     for (let i=0; i < arr.length; i++) {
//         let newObj = {};
//         for (let j=0; j < arr[i].length; j++) {
//             newObj[arr[i][j]] = 1;
//         }
//         objArr.push(newObj);
//     }
//     for (let i=0; i < arr.length; i++) {
//         for (let j=0; j < arr[i].length; j++) {
//             let count = 0;
//             for ( let k=0; k < objArr.length; k++) {
//                 if ( objArr[k].hasOwnProperty(arr[i][j]) ) count++;
//             }
//             if ( count === 1 ) newArr.push(arr[i][j]);
//         }
//     }
//     return newArr;
// }

function disjunctiveUnionBonus(arr) {
    let newArr = [];
    let obj = {};
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr[i].length; j++) {
            if (obj.hasOwnProperty(arr[i][j])) obj[arr[i][j]] += 1;
            else obj[arr[i][j]] = 1;
        }
    }
    for (key in obj) {
        if (obj[key] === 1) newArr.push(parseInt(key));
    }
    return newArr;
}

console.log(disjunctiveUnionBonus([
[1, 2, 3],
[4, 5, 6],
[1, 2, 5, 6]
]));
// should log [3, 4] or [4, 3]