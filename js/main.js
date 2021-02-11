/*----- 定数宣言 -----*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*----- アプリの状態 -----*/

let board;
let turn = 'X';
let win;
/*----- キャッシュされた要素の参照 -----*/

const squares = Array.from(document.querySelectorAll('#board div'));
console.log(squares)
/*----- イベントリスナー -----*/

document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init)

/*----- 関数宣言 -----*/
function getWinner() {
  let winner = null;

  winningCombos.forEach(function(combo, index) {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]]; 
  });
  return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
  let idx = squares.findIndex(function(square) {
    return square === event.target;
  });
  board[idx] = turn;
  turn = turn === 'X' ? 'O' : 'X';
  win = getWinner();
  render();
};


function init () {
  board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
  board.forEach(function(mark, index) {
    // 同じ位置のマスのテキスト内容を盤面のマークに設定。
    squares[index].textContent = mark;
  });
  messages.textContent = win === 'T' ? `同点だよ！` : win ? `${win}の勝利！` : `${turn}の番です。` ;
};



init();