//select option: 1 or 2 players
//enter player(s): names (player 2 defaults to computer)
//players take turns playing the game
//drop a chip into a column to complete turn
//you cannot drop a chip into a completed column
//winning result(display winner name) and a tied result
//if a player plays against a computer, allow the computer to play to win

// game state - define board, players, player score, winning condition
//      , movement, and how to clear the game
let gameState = 
{
    gameBoard: [ 
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ],
    players: ['NameOfPlayerOne', 'NameOfPlayerTwo'],
    playerScores: [0, 0],
    allWinningConditions: [],
    move: function (character, rowNum, colNum) { //position = tableTopGame.move(character, y, x);
        this.gameBoard[rowNum][colNum] = character;
    },
    clear: function () {
        for (let rowNum = 0; rowNum < this.gameBoard.length; rowNum++) {
            this.gameBoard[rowNum];
            for (let colNum = 0; colNum < this.gameBoard[rowNum].length; colNum++) {
                if (this.gameBoard[rowNum][colNum] != null) {
                    this.gameBoard[rowNum][colNum] = null;
                }
            }
        }
    return gameBoard;
    } 
}

//domContentLoaded to "install" the slots before the game starts
// review first function on notes/week03/day14/day.js


//define 2 players
let playerOne = "red";
let playerTwo = "yellow";
//randomize first player
// let currentPlayer = Math.floor(Math.random() *1) ++;
//reference board from gameState
let gameBoard = gameState.gameBoard;

console.log(gameBoard);
