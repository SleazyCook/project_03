console.log(`Welcome to Connect4
Developed by Drewford`)
// Game State (Object)
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
    playerOneDisplayName: 'one',
    playerTwoDisplayName: 'two',
    playerOne: 'red',
    playerTwo: 'yellow',
    currentPlayer: Math.random() > 0.5 ? 'red' : 'yellow', //ternary operator (like if, else)
    playerScores: [0, 0],
    //key: winning conditions
    allWinningConditions: [],
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
    return gameState.gameBoard;
    } 
}
//domContentLoaded to "install" the slots before the game starts
// review first function on notes/week03/day14/day.js
// How to turn your gameState JS into HTML
// grab the html location to render HTML
let gameBoardContainer = document.getElementById('board');
// write a function to later callback  when our DOMContentLoaded event occurs
function renderGameBoard () {
    gameBoardContainer.innerHTML = '';
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
            // add an identifying class to each column
            newColElement.classList.add('col-' + numOfColsMade);
            // if the current cell from the game board is anything over than 'null'...
            if (currentJSRow[numOfColsMade] == 'red') {
                // use the content provided by the game baord
                // newColElement.textContent = currentJSRow[numOfColsMade];
                newColElement.classList.add('red')
                // otherwise...
            } else if (currentJSRow[numOfColsMade] == 'yellow') {
                // newColElement.textContent = currentJSRow[numOfColsMade];
                newColElement.classList.add('yellow')
                } else {
                //use the content 'Empty'
                newColElement.textContent = '';
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
renderGameBoard()

// -------------------player-one-input-name-----------------------------------------
let playerOneNameInputElement = document.getElementById('player-one-name-input');
let playerOneSubmitButton = document.getElementById('player-one-submit-bttn');
let displayPlayerOneNameElement = document.getElementById('player-one-display-name');
let playerOneInputContainer = document.getElementById('player-one-input-container');

// write a callback function that will 
//      1) change gameState to reflect text of this element
//      2) change textContent of the element we are displaying
function displayNameForPlayerOneFunc () {
    let finalNameSubmission = playerOneNameInputElement.value;
    gameState.playerOneDisplayName = finalNameSubmission;

    displayPlayerOneNameElement.textContent = `${gameState.playerOneDisplayName}`;
    // remove visibility of input container upon submission
    playerOneInputContainer.classList.add('hidden');
    // console.log(playerOneInputContainer.classList);
}   
// attach event listener to submit button that will render our submitted name
playerOneSubmitButton.addEventListener('click', displayNameForPlayerOneFunc);

// --------------------player-two-input-name------------------------
let playerTwoNameInputElement = document.getElementById('player-two-name-input');
let playerTwoSubmitButton = document.getElementById('player-two-submit-bttn');
let displayPlayerTwoNameElement = document.getElementById('player-two-display-name');
let playerTwoInputContainer = document.getElementById('player-two-input-container');

function displayNameForPlayerTwoFunc () {
    if (playerTwoNameInputElement.value == '') {
        gameState.playerTwoDisplayName = 'Computer';
        displayPlayerTwoNameElement.textContent = `Computer`;
    } else {
        let finalNameSubmission = playerTwoNameInputElement.value;
        gameState.playerTwoDisplayName = finalNameSubmission;
        displayPlayerTwoNameElement.textContent = `${gameState.playerTwoDisplayName}`;
    }
    playerTwoInputContainer.classList.add('hidden');
    // console.log(playerTwoInputContainer.classList);
}
// attach event listener to submit button that will render our submitted name
playerTwoSubmitButton.addEventListener('click', displayNameForPlayerTwoFunc);

// TURN ORDER--------------------------------------------------------
// take turns by dropping our chip into a column on the grid 
function turnFunc (event) {
    //asdfasf
    if (event.target.classList[0] == 'col') {
        let colIndexStr = event.target.classList[1];
        let colIndex = Number(colIndexStr[4]); //use Number() to convert string to number, use index to remove "col-"
        console.log(colIndex);
        //loop through the row index
        for (let i = gameState.gameBoard.length - 1; i >= 0; i--) {
            if (gameState.gameBoard[i][colIndex] == null) {
                gameState.gameBoard[i][colIndex] = gameState.currentPlayer;
                gameState.currentPlayer = gameState.currentPlayer == 'yellow' ? 'red' : 'yellow';
                break;
            }
        }
        // if the current index == null,
        //  
        renderGameBoard();
    } 
}
gameBoardContainer.addEventListener('click', turnFunc);

let resetGameButton = document.getElementById('reset-bttn')
resetGameButton.addEventListener('click', gameState.clear)
// continue requirements, write out pseudo 
// worry about ai player last

//how to determine a winning condition
//check horizontally
// function checkForWinner {
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col< cols; col++) {
//             if (board[row][col] != '') {
//                 if (gameStae.gameBoard[row][col] == gameState.gameBoard[row][col+1] && gameState.gameBoard[row][col+1] && gameState.gameBoard[row][col+2] && gameState.gameBoard[row][col+2] == gameState.gameBoard[row][col+3]) {
//                     setWinner(row, col);
//                     return;
//                 }
//             }
//         }
//     }
// }