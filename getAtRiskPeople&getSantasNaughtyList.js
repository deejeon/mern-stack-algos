const FriendSchema = {
    firstName: String,
    lastName: String,
    isSocialDistancing: Boolean,
    isInfected: Boolean
};

const PersonSchema = {
    firstName: String,
    lastName: String,
    friends: [FriendSchema],
    isSocialDistancing: Boolean
};

/**
 * takes in a list of person objects
 * with the PersonSchema
 * return a new array of people (full name strings) who are at risk
 * a person is at risk if
 * 1. not practicing social distancing AND
 * 2. has a friend who is infected
 * BONUS: use functional programming
 */

function getAtRiskPeople(persons) {
    let solution = [];
    for (let i=0; i < persons.length; i++) {
        if (persons[i].isSocialDistancing === false) {
            for (let j=0; j < persons[i].friends.length; j++) {
                if (persons[i].friends[j].isInfected) {
                    solution.push(persons[i].firstName + " " + persons[i].lastName);
                    break;
                }
            }
        }
    }
    return solution;
}

const getAtRiskPeopleFunctional = persons => persons.filter(person => person.isSocialDistancing===false)
    .filter(person => person.friends.filter(friend=>friend.isInfected).length > 0)
    .map(person => person.firstName + " " + person.lastName);

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    isInfected: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    isInfected: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    isInfected: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

console.log(getAtRiskPeople(people)); // should log ['Person One', 'Person Three']
console.log(getAtRiskPeopleFunctional(people)); // should log ['Person One', 'Person Three']


/**
 * takes an array of objects
 * and a string
 * returns a new array of full names who have that habit in their habits array
 * BONUS: use built-in methods to create a streamlined solution
 */

function getSantasNaughtyList(people, habit) {
    var newArr=[];
    for (var i=0;i<people.length;i++){
        for( var j=0; j<people[i].habits.length; j++){
            if(people[i].habits[j]==habit){
                newArr.push(people[i].firstName+ " "+people[i].lastName);
                break;
            }
        }
    }
    return newArr;
}

const getSantasNaughtyListFunctional = (people, habit) => people.filter(person => person.habits.includes(habit))
    .map(person => person.firstName + " " + person.lastName);

const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: ["doesn't wash dishes", "falls asleep in lecture", "shows up early"]
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"]
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"]
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"]
    }
];

console.log(getSantasNaughtyList(students, `doesn't wash dishes`));
// should log ['FN1 LN1', 'FN3 LN3']

console.log(getSantasNaughtyList(students, 'shows up late'));
// should log ['FN2 LN2', 'FN3 LN3']

console.log(getSantasNaughtyList(students, 'vapes too much'));
// should log []

console.log(getSantasNaughtyListFunctional(students, `doesn't wash dishes`));
console.log(getSantasNaughtyListFunctional(students, 'shows up late'));
console.log(getSantasNaughtyListFunctional(students, 'vapes too much'));

