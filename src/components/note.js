import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: false };
  }

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  toggleIsEditing = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleEdit = (fields) => {
    this.props.onUpdate(this.props.id, fields);
  };

  handleTitleChange = (e) => {
    this.handleEdit({ title: e.target.value });
  };

  handleContentChange = (e) => {
    this.handleEdit({ content: e.target.value });
  };

  handleDrag = (e, ui) => {
    const { x, y } = ui;
    this.handleEdit({ x, y });
  };

  renderTitle = () => {
    const { title } = this.props.note;
    if (this.state.isEditing) {
      return (
        <form>
          <input
            value={title}
            onChange={this.handleTitleChange}
          />
        </form>
      );
    } else {
      return title;
    }
  };

  renderContent = () => {
    const { content } = this.props.note;
    if (this.state.isEditing) {
      return (
        <form>
          <textarea
            value={content}
            onChange={this.handleContentChange}
          />
        </form>
      );
    } else {
      return (
        <div
          className="content"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={
            { __html: marked(this.props.note.content || '') }
          }
        />
      );
    }
  };

  render() {
    const { x, y } = this.props.note;
    return (
      <Draggable
        handle=".fa-arrows-alt"
        defaultPosition={{ x, y }}
        position={{ x, y }}
        onDrag={this.handleDrag}
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
              <i
                onClick={this.toggleIsEditing}
                className={this.state.isEditing
                  ? 'fas fa-check-circle'
                  : 'fas fa-edit'}
                role="button"
                tabIndex={0}
              />
              <i className="fas fa-arrows-alt" role="button" tabIndex={0} />
            </div>
          </header>
          <div className="note-content-container">
            {this.renderContent()}
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Note;
