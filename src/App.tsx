import React from 'react';
import logo from './logo.svg';
import './App.css';
import LinePlot from './components/lLinePlot';
import PiePlot from './components/PiePlot';
import BarPlot from './components/BarPlot';
import RadarPlot from './components/RadarPlot';
import BubblePlot from './components/BubblePlot';
import MaterialUi from './components/MaterialUi';

function App() {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot/>
      <BarPlot />
      <RadarPlot />
      <BubblePlot /> */}
      <MaterialUi />
    </div>
  );
}

export default App;
