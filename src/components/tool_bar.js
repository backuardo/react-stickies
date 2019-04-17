import React, { Component } from 'react';


class ToolBar extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: '' };
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit = (e) => {
    const id = Math.floor(Math.random() * Math.floor(100));
    const note = {
      title: this.state.userInput,
      content: '',
      x: 0,
      y: 0,
      zIndex: 100,
    };

    this.props.onSubmit(id, note);
    this.setState({ userInput: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div id="tool-bar">
        <h1>react-notes</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.userInput}
            placeholder="enter a title"
          />
          <input type="submit" value="new note" />
        </form>
      </div>
    );
  }
}

export default ToolBar;