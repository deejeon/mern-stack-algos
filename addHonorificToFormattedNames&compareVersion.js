/**
 * @param {string} honorific
 * @param {string[]} fullNames
 * @return {string[]} names with honorific applied
 */

function addHonorificToFormattedNames(honorific, fullNames) {
    let solutions = [];
    for (let i = 0; i < fullNames.length; i++) {
        let lastName = "";
        let firstName = "";
        let comma = false;
        for (let j = 0; j < fullNames[i].length; j++) {
            if (fullNames[i][j] === " " && comma) {
                continue;
            }
            if (fullNames[i][j] === ",") {
                comma = true;
                continue;
            }
            if (comma) {
                firstName += fullNames[i][j];
            }
            else {
                lastName += fullNames[i][j];
            }
        }
        solutions.push(honorific + " " + firstName + " " + lastName);
    }
    return solutions;
}

console.log(addHonorificToFormattedNames('Mr.', ['Smith, Bob', 'Jones, Mike']));
// should log ['Mr. Bob Smith', 'Mr. Mike Jones']

console.log(addHonorificToFormattedNames('Mrs.', ['HorseDoctor, Beth']));
// should log ['Mrs. Beth HorseDoctor']


/**
 * @param {string} v1
 * @param {string} v2
 * @return {number} 1 if v1 > v2; 0 if they're equal; -1 if v1 < v2
 */

function compareVersions(v1, v2) {
    let shorterString = v1;
    let longerString = v1;
    let sameLength = false;
    if (v1.length === v2.length) sameLength = true;
    else if (v1.length < v2.length) longerString = v2;
    else shorterString = v2;
    for (var i = 0; i < shorterString.length; i++) {
        if (!isNaN(shorterString[i])) {
            if (parseInt(v1[i]) < parseInt(v2[i])) return -1;
            if (parseInt(v1[i]) > parseInt(v2[i])) return 1;
        }
    }
    if (!sameLength) {
        for (i; i < longerString.length; i++) {
            if (!isNaN(longerString[i]) && parseInt(longerString[i]) > 0) {
                if (longerString === v1) return 1;
                if (longerString === v2) return -1;
            }
        } 
    }
    return 0;
}

// function compareVersions(v1, v2) {
//     let shorterString = v1;
//     let longerString = v1;
//     let sameLength = false;
//     if (v1.length === v2.length) sameLength = true;
//     else if (v1.length < v2.length) longerString = v2;
//     else shorterString = v2;
//     while (shorterString.length > 0) {
//         var dot1 = v1.indexOf('.');
//         var dot2 = v2.indexOf('.');
//         let num1 = parseInt(v1.slice(0,dot1));
//         let num2 = parseInt(v2.slice(0,dot2));
//         if (num1 < num2) return -1;
//         if (num1 > num2) return 1;
//         v1 = v1.slice(dot1+1);
//         v2 = v2.slice(dot2+1);
//     }
//     if (!sameLength) {

//     }
// }

console.log(compareVersions('0.1', '1.0')); // should log -1
console.log(compareVersions('1.0.1', '1.0')); // should log 1
console.log(compareVersions('2.0', '2.0.0.0')); // should log 0