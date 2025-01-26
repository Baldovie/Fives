import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './Sevens.css';
import Number from './Number';

function Sevens() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="board-background" className="board-background">
        <Number
          id="numberTwo"
          style="number-tile two"
          numberStyle="number-value white"
          value="2"
        />

        <Number
          id="numberThree"
          style="number-tile three"
          numberStyle="number-value white"
          value="3"
        />
        <Number
          id="numberFive"
          style="number-tile five"
          numberStyle="number-value"
          value="5"
        />
        <Number
          id="numberTen"
          style="number-tile five"
          numberStyle="number-value"
          value="10"
        />

        <div id="board" className="board">
          <div id="cell1" className="cell"></div>
          <div id="cell2" className="cell"></div>
          <div id="cell3" className="cell"></div>
          <div id="cell4" className="cell"></div>
          <div id="cell5" className="cell"></div>
          <div id="cell6" className="cell"></div>
          <div id="cell7" className="cell"></div>
          <div id="cell8" className="cell"></div>
          <div id="cell9" className="cell"></div>
          <div id="cell10" className="cell"></div>
          <div id="cell11" className="cell"></div>
          <div id="cell12" className="cell"></div>
          <div id="cell13" className="cell"></div>
          <div id="cell14" className="cell"></div>
          <div id="cell15" className="cell"></div>
          <div id="cell16" className="cell"></div>
        </div>
      </div>
    </>
  );
}

export default Sevens;
