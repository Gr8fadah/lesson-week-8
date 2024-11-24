// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Test Data 1
const yinkaMass1 = 78; // kg
const yinkaHeight1 = 1.69; // m
const moyoMass1 = 92; // kg
const moyoHeight1 = 1.95; // m

// Calculate BMIs for Test Data 1
const yinkaBMI1 = calculateBMI(yinkaMass1, yinkaHeight1);
const moyoBMI1 = calculateBMI(moyoMass1, moyoHeight1);

// Output results for Test Data 1
console.log("Test Data 1:");
console.log(`Yinka's BMI: ${yinkaBMI1.toFixed(2)}`);
console.log(`Moyo's BMI: ${moyoBMI1.toFixed(2)}`);

// Determine who has a higher BMI
if (yinkaBMI1 > moyoBMI1) {
    console.log(`Yinka's BMI (${yinkaBMI1.toFixed(2)}) is higher than Moyo's (${moyoBMI1.toFixed(2)})!`);
} else if (yinkaBMI1 < moyoBMI1) {
    console.log(`Moyo's BMI (${moyoBMI1.toFixed(2)}) is higher than Yinka's (${yinkaBMI1.toFixed(2)})!`);
} else {
    console.log(`Yinka and Moyo have the same BMI (${yinkaBMI1.toFixed(2)})!`);
}

// Test Data 2
const yinkaMass2 = 95; // kg
const yinkaHeight2 = 1.88; // m
const moyoMass2 = 85; // kg
const moyoHeight2 = 1.76; // m

// Calculate BMIs for Test Data 2
const yinkaBMI2 = calculateBMI(yinkaMass2, yinkaHeight2);
const moyoBMI2 = calculateBMI(moyoMass2, moyoHeight2);

// Output results for Test Data 2
console.log("\nTest Data 2:");
console.log(`Yinka's BMI: ${yinkaBMI2.toFixed(2)}`);
console.log(`Moyo's BMI: ${moyoBMI2.toFixed(2)}`);

// Determine who has a higher BMI
if (yinkaBMI2 > moyoBMI2) {
    console.log(`Yinka's BMI (${yinkaBMI2.toFixed(2)}) is higher than Moyo's (${moyoBMI2.toFixed(2)})!`);
} else if (yinkaBMI2 < moyoBMI2) {
    console.log(`Moyo's BMI (${moyoBMI2.toFixed(2)}) is higher than Yinka's (${yinkaBMI2.toFixed(2)})!`);
} else {
    console.log(`Yinka and Moyo have the same BMI (${yinkaBMI2.toFixed(2)})!`);
}

// Function to calculate average score
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

// Function to determine the winner based on averages
function determineWinner(hideeAvg, silasAvg) {
    if (hideeAvg >= 100 && silasAvg >= 100) {
        if (hideeAvg > silasAvg) {
            return `Hidee wins with an average score of ${hideeAvg.toFixed(2)}!`;
        } else if (hideeAvg < silasAvg) {
            return `Silas wins with an average score of ${silasAvg.toFixed(2)}!`;
        } else {
            return `It's a draw with both teams having an average score of ${hideeAvg.toFixed(2)}!`;
        }
    } else {
        return `No winner: Both teams must have an average score of at least 100 to compete.`;
    }
}

// Test Data 1 for scores
const hideeScores1 = [96, 108, 89];
const silasScores1 = [88, 91, 110];

// Calculate averages for Test Data 1
const hideeAverage1 = calculateAverage(hideeScores1);
const silasAverage1 = calculateAverage(silasScores1);

// Output results for Test Data 1
console.log("\nTest Data 1 (Scores):");
console.log(`Hidee's average score: ${hideeAverage1.toFixed(2)}`);
console.log(`Silas's average score: ${silasAverage1.toFixed(2)}`);
console.log(determineWinner(hideeAverage1, silasAverage1));

// Test Data 2 for scores
const hideeScores2 = [97, 112, 101];
const silasScores2 = [109, 95, 123];

// Calculate averages for Test Data 2
const hideeAverage2 = calculateAverage(hideeScores2);
const silasAverage2 = calculateAverage(silasScores2);

// Output results for Test Data 2
console.log("\nTest Data 2 (Scores):");
console.log(`Hidee's average score: ${hideeAverage2.toFixed(2)}`);
console.log(`Silas's average score: ${silasAverage2.toFixed(2)}`);
console.log(determineWinner(hideeAverage2, silasAverage2));
