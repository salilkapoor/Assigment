import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from '../../components/Header/Header'
import Body from '../Body/Body';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Body />
    </div>
  );
}

export default App;
