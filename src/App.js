import React from 'react';
import './App.css';
import DeviceChart from './Components/Charts/DeviceChart/index';
import ActiveDevicesChart from './Components/Charts/ActiveDevicesChart/index';
import SessionCount from './Components/Charts/SessionCount/index';
import { deviceData } from './Components/Charts/DeviceData/index';

const totalSessions = deviceData.length;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Tracker Dashboard</h1>
        <div className="chart-container">
          <h2>New Devices Chart</h2>
          <DeviceChart data={deviceData} />
          <h2>Active Devices Chart</h2>
          <ActiveDevicesChart data={deviceData} />
          <h2>Session Count</h2>
          <SessionCount totalSessions={totalSessions} />
        </div>
      </header>
    </div>
  );
}

export default App;




