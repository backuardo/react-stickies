import React from 'react';
import Note from './note';


const NotesList = (props) => {
  const { notes } = props;
  if (notes.size === 0) {
    return <div />;
  }

  return (
    <div id="notes-list">
      {notes.entrySeq().map(([id, note]) => {
        return (
          <Note key={id} id={id} note={note} onUpdate={props.onUpdateNote} onDelete={props.onDeleteNote} />
        );
      })}
    </div>
  );
};

export default NotesList;
