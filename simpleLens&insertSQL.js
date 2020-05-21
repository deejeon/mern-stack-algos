/**
 * takes in a nested (potentially) object
 * and an array of keys
 * returns either a corresponding value (if it exists)
 * or null if it doesn't
 */

function simpleLens(obj, keysPath) {
    let solution = obj;
    for (let i = 0; i < keysPath.length; i++) {
        if (!solution.hasOwnProperty(keysPath[i])) {
            return null;
        }
        solution = solution[keysPath[i]];
    }
    return solution;
}

console.log(simpleLens({ hello: 'world' }, ['hello']));
// should log 'world'

console.log(simpleLens({ hello: 'world' }, ['hello', 'world']));
// should log null

const nested = {
  address: {
    street: '1234 First Street',
    city: 'Burbank'
  }
}

console.log(simpleLens(nested, ['address', 'street']));
// should log '1234 First Street'

console.log(simpleLens(nested, ['address', 'country', 'code']));
// should log null


/**
 * takes in an object
 * returns an array of 2-item arrays
 * referencing each key/value pair
 */

const input1 = { firstName: 'Foo', lastName: 'Bar', age: 13 };
input1.__proto__.keyOnProto = 'val from proto';

function entries(obj) {
    let solution = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) solution.push([key, obj[key]]);
    }
    return solution;
}

console.log(entries(input1));
// should log [['firstName', 'Foo'], ['lastName', 'Bar'], ['age', 13]]

console.log(entries({ prop1: 'val 1', prop2: 'val 2' }));
// should log [['prop1', 'val 1'], ['prop2', 'val 2']]


/**
 * BONUS
 * takes in a string (the table name)
 * and an object (the key/value pairs to insert)
 * returns a SQL string for the insert
 */

function insertSQL(table, obj) {
    let solution = 'insert into ' + table + '(';
    let keys = "";
    let values = "";
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys += key + ", ";
            values += "'" + obj[key] + "', ";
        }
    }
    keys = keys.slice(0, keys.length-2);
    values = values.slice(0, values.length-2);
    return solution + keys + ") values(" + values + ")";
}

console.log(insertSQL('users', { firstName: 'Bob', lastName: 'Smith' }));
// should log 'insert into users(firstName, lastName) values("Bob", "Smith")'