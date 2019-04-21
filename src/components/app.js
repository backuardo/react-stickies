import React, { Component } from 'react';
import { Map } from 'immutable';
import * as db from '../services/datastore';
import * as auth from '../services/auth';
import ToolBar from './tool_bar';
import NotesList from './notes_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
      user: null,
    };
  }

  componentDidMount() {
    auth.persistSignIn((user) => {
      this.setState({ user });
    });

    db.fetchNotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Map(notes) });
    });
  }

  handleSignIn = () => {
    auth.signIn(user => this.setState({ user }));
  }

  handleSignOut = () => {
    auth.signOut(() => this.setState({ user: null }));
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
        <ToolBar
          onSubmit={this.addNote}
          onSignIn={this.handleSignIn}
          onSignOut={this.handleSignOut}
          user={this.state.user}
        />
        {this.state.notes && (
          <NotesList
            notes={this.state.notes}
            onUpdateNote={this.updateNote}
            onDeleteNote={this.deleteNote}
            user={this.state.user}
          />
        )}
      </div>
    );
  }
}

export default App;
