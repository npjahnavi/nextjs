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
}
