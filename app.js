console.log(`Welcome to Connect4
Developed by Drewford`)
// GAME STATE-------------------------------------------------------
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
    playerOneDisplayName: 'Player One',
    playerTwoDisplayName: 'Player Two',
    playerOne: 'red',
    playerTwo: 'yellow',
    playerOneScore: 0,
    playerTwoScore: 0,
    currentPlayer: Math.random() > 0.5 ? 'red' : 'yellow', //ternary operator (like if, else)
    playerScores: [0, 0],
    //key: winning conditions
    checkForWinner: function () {
        let currClass = gameState.currentPlayer
        //horizontally loop through the rows
        // HORIZONTAL CHECK
        for (let r = 0; r < gameState.gameBoard.length; r++) {
             // if player one, then currClass = red (and then) if player two, then currClass = yellow
            // loop through the cells in each row
            let counter = 0;
            // horizontal check
            for (let c = 0; c < gameState.gameBoard[r].length; c++) {
                if (gameState.gameBoard[r][c] == currClass) {
                    counter++;
                } else {
                    counter = 0;
                }
                if (counter == 4) {
                    gameState.setWinner(currClass);
                    return true; //return will end the function here. 
                }
                }
        }
        // VERTICAL CHECK
        // same function as horizontal, but switch the nested loops so column is checked first
        for (let c = 0; c < gameState.gameBoard.length; c++) {
                let counter = 0;
                for (let r = 0; r < gameState.gameBoard.length; r++) {
                    if (gameState.gameBoard[r][c] == currClass) {
                        counter++;
                    } else {
                        counter = 0;
                    }
                    if (counter == 4) {
                        gameState.setWinner(currClass);
                        return true;
                    }
                }
            }
        // DIAGONAL DOWN RIGHT CHECK
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 4; c++){ 
                if (gameState.gameBoard [r][c] == currClass){
                    if (gameState.gameBoard[r][c] == gameState.gameBoard[r + 1][c + 1] 
                        && gameState.gameBoard [r + 1][c+ 1] == gameState.gameBoard[r + 2][c + 2] 
                        && gameState.gameBoard[r + 2][c + 2] == gameState.gameBoard[r + 3][c + 3]){
                            gameState.setWinner(currClass);
                            return true; 
                    }
                }
            }
        }
        // DIAGONAL DOWN LEFT CHECK
        for (let r = 0; r < 3; r++) {
            for (let c = gameState.gameBoard[0].length - 1; c >= 3; c--){ 
                if (gameState.gameBoard[r][c] == currClass){
                    if (gameState.gameBoard[r][c] == gameState.gameBoard[r + 1][c - 1] 
                        && gameState.gameBoard [r + 1][c - 1] == gameState.gameBoard[r + 2][c - 2] 
                        && gameState.gameBoard [r + 2][c - 2] == gameState.gameBoard[r + 3][c - 3]){
                        gameState.setWinner(currClass);
                        return true;
                    }
                }
            }
        }
    },
    setWinner: function(winningClass) {
        //create a variable for winner and link it to the html element with id: winner
        let winner = document.getElementById('winner');
        //if there a win from player one (four red chips in a row)
        if (winningClass == 'red') {
            //display the text (playerOneDisplayName) Wins!
            winner.classList.remove('hidden');
            winner.innerText = `${gameState.playerOneDisplayName} Wins!`;
            gameState.playerOneScore++;
            let playerOneScoreDisplay = document.getElementById('player-one-score');
            playerOneScoreDisplay.innerText = gameState.playerOneScore
            //otherwise
            } else {
                //display the text (playerTwoDisplayName) Wins!
                winner.classList.remove('hidden');
                winner.innerText = `${gameState.playerTwoDisplayName} Wins!`;
                gameState.playerTwoScore++;
                let playerTwoScoreDisplay = document.getElementById('player-two-score');
                playerTwoScoreDisplay.innerText = gameState.playerTwoScore;
            }
    },
    clear: function () {
        for (let rowNum = 0; rowNum < gameState.gameBoard.length; rowNum++) {
            gameState.gameBoard[rowNum];
            for (let colNum = 0; colNum < gameState.gameBoard[rowNum].length; colNum++) {
                if (gameState.gameBoard[rowNum][colNum] != null) {
                    gameState.gameBoard[rowNum][colNum] = null;
                }
            }
        }
    renderGameBoard();
        winner.classList.add('hidden');
        displayCurrentPlayer.classList.remove('hidden');
        return gameState.gameBoard;
    } 
}

//DISPLAY CURRENT PLAYER------------------------------------------
function whoIsPlaying() {
    let displayCurrentPlayer = document.getElementById('who-goes-first');
    if (gameState.currentPlayer == 'red') {
        displayCurrentPlayer.innerText = `${gameState.playerOneDisplayName}'s turn`
    } else {
        displayCurrentPlayer.innerText = `${gameState.playerTwoDisplayName}'s turn`
    }
}

// RENDER THE BOARD------------------------------------------------
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
        whoIsPlaying();
    } 
}
//use domContentLoaded event and attach a new event listener to the entire document itself
//When the DOM is loaded up, call back to the function renderGameBoard
//   to add the JS elements to HTML when the webpage is loaded for the first time
document.addEventListener('DOMContentLoaded', renderGameBoard);
renderGameBoard()

// PLAYER ONE INPUT NAME------------------------------------------
let playerOneNameInputElement = document.getElementById('player-one-name-input');
let playerOneSubmitButton = document.getElementById('player-one-submit-bttn');
let displayPlayerOneNameElement = document.getElementById('player-one-display-name');
let playerOneInputContainer = document.getElementById('player-one-input-container');

// write a callback function that will 
//      1) change gameState to reflect text of this element
//      2) change textContent of the element we are displaying
function displayNameForPlayerOneFunc () {
    if (playerOneNameInputElement.value == '') {
        gameState.playerOneDisplayName = 'Player';
        displayPlayerOneNameElement.textContent = 'Player';
    } else {
        let finalNameSubmission = playerOneNameInputElement.value;
        gameState.playerOneDisplayName = finalNameSubmission;
        displayPlayerOneNameElement.textContent = `${gameState.playerOneDisplayName}`;
    }
    // remove visibility of input container upon submission
    playerOneInputContainer.classList.add('hidden');
    // console.log(playerOneInputContainer.classList);
}   
// attach event listener to submit button that will render our submitted name
playerOneSubmitButton.addEventListener('click', displayNameForPlayerOneFunc);

// PLAYER TWO INPUT NAME---------------------------------------------
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
    // gameState.firstPlayer();
    if (event.target.classList[0] == 'col') {
        let colIndexStr = event.target.classList[1];
        let colIndex = Number(colIndexStr[4]); //use Number() to convert string to number, use index to remove "col-"
        //loop through the row index
        for (let i = gameState.gameBoard.length - 1; i >= 0; i--) {
            if (gameState.gameBoard[i][colIndex] == null) {
                gameState.gameBoard[i][colIndex] = gameState.currentPlayer;
                gameState.checkForWinner(); 
                gameState.currentPlayer = gameState.currentPlayer == 'yellow' ? 'red' : 'yellow';
                // gameState.currentPlayer = gameState.currentPlayer == 'yellow' && playerTwoDisplayName == "Computer" ? turnFunc() : 'player2';
                break;
            }
        }
        // if the current index == null,
        //  
        renderGameBoard();
    } 
}
gameBoardContainer.addEventListener('click', turnFunc);

// RESET BOARD--------------------------------------------------
let resetGameButton = document.getElementById('reset-bttn')
resetGameButton.addEventListener('click', gameState.clear)