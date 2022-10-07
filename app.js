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
    playerNames: ['NameOfPlayerOne', 'NameOfPlayerTwo'],
    playerOne: 'red',
    playerTwo: 'yellow',
    currentPlayer: Math.random() > 0.5 ? 'red' : 'yellow', //turnary operator (like if, else)
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
    return gameState.gameBoard;
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




/*
player one : .red
player two: .yellow
null = .null 
 */

/*
To Do:
Enter our names and have them displayed
(two input tags- create input tag through html, toggle to hidden upon completion through js (add a class/display: none) if null is entered, playername is Computer
use lecture notes ^^ 

2- random starting order (completed in gameState)

3 - take turns by dropping our chip into a column on the grid */
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
// continue requirements, write out pseudo 
// worry about ai player