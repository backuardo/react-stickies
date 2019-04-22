import React, { Component } from 'react';
import { Map } from 'immutable';
import * as db from '../services/datastore';
import * as auth from '../services/auth';
import ToolBar from './tool_bar';
import Note from './note';

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
      // github.com/firebase/quickstart-js/issues/58#issuecomment-244492935
    });

    db.fetchNotes((notes) => {
      // eslint-disable-next-line new-cap
      this.setState({ notes: Map(notes) });
    });

    // this prevents flashing sign-in screen for persisted sign in
    document.body.style.display = 'inline-block';
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
    const { notes, user } = this.state;
    return (
      <div id="app">
        <ToolBar
          onSubmit={this.addNote}
          onSignIn={this.handleSignIn}
          onSignOut={this.handleSignOut}
          user={user}
        />
        <div id="notes-list">
          {notes && (notes.size > 0) && notes.entrySeq().map(([id, note]) => {
            return (
              <Note
                key={id}
                id={id}
                note={note}
                onUpdate={this.updateNote}
                onDelete={this.deleteNote}
                user={user}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
