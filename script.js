function createBoard() {
    let gameboard = ["0","1","2","3","4","5","6","7","8"];
    
    function displayBoard() {
        console.log(`${gameboard[0]} | ${gameboard[1]} | ${gameboard[2]}`);
        console.log(`${gameboard[3]} | ${gameboard[4]} | ${gameboard[5]}`);
        console.log(`${gameboard[6]} | ${gameboard[7]} | ${gameboard[8]}`);
    }

    function checkIfEmpty(location) {
        if(gameboard[location] == 'x' || gameboard[location == 'o']) {
            return false;
        } else {
            return true;
        }
    }

    function placeMarker(marker, location) {
        gameboard[location] = marker;
    }

    function checkIfWon(marker) {
        if((gameboard[0] == marker && gameboard[1] == marker && gameboard[2] == marker)
            || (gameboard[0] == marker && gameboard[3] == marker && gameboard[6] == marker)
            || (gameboard[0] == marker && gameboard[4] == marker && gameboard[8] == marker)
            || (gameboard[1] == marker && gameboard[4] == marker && gameboard[7] == marker)
            || (gameboard[2] == marker && gameboard[5] == marker && gameboard[8] == marker)
            || (gameboard[2] == marker && gameboard[4] == marker && gameboard[6] == marker)
            || (gameboard[3] == marker && gameboard[4] == marker && gameboard[5] == marker)
            || (gameboard[6] == marker && gameboard[7] == marker && gameboard[8] == marker)
        ){
            return true;
        } else {
            return false;
        }
    }
    return {displayBoard, placeMarker, checkIfWon, checkIfEmpty};
}

const Player = function(marker) {
    this.marker = marker;
}

function game() {
    const gameboard = createBoard();
    const xPlayer = new Player("x");
    const oPlayer = new Player("o");
    let gameOver = false;
    let turn = xPlayer;

    function playRound(player) {
        let isValid = false;
        let location;
        while (isValid == false) {
            location = prompt(`Player ${player.marker}, where will you place your marker?`);
            location = parseInt(location);
            if(location >= 0 && location <= 8) {
                isValid = gameboard.checkIfEmpty(location);
            }
        }
        gameboard.placeMarker(player.marker, location)
        let won = gameboard.checkIfWon(player.marker);
        gameboard.displayBoard();
        if(won) {
            gameOver = true;
            console.log(`${player.marker} wins!`);
        }
    }

    function playGame() {
        gameboard.displayBoard();
        while (gameOver == false) {
            playRound(turn);
            if (turn == xPlayer) {
                turn = oPlayer;
            } else {
                turn = xPlayer;
            }
        }
    }

    return {playGame};
}

const game1 = game();