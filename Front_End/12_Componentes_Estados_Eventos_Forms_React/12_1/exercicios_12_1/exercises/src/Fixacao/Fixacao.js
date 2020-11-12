import React from 'react';
import './App.css';

// para rodar o codigo transferir para o arquivo app.js



class App extends React.Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      numberOfClicks:0,
      numberOfClicks2:0,
      numberOfClicks3:0,
    }
    console.log('oiii')
  }

  changeColor = (event) => {
    event.style.backgroundColor = 'green'
  }
  
  handleClick = (event) => {
    this.setState((previous, _props) => ({
      numberOfClicks: previous.numberOfClicks + 1
    }))
    if ((this.state.numberOfClicks + 1) % 2 === 0) {
      this.changeColor(event.target)
    }
  }
  
  handleClick2 = (event) => {
    this.setState((previous, _props) => ({
      numberOfClicks2: previous.numberOfClicks2 + 1
    }))
    if ((this.state.numberOfClicks2 + 1) % 2 === 0) {
      this.changeColor(event.target)
    }
  }
  
  handleClick3 = (event) => {
    this.setState((previous, _props) => ({
      numberOfClicks3: previous.numberOfClicks3 + 1
    }))
    if ((this.state.numberOfClicks3 + 1) % 2 === 0) {
      this.changeColor(event.target)
    }
  }

  render() {
    console.log(this)
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão {this.state.numberOfClicks}</button>
        <button onClick={this.handleClick2}>Meu botão2 {this.state.numberOfClicks2}</button>
        <button onClick={this.handleClick3}>Meu botão3{this.state.numberOfClicks3}</button>
      </div>
    )
  }
}

export default App;