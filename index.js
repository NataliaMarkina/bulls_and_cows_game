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
    console.log('\nВведите ваше число:');
    return readlineSync.question('-->  ');
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
        console.log('Вам нужно угадать трехзначное число.')
    } else if (sizeNumber === 4) {
        console.log('Вам нужно угадать четырехзначное число.')
    } else if (sizeNumber === 5) {
        console.log('Вам нужно угадать пятизначное число.')
    } else {
        console.log('Вам нужно угадать шестизначное число.')
    }
    
    
    for (let i = 0; i < 10; i++) {
        let number2 = getNumber();

        if (number1 === number2) {
            console.log('Вы выиграли!');
            break;
        }
        
        compareNumbers(number1, number2);
        console.log('\nКоличество совпавших цифр не на своих местах - ' + cows + '\nКоличество совпавших цифр на своих местах - ' + bulls + '\n');
    }
}

play();