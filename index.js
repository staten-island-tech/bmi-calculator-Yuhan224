const username = prompt('What is your name?');
const height = prompt("What is your height in cm");
const weight = prompt("What is your weight in KG?");

function FindBMI(height, weight) {
    return (weight / height ** 2) * 10000
}
BMI = FindBMI(height, weight);
console.log(username + 'your bmi is ' + BMI); 

if (BMI <= 18.5) {
    console.log('You are underweight');
}
else if (BMI <= 24.9) {
    console.log('You are healthy');
}
else if (BMI >= 24.9) {
    console.log('You are unhealthy');
}