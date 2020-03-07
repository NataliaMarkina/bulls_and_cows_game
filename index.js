const readlineSync = require('readline-sync');
let sizeNumber;
let bulls = 0;
let cows = 0;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomNumber() {
    let randomNumber = '';
    let n;
    sizeNumber = getRandom(3,6);
    for (let i = 0; i < sizeNumber; i++) {
        do {
            n = getRandom(0,9);
        } while (randomNumber.indexOf(n) >= 0);
        randomNumber += n;
    }
    return randomNumber;
}

function getNumber() {
    return readlineSync.question('\nEnter your number: \n');
}

function compareNumbers(number1, number2) {
    bulls = 0;
    cows = 0;
    
    for (let i = 0; i < sizeNumber; i++) {
        if (number1[i] === number2[i]) {
            bulls++;
        } else if (number2.indexOf(number1[i]) >= 0) {
            cows++;
        }
    }
}

function play() {
    let number1 = generateRandomNumber();
    
    if (sizeNumber === 3) {
        console.log('You need to guess a three-digit number.')
    } else if (sizeNumber === 4) {
        console.log('You need to guess the four-digit number.')
    } else if (sizeNumber === 5) {
        console.log('You need to guess the five-digit number.')
    } else {
        console.log('You need to guess the six-digit number.')
    }
    
    
    for (let i = 0; i < 10; i++) {
        let number2 = getNumber();

        if (number1 === number2) {
            console.log('You win!');
            break;
        }
        
        compareNumbers(number1, number2);
        console.log('\nThe number of matched digits is out of places - ' + cows + '\nThe number of matched digits in their places - ' + bulls + '\n');
    }
}

play();