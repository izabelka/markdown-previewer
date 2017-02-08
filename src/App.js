import React, { Component } from 'react';
import MarkdownConverter from './MarkdownConverter'
import './App.css';

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
        <textarea type="text" value={this.state.input} onChange={this.getInput}></textarea>
        <MarkdownConverter currentInput={this.state.input}/>
      </div>
    );
  }
}

export default App;
