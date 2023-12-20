
import React from 'react';
import Linegraph from '../Statistics/Linegraph';
import Bargraph from '../Statistics/Bargraph';
import Piechart from '../Statistics/Piechart';
import './Statispage.css'; 
function Statispage() {
  return (
    <div className="statistics-container">
      <div className="piechart">
        <Piechart />
      </div>
      <div className="graphs-container">
        <div className="linegraph">
          <Linegraph />
        </div>
        <div className="bargraph">
          <Bargraph />
        </div>
      </div>
    </div>
  );
}

export default Statispage;
