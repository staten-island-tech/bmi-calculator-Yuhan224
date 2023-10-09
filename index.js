const username = prompt('What is your name?');
const height = prompt("What is your height");
const weight = prompt("How fat are you?");

function findBMI(height, weight) {
    return (weight / height ** 2) * 703
};

BMI = findBMI(height, weight);
console.log(username + 'your bmi is ' + BMI); 
