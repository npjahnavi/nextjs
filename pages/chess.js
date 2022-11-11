import * as Chess from 'js-chess-engine';
import styles from '../styles/Chess.module.css';
//export default function ChessPage() {
  //return <div>Testing New Page</div>;
//}

export default function ChessPage() {
  // Tell React to put a div down that is
  // controlled by the makeGame function
  return <div ref={makeGame} />;
}

function makeGame(div) {
  div.innerText = 'content now controlled by makeGame';
    // make a new html <table> to render chess
  const board = document.createElement('table');
  board.className = styles.board;
  fillInBoard(board);

  // put that table into the div we control
  div.appendChild(board);
}

// makes a chess board out of an html table
function fillInBoard(board) {
  const COLNAMES = " ABCDEFGH";

  const body = document.createElement('tbody');

  // make each row in the table
  for (let r = 8; r >= 1; r--) {
    const row = document.createElement('tr');

    // number each row
    const rowLabel = document.createElement('td');
    rowLabel.innerText = r.toString();
    row.appendChild(rowLabel);

    // add the board squares
    for (let c = 1; c <= 8; c++) {
      const colName = COLNAMES[c];

      const square = document.createElement('td');
      square.id = colName + r;

      // color alternating squares
      const color = (r + c) % 2 ? styles.white : styles.black;
      square.className = styles.square + ' ' + color;

      row.appendChild(square);
    }

    body.appendChild(row);
  }

  // put column numbers on the bottom
  const footer = document.createElement('tr');
  for (let c = 0; c <= 8; c++) {
    const label = document.createElement('td');
    label.innerText = COLNAMES[c];

    footer.appendChild(label);
  }

  body.appendChild(footer);

  board.appendChild(body);
}
