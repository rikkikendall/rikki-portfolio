import React from 'react';
import logo from './logo.svg';
import './App.css';
import CV from 'react-cv'
import { CVData } from './data';


function App() {
  return (
    <div>
      <CV {...CVData} />
    </div>
  );
}

export default App;
