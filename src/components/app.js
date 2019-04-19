import React, { Component } from 'react';
import { Map } from 'immutable';
import * as db from '../services/datastore';
import ToolBar from './tool_bar';
import NotesList from './notes_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
    };
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Map(notes) });
    });
  }

  deleteNote = (id) => {
    db.deleteNote(id);
  };

  addNote = (note) => {
    db.addNote(note);
  };

  updateNote = (id, fields) => {
    db.updateNote(id, fields);
  };

  render() {
    return (
      <div id="app">
        <ToolBar onSubmit={this.addNote} />
        {this.state.notes && (
          <NotesList
            notes={this.state.notes}
            onUpdateNote={this.updateNote}
            onDeleteNote={this.deleteNote}
          />
        )}
      </div>
    );
  }
}

export default App;
