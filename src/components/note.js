import React, { useState } from 'react';
import Draggable from 'react-draggable';


function Note(props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = (fields) => {
    props.onUpdate(props.id, fields);
  };

  const handleTitleChange = (e) => {
    handleEdit({ title: e.target.value });
  };

  const handleContentChange = (e) => {
    handleEdit({ content: e.target.value });
  };

  const handleDrag = (e, ui) => {
    const { x, y } = ui;
    handleEdit({ x, y });
  };

  const renderTitle = () => {
    const { title } = props.note;
    if (isEditing) {
      return (
        <form>
          <input
            value={title}
            onChange={handleTitleChange}
          />
        </form>
      );
    } else {
      return title;
    }
  };

  const renderContent = () => {
    const { content } = props.note;
    if (isEditing) {
      return (
        <form>
          <textarea
            value={content}
            onChange={handleContentChange}
          />
        </form>
      );
    } else {
      return content;
    }
  };

  const { x, y } = props.note;
  return (
    <Draggable
      handle=".fa-arrows-alt"
      defaultPosition={{ x, y }}
      position={{ x, y }}
      onDrag={handleDrag}
    >
      <div className="note">
        <header>
          {renderTitle()}
          <div className="note-menu">
            <i
              onClick={handleDelete}
              className="fas fa-trash-alt"
              role="button"
              tabIndex={0}
            />
            <i
              onClick={toggleIsEditing}
              className={isEditing ? 'fas fa-check-circle' : 'fas fa-edit'}
              role="button"
              tabIndex={0}
            />
            <i className="fas fa-arrows-alt" role="button" tabIndex={0} />
          </div>
        </header>
        <div className="note-content">
          {renderContent()}
        </div>
      </div>
    </Draggable>
  );
}

export default Note;
