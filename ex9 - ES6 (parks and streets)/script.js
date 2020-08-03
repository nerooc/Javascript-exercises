///////////////////////////////// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

//UNIT CLASS
class Unit {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

//PARK CLASS
class Park extends Unit {
    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
        this.treeDensity = numberOfTrees / area;
        this.age = 2020 - buildYear;
    }

    logTreeDensity() {
        console.log(`${this.name} has a tree density of ${ (this.treeDensity).toFixed(2)} per square kilometer.`);
    }
}

//STREET CLASS
class Street extends Unit {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}

//PARKS ARRAY
const allParks = [
    new Park('Green Park', 1993, 100, 3),
    new Park('Yellow Park', 1997, 76, 4.5),
    new Park('Brown Park', 1990, 1004, 23)
];

//STREETS ARRAY
const allStreets = [
    new Street('Long Street', 2001, 5),
    new Street('Back Street', 2011, 3, 2),
    new Street('Big Street', 1993, 12, 4),
    new Street('Our Street', 1990, 16, 5)
];

//PARKS REPORT
(function (parks) {

    console.log('=========== PARKS REPORT ============');

    let summedAge = 0,
        averageAge;

    parks.forEach(cur => {
        summedAge += cur.age;
        cur.logTreeDensity();
        if (cur.numberOfTrees > 1000) {
            console.log(`${cur.name} has over 1000 trees! ${cur.numberOfTrees} to be exact.`)
        }
    })

    averageAge = summedAge / parks.length;
    console.log(`Our ${parks.length} parks have average age of ${(averageAge).toFixed(2)}`);

})(allParks);

//STREETS REPORT
(function (streets) {
    console.log('=========== STREETS REPORT ============');

    let totalLength = 0; 
    streets.forEach(cur => {
        totalLength += cur.length;
        cur.classifyStreet();
    })  

    console.log(`Our ${streets.length} streets have summed length of ${totalLength} kilometers.`);


})(allStreets);
