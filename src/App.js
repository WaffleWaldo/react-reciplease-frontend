import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NavBar />
      </div>
    )
  }
}

export default App