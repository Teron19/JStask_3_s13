var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var result = document.getElementById("result");

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById() {

    switch (getPlayerResult) {
        case 1:
            "камень";
            break;
        case 2:
            "ножницы";
            break;
        case 3:
            "бумага";
            breack;
    }
}

function determineWinner(getPlayerResult) {
    (player1 === 1 && player2 === 2 || player1 === 2 && player2 === 3 || player1 === 1 && player2 === 3) ?
    player1 || player2 || player2:
        player2 || player1 || player1;
    return (player1 || player2);
}

function printResult(determineWinner) {
    switch (determineWinner.result) {
        case player1:
            result.innerHTML += 'выиграл первый игрок';
            break;
        case player2:
            result.innerHTML = +"выиграл первый игрок";
    }
}


function runGame() {

    player1.innerHTML = getNameById();
    player2.innerHTML = getNameById();
}



btn.addEventListener("click", getNameById);