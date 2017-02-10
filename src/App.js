import React, { Component } from 'react';
import MarkdownConverter from './MarkdownConverter'
import './styles/App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.getInput = this.getInput.bind(this);
  }

  componentDidMount() {
    $.get('https://raw.githubusercontent.com/izabelka/markdown-previewer/master/src/markdownExample.md', function(data) {
      this.setState({
        input: data
      });
    }.bind(this));
  }

  getInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div id="container">
        <textarea type="text" value={this.state.input} onChange={this.getInput}></textarea>
        <MarkdownConverter currentInput={this.state.input}/>
      </div>
    );
  }
}

export default App;
