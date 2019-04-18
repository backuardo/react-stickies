import React, { useState } from 'react';
import { Map } from 'immutable';
import ToolBar from './tool_bar';
import NotesList from './notes_list';


function App(props) {
  const [notes, setNotes] = useState(Map()); // eslint-disable-line new-cap

  const deleteNote = (id) => {
    const newNotes = notes.delete(id);
    setNotes(newNotes);
  };

  const addNote = (id, note) => {
    const newNotes = notes.set(id, note);
    setNotes(newNotes);
  };

  const updateNote = (id, fields) => {
    const newNotes = notes.update(id, (n) => {
      return Object.assign({}, n, fields);
    });
    setNotes(newNotes);
  };

  return (
    <div id="app">
      <ToolBar onSubmit={addNote} />
      <NotesList
        notes={notes}
        onUpdateNote={updateNote}
        onDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
