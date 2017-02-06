import React, { Component } from 'react';
var marked = require('marked');

class MarkdownConverter extends Component {

  render() {
    return (
      <div id="result-container">
        {(this.props.currentInput)}
      </div>
    )
  }
}

export default MarkdownConverter;
