import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Tile from './components/Tile';
import Footer from './components/Footer';
import monuments from './monuments.json';

class App extends Component {

  // State object
  // Track top score, current score, full monuments array, array of monuments that haven't been clicked, and a message
  state = {
    topScore: 0,
    currentScore: 0,
    monuments: monuments,
    unclickedMonuments: monuments,
    message: 'Click an image to start.'
  }

  // Shuffle function
  // Source: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * 1 (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  // Function that handles click logic
  clickTile = id => {
    // Store this.state in a variable for ease of use
    const s = this.state;

    const matchTile = s.unclickedMonuments.find(i => i.id === id);

    if (!matchTile) {
      this.setState({
        topScore: (s.currentScore > s.topScore) ? s.currentScore : s.topScore,
        currentScore: 0,
        monuments: monuments,
        unclickedMonuments: monuments,
        message: 'You already clicked that one! Try again!'
      });
    } else {
      const updatedMonuments = s.unclickedMonuments.filter(i => i.id !== id);

      this.setState({
        currentScore: s.currentScore + 1,
        monuments: monuments,
        unclickedMonuments: updatedMonuments
      });
    }

    this.shuffle(monuments);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Scoreboard
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="container gameboard">
        {
          this.state.monuments.map(monument => (
            <Tile
              name={monument.name}
              image={monument.image}
              clickTile={this.clickTile}
              currentScore={this.state.currentScore}
            />
          ))
        }
      </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
