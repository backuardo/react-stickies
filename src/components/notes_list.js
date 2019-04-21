import React from 'react';
import Note from './note';

/*
this component may be useless now, and it may be in the future as well...
*/

const NotesList = (props) => {
  const { notes } = props;
  if (notes.size === 0) {
    return <div id="notes-list" />;
  }

  return (
    <div id="notes-list">
      {notes.entrySeq().map(([id, note]) => {
        return (
          <Note
            key={id}
            id={id}
            note={note}
            onUpdate={props.onUpdateNote}
            onDelete={props.onDeleteNote}
            user={props.user}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
