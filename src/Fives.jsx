import { useState } from 'react';
import './Fives.css';
import Number from './Number';

function Fives() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="board" className="board">
        <div id="cell1" className="cell one"></div>
        <div id="cell2" className="cell two"></div>
        <div id="cell3" className="cell three"></div>
        <div id="cell4" className="cell four"></div>
        <div id="cell5" className="cell five"></div>
        <div id="cell6" className="cell six"></div>
        <div id="cell7" className="cell seven"></div>
        <div id="cell8" className="cell eight"></div>
        <div id="cell9" className="cell nine"></div>
        <div id="cell10" className="cell ten"></div>
        <div id="cell11" className="cell eleven"></div>
        <div id="cell12" className="cell twelve"></div>
        <div id="cell13" className="cell thirteen"></div>
        <div id="cell14" className="cell fourteen"></div>
        <div id="cell15" className="cell fifteen"></div>
        <div id="cell16" className="cell sixteen"></div>
        {/* <Number id="numberTwo" style="number-tile two" value="2" />
        <Number id="numberThree" style="number-tile three" value="3" />
        <Number id="numberFive" style="number-tile five" value="5" />
        <Number id="numberTen" style="number-tile five" value="10" /> */}
      </div>
    </>
  );
}

export default Fives;
