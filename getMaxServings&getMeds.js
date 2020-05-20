/**
 * takes an object with the ingredients/quanties
 * as the key/value pairs
 * and an object with the available ingredients/quantities
 * as the key/value pairs
 * returns the maximum quantity of the dish that can be prepared
 */

function getMaxServings(recipe, available) {
    let division = {};
    let min = Infinity;
    for (var ingredient in recipe) {
        if (!available.hasOwnProperty(ingredient) || available[ingredient] === 0) return 0;
        division[ingredient] = Math.floor(available[ingredient] / recipe[ingredient]);
        if (division[ingredient] < min) min = division[ingredient];
    }
    return min;
}

const recipe = {
    'organic fat': 99,
    'live squid': 1,
    'birds nest': 1,
    'fried flesh': 1,
    spicy: 5,
    'gourmet memes': 4200
};

const available = {
    'organic fat': 990,
    'live squid': 0,
    'birds nest': 10,
    'fried flesh': 10,
    spicy: 50,
    'gourmet memes': 42000,
    sugar: 9001,
    spice: 5,
    'everything nice': 1
};

console.log(getMaxServings(recipe, available)); // should log 0

available['live squid'] = 10;

console.log(getMaxServings(recipe, available)); // should log 10


/**
 * takes in an array of ailment objects with a nested array of treatable symptoms
 * and an array of medication objects
 * return the medication(s) that treat the greatest number of the ailments
 */

function getMedsFunctional(ailments, medications) {
    let freq = {};
    let solution = [];
    let max = 0;
    ailments.map(ailment => {
        const usefulMedications = medications.filter(med => med.treatableSymptoms.includes(ailment)).map(med => med.name);
        usefulMedications.map(med => { freq[med]+= 1 });
    });
    for (let med in freq) {
        if (freq[med] > max) max = freq[med];
    }
    for (let med in freq) {
        if (freq[med] === max) solution.push(med);
    }
    return solution;
}

function getMeds(ailments, medications) {
    let bestMeds = [];
    let maxCount = 1;
    for (let i = 0; i < medications.length; i++){
        let count = 0;
        for (let j = 0; j < ailments.length; j++) {
            if (medications[i].treatableSymptoms.includes(ailments[j])) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            bestMeds = [medications[i].name]
        }
        else if (count === maxCount) bestMeds.push(medications[i].name);
    }
    return bestMeds;
}

const medications = [
{
    name: 'Sulforaphane',
    treatableSymptoms: [
    'dementia',
    `alzheimer's`,
    'cancer',
    'inflammation',
    'neuropathy',
    ],
},
{
    name: 'Longvida Curcumin',
    treatableSymptoms: [
    'pain',
    'inflammation',
    'depression',
    'arthritis',
    'anxiety',
    ],
},
{
    name: 'Hericium erinaceus',
    treatableSymptoms: ['anxiety', 'cognitive decline', 'depression'],
},
{
    name: 'Nicotinamide mononucleotide',
    treatableSymptoms: [
    'ageing',
    'low NAD',
    'obesity',
    'mitochondrial myopathy',
    'diabetes',
    ],
},
{
    name: 'PainAssassinator',
    treatableSymptoms: [
    'pain',
    'inflammation',
    'cramps',
    'headache',
    'toothache',
    'back pain',
    'fever',
    ],
},
];

console.log(getMeds(['pain'], medications));
// should log ['PainAssassinator', 'Longvida Curcumin']

console.log(getMeds(['pain', 'inflammation', 'depression'], medications));
// should log ['Longvida Curcumin']

console.log(getMeds(['existential dread'], medications));
// should log []