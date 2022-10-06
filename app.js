console.log(`Welcome to Connect4
Developed by Drewford`)
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
    //key: gameboard
    gameBoard: [ 
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ],
    //key: players
    players: ['NameOfPlayerOne', 'NameOfPlayerTwo'],
    //key: scores
    playerScores: [0, 0],
    //key: winning conditions
    allWinningConditions: [],
    //method function: how to move
    move: function (character, rowNum, colNum) { //position = tableTopGame.move(character, y, x);
        this.gameBoard[rowNum][colNum] = character;
    },
    //method function: clear the game baord
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
// How to turn your gameState JS into HTML
// grab the html location to render HTML
let gameBoardContainer = document.getElementById('board');
// incorporate domContentLoaded event into a trigger
// write a function to later callback  when our DOMContentLoaded event occurs
function renderGameBoard () {
    // create a loop to create multiple rows based the value of the gameboard from gameState
    for (let numOfRowsMade = 0; numOfRowsMade < gameState.gameBoard.length; numOfRowsMade++) {
        // turn each row into a div in html
        let newRowElement = document.createElement('div');
        // add the css class .row to each row
        newRowElement.classList.add('row');

        // create a variable for the current row within the loop
        let currentJSRow = gameState.gameBoard[numOfRowsMade];
        // create a new loop to start making column cells within current row in javascript
        for (let numOfColsMade = 0; numOfColsMade < currentJSRow.length; numOfColsMade++) {
            // turn each col cell into a div in html
            let newColElement = document.createElement('div');
            // add the css class .col to each col cell
            newColElement.classList.add('col');

            // if the current cell from the game board is anything over than 'null'...
            if (currentJSRow[numOfColsMade] != null) {
                // use the content provided by the game baord
                newColElement.textContent = currentJSRow[numOfColsMade];
                // otherwise...
            } else {
                //use the content 'Empty'
                newColElement.textContent = 'Empty';
            }
            //append col cell to row element
            newRowElement.appendChild(newColElement);
        }
        //append row element to board element
        gameBoardContainer.appendChild(newRowElement);
    }
}

//use domContentLoaded event and attach a new event listener to the entire document itself
//When the DOM is loaded up, call back to the function renderGameBoard
//   to add the JS elements to HTML when the webpage is loaded for the first time
document.addEventListener('DOMContentLoaded', renderGameBoard);


//define 2 players
let playerOne = "red";
let playerTwo = "yellow";
//randomize first player
// let currentPlayer = Math.floor(Math.random() *1) ++;
//reference board from gameState
let gameBoard = gameState.gameBoard;

console.log(gameBoard);
