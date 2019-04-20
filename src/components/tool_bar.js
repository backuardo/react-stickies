import React, { Component } from 'react';
import Typed from 'react-typed';

class ToolBar extends Component {
  constructor(props) {
    super(props);

    this.state = { userInput: '' };
  }

  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = (e) => {
    const note = {
      title: this.state.userInput,
      content: 'Great, now click the pen icon to edit',
      x: 0,
      y: 0,
      zIndex: 100,
    };

    this.props.onSubmit(note);
    this.setState({ userInput: '' });
    e.preventDefault();
  };

  render() {
    return (
      <div id="tool-bar">
        <Typed
          strings={
            [
              'reactnotes.surge.sh',
              'react notes',
            ]
          }
          typeSpeed={90}
          backSpeed={100}
          backDelay={70}
          showCursor={false}
          smartBackspace
          className="tool-bar-typed"
        />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.userInput}
            placeholder="my new note"
            type="text"
          />
          <button type="submit">
            <i className="fas fa-clone" />
          </button>
        </form>
        <p>
          Enter a title to start a note, then click and drag your note&#39;s title to move it.<br />
        </p>
      </div>
    );
  }
}

export default ToolBar;
