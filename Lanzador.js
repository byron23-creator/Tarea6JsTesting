const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserName() {
    rl.question("Ingrese su nombre: ", (userName) => {
        console.log(userName ? `¡Bienvenido, ${userName}!` : "¡Bienvenido!");

        rollDice(); 
    });
}

function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    let sum = dice1 + dice2;

    let resultMessage;

    if (sum === 2) {
        resultMessage = "¡Doble uno! Mala suerte.";
    } else if (sum === 7 || sum === 11) {
        resultMessage = "¡Suerte! Has ganado esta ronda.";
    } else if (dice1 === dice2) {
        resultMessage = "¡Doble! Tienes un turno extra.";
    } else {
        resultMessage = "Nada especial, ¡intenta de nuevo!";
    }

    console.log(`Tiraste: ${dice1} y ${dice2}.`);
    console.log(`Suma: ${sum}. ${resultMessage}`);

    rl.close();
}

getUserName();