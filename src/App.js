import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Tile from './components/Tile';
import Footer from './components/Footer';

class App extends Component {
  render() {

    // Keep game logic here

    return (
      <div className="App">
        <Header />
        <Gameboard />
        <Footer />
      </div>
    );
  }
}

export default App;
