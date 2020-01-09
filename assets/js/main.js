console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';
/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'))
//const messages = document.querySelector('h2');

/*----- event listeners -----*/

//document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/
//function handleTurn(event) {
//        let idx = squares.findIndex(function (square) {
//            return square === event.target;
//        });
//        board[idx] = turn;
//        console.log(board);

// ternaries
//turn = turn === 'X' ? 'O' : 'X'
// In an if statement it would look like this (below code perform the same as the code on the line above)
// if (turn === 'X') {
// turn = 'O'    
// } else {
// turn = 'X'
// };

//    };    

function render() {

        board.forEach(function(mark, index) {
            squares[index].textContent = mark;

        });

        //messages.textContent = `It's ${turn}'s turn!`;
    };

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    render();
};

init();
