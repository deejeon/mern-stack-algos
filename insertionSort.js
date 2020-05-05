/**
 * takes in an array
 * returns THE SAME array sorted
 * iterate through each element starting with the second
 * work backwards to "insert" the element
 * in the correct position
 * elements get duplicated forward to make way for the
 * inserted element
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertionIndex = i;
        if (arr[i] < arr[i-1]){
            for (let j = i-1; j >= 0; j--) {
                if (arr[i] < arr[j]) {
                    insertionIndex = j;
                }
            }
        }
        if (insertionIndex != i) {
            let temp = arr[i];
            for (let k = i; k > insertionIndex; k--) {
                arr[k] = arr[k-1];
            }
            arr[insertionIndex] = temp;
        }
    }
    return arr;
}
console.log(insertionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

// niv's solution
// function insertionSort(arr) {
//     for (var i = 1; i<arr.length; i++){
//         var insert = arr[i];
//         var compare = i-1;
//         while (compare>=0 && insert<arr[compare]){
//             arr[compare+1] = arr[compare];
//             compare--;
//         }
//         arr[compare+1] = insert;
//     }
//     return arr;
// }