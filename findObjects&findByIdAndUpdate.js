/**
 * takes in a "searched for" object
 * and an array of objects
 * returns an array of objects that matches
 * the keys/values of the given searched for object
 */

function findObjects(searchFor, items) {
    let solution = [];
    let checker = false;
    for (let i = 0; i < items.length; i++) {
        for (key in searchFor) {
            if (items[i][key] === searchFor[key]) {
                checker = true;
            }
            else {
                checker = false;
                break;
            }
        }
        if (checker === true) {
            solution.push(items[i]);
        }
        checker = false;
    }
    return solution;
}

const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

console.log(findObjects(searchFor, items));
// should log [
//   { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
//   { firstName: 'Bob', lastName: 'White', age: 31 }   
// ]


/**
 * takes in an integer (ID),
 * an "update" object,
 * and an array of objects to search
 * return the updated object or null if not found
 */

function findByIdAndUpdate(idx, updateObj, collection) {
    let currentObj = {};
    let found = false;
    for (let i=0; i < collection.length; i++) {
        if (collection[i].id === idx) {
            currentObj = collection[i];
            found = true;
            break;
        }
    }
    if(!found){
        return null;
    }
    for(key in updateObj){
        currentObj[key] = updateObj[key];
    }
    return currentObj;
}

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));

// should log {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students));

// should log {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false,
//   randomKey: "randomValue"
// }

console.log(findByIdAndUpdate(5, {}, students));
// should log null