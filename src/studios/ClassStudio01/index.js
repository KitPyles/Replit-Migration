//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor (name,mass,scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let den = this.scores.length;
        let num = 0;
        for (let i = 0; i < den; i++) {
            num += this.scores[i];
        }
        let avg =  num / den;
        avg = (Math.round(avg * 10))/10
        return avg;
    }
    status() {
        let avg = this.average()
        let status = '';
        if(avg < 70) {
            status = 'Rejected';
        } else if (avg <= 79) {
            status = 'Probationary';
        } else if (avg <= 89) {
            status = 'Reserve';
        } else {
            status = 'Accepted';
        }
        return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`;
    }
}

let bubba = new CrewCandidate('Bubba Bear',135,[88,85,90]);
let merry = new CrewCandidate('Merry Maltese',1.5,[93,88,97]);
let glad = new CrewCandidate('Glad Gator',225,[75,78,62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubba.addScore(83);
console.log(bubba.scores);
console.log(merry.average());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let i = 0;
while (glad.average() < 79) {
    glad.addScore(100);
    i++;
}
console.log(`${glad.name} required an additional ${i} tests with 100% to reach Reserve status.`);
i = 0;
while (glad.average() < 89) {
    glad.addScore(100);
    i++;
}
console.log(`${glad.name} required an additional ${i} tests with 100% to reach Accepted status.`);