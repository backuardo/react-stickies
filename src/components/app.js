import React, { Component } from 'react';
import { Map } from 'immutable';
import ToolBar from './tool_bar';
import NotesList from './notes_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line new-cap
      notes: Map({
        0: {
          title: 'welcome',
          content: '# react-notes\n### w/ markdown support!\nGet started by making a new note ⬆️',
          x: -400,
          y: 20,
          zIndex: 0,
        },
      }),
    };
  }

  deleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.delete(id),
    }));
  };

  addNote = (id, note) => {
    this.setState(prevState => ({
      notes: prevState.notes.set(id, note),
    }));
  };

  updateNote = (id, fields) => {
    this.setState(prevState => ({
      notes: prevState.notes.update(id, (n) => {
        return Object.assign({}, n, fields);
      }),
    }));
  };

  render() {
    return (
      <div id="app">
        <ToolBar onSubmit={this.addNote} />
        <NotesList
          notes={this.state.notes}
          onUpdateNote={this.updateNote}
          onDeleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
