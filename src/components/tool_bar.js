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
      content: 'Great, now click the pen icon to edit this note!',
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
              'welcome!!',
              'react-notes',
            ]
          }
          typeSpeed={125}
          backSpeed={90}
          startDelay={300}
          backDelay={70}
          showCursor={false}
          fadeOut
          className="tool-bar-typed"
        />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={this.state.userInput}
            placeholder="enter a title"
            type="text"
          />
          <button type="submit">
            <i className="fas fa-clone" />
          </button>
        </form>
      </div>
    );
  }
}

export default ToolBar;
