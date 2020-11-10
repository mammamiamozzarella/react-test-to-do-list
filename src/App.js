import React from "react";
import Note from "./components/Note";
import Sublist from "./components/Sublist";
import NoteInput from "./components/NoteInput";
import SubnoteInput from "./components/SubnoteInput";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  //adds a note to the main list
  addNote = (note) => {
    this.setState((state) => {
      let { notes } = state;
      notes.push({
        id: notes.length !== 0 ? note.length : 0,
        title: note,
        sublist: [],
        add: false
      });
      for (let i = 0; i < notes.length; i++) {
        notes[i].id = i;
      }
      return notes;
    });
  };

  //removes a note from the main list
  deleteNote = (id) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      notes.splice(index, 1);
      for (let i = 0; i < notes.length; i++) {
        notes[i].id = i;
      }
      return notes;
    });
  };

  //moves the list item up
  upNote = (id) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      let temp = notes[index];
      notes[index] = notes[index - 1];
      notes[index - 1] = temp;
      for (let i = 0; i < notes.length; i++) {
        notes[i].id = i;
      }
      return notes;
    });
  };

  //moves the list item down
  downNote = (id) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      let temp = notes[index];
      notes[index] = notes[index + 1];
      notes[index + 1] = temp;
      for (let i = 0; i < notes.length; i++) {
        notes[i].id = i;
      }
      return notes;
    });
  };

  //adds input "add sublist"
  addSublist = (id) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      notes[index].add = true;
      return notes;
    });
  };

  //removes a whole sublist and input 'addsublist'
  deleteSublist = (id) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      /*while( notes[index].sublist.length > 0) {
        notes[index].sublist.pop();
      }*/
      notes[index].sublist = [];
      notes[index].add = false;
      return notes;
    });
  };

  //adds an item to a sublist
  addSubnote = (id, note) => {
    const index = this.state.notes.map((note) => note.id).indexOf(id);
    this.setState((state) => {
      let { notes } = state;
      notes[index].sublist.push(note);
      return notes;
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <h1>Заметки</h1>
        {notes.map((note) => (
          <div>
            <Note
              downNote={() => this.downNote(note.id)}
              upNote={() => this.upNote(note.id)}
              deleteNote={() => this.deleteNote(note.id)}
              addSubnote={() => this.addSubnote(note.id)}
              addSublist={() => this.addSublist(note.id)}
              deleteSublist={() => this.deleteSublist(note.id)}
              long={this.state.notes.length}
              child={note.sublist}
              note={note}
              key={note.id}
            ></Note>
            <Sublist note={note} addSubnote={this.addSubnote}></Sublist>
          </div>
        ))}
        <NoteInput addNote={this.addNote}></NoteInput>
      </div>
    );
  }
}

export default App;
