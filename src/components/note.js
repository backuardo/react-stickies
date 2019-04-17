import React, { Component } from 'react';


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editedTitle: null,
      editedContent: null,
    };
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  }

  handleStartEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  handleEndEdit = () => {
    const fields = {
      title: this.state.editedTitle || this.props.note.title,
      content: this.state.editedContent || this.props.note.content,
    };
    this.props.onUpdate(this.props.id, fields);

    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      editedTitle: null,
      editedContent: null,
    }));
  }

  handleTitleChange = (e) => {
    this.setState({ editedTitle: e.target.value });
  }

  handleContentChange = (e) => {
    this.setState({ editedContent: e.target.value });
  }

  renderEditButton = () => {
    if (this.state.isEditing) {
      return (
        <i
          onClick={this.handleEndEdit}
          className="fas fa-check-circle"
          role="button"
          tabIndex={0}
        />
      );
    } else {
      return (
        <i
          onClick={this.handleStartEdit}
          className="fas fa-edit"
          role="button"
          tabIndex={0}
        />
      );
    }
  }

  renderTitle = () => {
    if (this.state.isEditing) {
      return (
        <form>
          <input
            value={this.state.editedTitle || this.props.note.title}
            onChange={this.handleTitleChange}
          />
        </form>
      );
    } else {
      return this.props.note.title;
    }
  }

  renderContent = () => {
    if (this.state.isEditing) {
      return (
        <form>
          <textarea
            value={this.state.editedContent || this.props.note.content}
            onChange={this.handleContentChange}
          />
        </form>
      );
    } else {
      return this.props.note.content;
    }
  }

  render() {
    return (
      <div className="note">
        <header>
          {this.renderTitle()}
          <div className="note-menu">
            <i
              onClick={this.handleDelete}
              className="fas fa-trash-alt"
              role="button"
              tabIndex={0}
            />
            {this.renderEditButton()}
          </div>
        </header>
        <div className="note-content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Note;
