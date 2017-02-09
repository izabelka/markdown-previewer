import React, { Component } from 'react';
var marked = require('marked');

class MarkdownConverter extends Component {
  createMarkup() {
    var rawMarkup = marked(this.props.currentInput, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return <div id='converted-text' dangerouslySetInnerHTML={this.createMarkup()} />
  }
}

export default MarkdownConverter;
