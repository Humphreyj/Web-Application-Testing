import React,{ useState, useEffect } from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {

  const [data, updateData] = useState({
    ball: 0,
    foul: 0,
    strike: 0,
    hit: false
  })

  
  return (
    <div className="App">
      <Display
      data={data} />
      <Dashboard
      updateData={updateData}
      data={data}
      />
      
      
    </div>
  );
}

export default App;
