import React, { Component } from 'react';
import Draggable from 'react-draggable';


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  }

  toggleIsEditing = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  }

  handleEdit = (fields) => {
    this.props.onUpdate(this.props.id, fields);
  }

  handleTitleChange = (e) => {
    this.handleEdit({ title: e.target.value });
  }

  handleContentChange = (e) => {
    this.handleEdit({ content: e.target.value });
  }

  handleDrag = (e, ui) => {
    const { x, y } = ui;
    this.handleEdit({ x, y });
  }

  renderEditButton = () => {
    if (this.state.isEditing) {
      return (
        <i
          onClick={this.toggleIsEditing}
          className="fas fa-check-circle"
          role="button"
          tabIndex={0}
        />
      );
    } else {
      return (
        <i
          onClick={this.toggleIsEditing}
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
            value={this.props.note.title}
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
            value={this.props.note.content}
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
      <Draggable
        handle=".fa-arrows-alt"
        defaultPosition={{ x: this.props.note.x, y: this.props.note.y }}
        position={{ x: this.props.note.x, y: this.props.note.y }}
        onDrag={this.handleDrag}
        onStop={this.handleDragStop}
      >
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
              <i className="fas fa-arrows-alt" role="button" tabIndex={0} />
            </div>
          </header>
          <div className="note-content">
            {this.renderContent()}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
