import React, { Component } from 'react';
import './App.css';
var marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.getInput = this.getInput.bind(this);
  }
  getInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.input} onChange={this.getInput}/>
        <div>{marked(this.state.input)}</div>
      </div>
    );
  }
}

export default App;
