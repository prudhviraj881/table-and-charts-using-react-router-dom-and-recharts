import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Graph from './Graph';
import Table from './Table';
import Home from './Home';

function App() {
  const data = [
    {
        NAME:"Prudhvi",
        Telugu:98,
        English:87,
        Hindi:78,
        Maths:99,
        Science:98,
        Social:65
    },
    {
        NAME:"Inthiyaz",
        Telugu:78,
        English:99,
        Hindi:99,
        Maths:97,
        Science:88,
        Social:85
    },
    {
        NAME:"Raju",
        Telugu:88,
        English:97,
        Hindi:79,
        Maths:95,
        Science:68,
        Social:75
    },
    {
        NAME:"Nihaan",
        Telugu:90,
        English:87,
        Hindi:77,
        Maths:93,
        Science:78,
        Social:85
    },
    {
        NAME:"Neha",
        Telugu:95,
        English:80,
        Hindi:89,
        Maths:93,
        Science:98,
        Social:75
    },
    {
        NAME:"Ram",
        Telugu:91,
        English:81,
        Hindi:88,
        Maths:90,
        Science:95,
        Social:85
    }
];
  return (
     <div>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/graph' element={<Graph/>} />
        <Route path='/table' element={<Table TableData = {data}/>} />
      </Routes>
     </div>
  );
}

export default App;
