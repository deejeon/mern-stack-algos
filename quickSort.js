/**
 * takes in an UNSORTED array
 * returns the SAME array sorted
 * working in place, use yesterday's arrayPartition internally
 * and call the function recursively as needed
 */

function arrayPartition(arr, startIdx = 0, endIdx = arr.length - 1) {
    let partitionIndex = startIdx + Math.floor(Math.random() * (endIdx - startIdx));
    while (startIdx != endIdx) {
        if (arr[startIdx] < arr[partitionIndex]) {
            startIdx++;
            continue;
        }
        if (arr[endIdx] > arr[partitionIndex]) {
            endIdx--;
            continue;
        }
        let temp = arr[endIdx];
        arr[endIdx] = arr[startIdx];
        arr[startIdx] = temp;
        if (startIdx === partitionIndex) partitionIndex = endIdx;
        else if (endIdx === partitionIndex) partitionIndex = startIdx;
    }
    return partitionIndex;
}

function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
    if (endIdx - startIdx < 1) return arr;
    const partitionIndex = arrayPartition(arr, startIdx, endIdx);
    quickSort(arr, startIdx, partitionIndex-1);
    quickSort(arr, partitionIndex+1, endIdx);
    return arr;
}

console.log(quickSort([1, 5, 2, 8, 3, 4]));
console.log(quickSort([7,2,1,3]));
// should log [1, 2, 3, 4, 5, 8]