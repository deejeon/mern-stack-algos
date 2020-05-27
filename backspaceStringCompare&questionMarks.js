/**
 * @param {string} str1
 * @param {string} str2
 * consisting of lowercase characters and backspaces (#)
 * @return {boolean} whether the two strings are equivalent after taking the backspaces into consideration
 * BONUS: solve in O(n)
 */

function backspaceStringCompare(str1, str2) {
    var arr1 = [];
    var arr2 = [];
    for (var i=0; i<str1.length; i++){
        if (str1[i]==="#"){
            arr1.pop();
        }
        else{
            arr1.push(str1[i]);
        }
    }
    for (var i=0; i<str2.length; i++){
        if (str2[i]==="#"){
            arr2.pop();
        }
        else{
            arr2.push(str2[i]);
        }
    }
    let newStr1 = "";
    for (var i=0; i<arr1.length; i++) {
        newStr1 += arr1[i];
    }
    let newStr2 = "";
    for (var i=0; i<arr2.length; i++) {
        newStr2 += arr2[i];
    }
    return newStr1===newStr2;
}

console.log(backspaceStringCompare('ab#c', 'ad#c'));
// should log true - they both become 'ac'

console.log(backspaceStringCompare('ab##', 'c#d#'));
// should log true - they both become ''

console.log(backspaceStringCompare('a##c', '#a#c'));
// should log true - they both become 'c'


/**
 * @param {string} str
 * @return {boolean}
 * Are there 2 digits separated by exactly 3 question marks that sum to 10?
 */

function questionMarks(str) {
    var counter = 0;
    var counting = false;
    var num1;
    for (var i = 0;i<str.length; i++){
        if(!isNaN(parseInt(str[i]))&& counting==false){
            counting=true;
            num1=parseInt(str[i])
        }
        else if(str[i]=="?"&&counting==true){
            counter++;
        }
        else if(!isNaN(parseInt(str[i]))&& counting==true){
            if(counter==3 && (num1+parseInt(str[i])==10)){
                return true
            }
            else{
                counter = 0;
                num1 = parseInt(str[i])
            }
        }
    }
    return false;
}

parseInt('s') // returns NaN
parseInt('5') // returns 5
isNaN(NaN) // returns true
isNaN(parseInt('9')) // returns false

console.log(questionMarks('aa6?9')); // should log false
console.log(questionMarks('acc?7??sss?3rr1??????5')); // should log true
console.log(questionMarks('?3?d?dad?7??????3')); // should log true
console.log(questionMarks('7??????3')); // should log false