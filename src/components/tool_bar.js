import React, { Component } from 'react';

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
      zIndex: 1,
      author: this.props.user.displayName,
    };

    this.props.onSubmit(note);
    this.setState({ userInput: '' });
    e.preventDefault();
  };

  render() {
    return (
      <div id="tool-bar">
        <h1>React Notes</h1>
        {!this.props.user
          ? (
            <div className="signed-out-tool-bar">
              <h2>Please sign in with Gmail to create and edit notes</h2>
              <button
                onClick={this.props.onSignIn}
                type="button"
              >
                Sign in
              </button>
            </div>
          ) : (
            <div>
              <div className="signed-in-tool-bar">
                <h2>Welcome,
                  <strong> {this.props.user.displayName} </strong>
                  ✌️
                </h2>
                <button
                  onClick={this.props.onSignOut}
                  type="button"
                >
                  Sign out
                </button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleInputChange}
                  value={this.state.userInput}
                  placeholder="my new note"
                  type="text"
                />
                <button type="submit" title="Add note">
                  <i className="fas fa-clone" />
                </button>
              </form>
              <p>
                Enter a title to start a note,
                then click and drag your note&#39;s title to move it.<br />
              </p>
            </div>
          )
        }
      </div>
    );
  }
}

export default ToolBar;
