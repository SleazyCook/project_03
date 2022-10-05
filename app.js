//select option: 1 or 2 players
//enter player(s): names (player 2 defaults to computer)
//player order is randomized
//players take turns playing the game
//drop a chip into a column to complete turn
//you cannot drop a chip into a completed column
//winning result(display winner name) and a tied result
//if a player plays against a computer, allow the computer to play to win

// state
// let state = 
// {
//     totalNumofResources: 0,
//     numOfPassiveResourcesGenerated: 0,
//     gamBoard: 
//     [
//         [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//         [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//         [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
//     ],
//     intervalLoop: lalksjdf
// }

/*
Common Requirements (30%):
    variable declaration (correct use of let and const)
    loop usage (for or while loops)
    control structures (if, else, else if)
    function declaration
    function invocation
    usage of basic data types
    usage of complex data types, like arrays and objects
    DOM Manipulation including:
    templating & rendering
    element queries
    events
    the (update state -> render -> interact with ui) loop
    CSS Practices including:
    proper use of Flex or Grid
    proper use of cascading and specificity
    Developing a good user experience through a clean interface 


Game Requirements (70%): CONNECT FOUR
- As users playing a two player game we want to:
    enter our names and have them displayed
    have our order chosen for us by the game
    take turns by dropping our chip into a column on the grid
    not be able to drop a chip into a totally filled column
    be told when a move causes a player to win, or to draw
    start the game over without having to reset the browser
- As a user playing a single player game I additionally want to:
    see the name 'Computer' displayed as my opponent
    have the Computer player choose columns as if it were a human player
- As a user playing a single player game I would be delighted if:
    the Computer chooses the correct column for a win, when possible
*/