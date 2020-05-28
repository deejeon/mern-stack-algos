/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 * Ignoring case, can the characters from string 2 build string 1?
 */

function canBuildString1FromString2(str1, str2) {
    const newStr1 = str1.toLowerCase();
    const newStr2 = str2.toLowerCase();
    let freq1 = {};
    let freq2 = {};
    for (let i = 0; i < newStr1.length; i++) {
        if (!freq1.hasOwnProperty(newStr1[i])) freq1[newStr1[i]] = 1;
        else freq1[newStr1[i]] += 1;
    }
    for (let i = 0; i < newStr2.length; i++) {
        if (!freq2.hasOwnProperty(newStr2[i])) freq2[newStr2[i]] = 1;
        else freq2[newStr2[i]] += 1;
    }
    for (var key in freq1) {
        if (freq1[key] > freq2[key]) return false; 
        if (!freq2.hasOwnProperty(key)) return false;
    }
    return true;
}

'HELLO'.toLowerCase(); // returns 'hello'

console.log(canBuildString1FromString2('Hello World', 'lloeh wordl')); // should log true
console.log(canBuildString1FromString2('Hey', 'hello')); // should log false
console.log(canBuildString1FromString2('hello', 'helo')); // should log false
console.log(canBuildString1FromString2('hello', 'lllheo')); // should log true


/**
 * @param {number} hours
 * @param {number} minutes
 */

function timeInWords(hours, minutes) {
    let numbersToWords = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "forteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        21: "twenty-one",
        22: "twenty-two",
        23: "twenty-three",
        24: "twenty-four",
        25: "twenty-five",
        26: "twenty-six",
        27: "twenty-seven",
        28: "twenty-eight",
        29: "twenty-nine",
    }
    let specialMinutes = {
        0: "o'clock",
        15: "quarter",
        30: "half past",
    };
    let solutionStr;
    if (minutes === 0) {
        solutionStr = numbersToWords[hours.toString()] + " " + specialMinutes["0"];
    }
    if (minutes === 30) {
        solutionStr = specialMinutes["30"] + " " + numbersToWords[hours.toString()];
    }
    if (minutes < 30) {
        if (specialMinutes.hasOwnProperty(minutes)){
            solutionStr = specialMinutes[minutes.toString()] + " past " + numbersToWords[hours.toString()];
        }
        else {
            solutionStr = numbersToWords[minutes.toString()] + " minutes past " + numbersToWords[hours.toString()];
        }
    }
    if (minutes > 30 && minutes < 60) {
        let newMinutes = 60 - minutes;
        if (newMinutes === 15) {
            solutionStr = specialMinutes[newMinutes.toString()] + " to " + numbersToWords[((hours+1)%24).toString()];
        }
        else {
            solutionStr = numbersToWords[newMinutes.toString()] + " minutes to " + numbersToWords[((hours+1)%24).toString()];
        }
    }
    return solutionStr;
}

console.log(timeInWords(5, 15)); // should log 'quarter past five'
console.log(timeInWords(5, 30)); // should log 'half past five'
console.log(timeInWords(5, 40)); // should log 'twenty minutes to six'
console.log(timeInWords(5, 45)); // should log 'quarter to six'
console.log(timeInWords(12, 0)); // should log `twelve o'clock`
console.log(timeInWords(23, 28)); // should log 'twenty eight minutes past twenty three'