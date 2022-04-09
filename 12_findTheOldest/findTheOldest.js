const findTheOldest = function(people) {
    ages = people.map(person => 
        getAge(person.yearOfBirth, person.yearOfDeath)
    );
    return people[ages.indexOf(Math.max(...ages))];
};

function getAge(birth, death) {
    if (death == undefined) {
        return new Date().getFullYear() - birth;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
