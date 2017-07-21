import React, { Component } from 'react';
import './styles/App.css';
import EconomyMainContainer from './containers/economy_main_container';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <EconomyMainContainer />
      </div>
    );
  }
}

export default App;
