import React from "react";
import { v4 as uuid } from "uuid";
import Note from "./Note";
import NoteInput from "./NoteInput";
class NoteList extends React.Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      sublist: []
    };
  }

  //adds a note to the main list
  addNote = (note) => {
    this.setState((state) => {
      state.notes.push({ id: uuid(), title: note });
      console.log(state);
      return state;
    });
  };

  //adds a note to sublist
  addSubnote = (id, note) => {
    this.setState((state) => {
      state.sublist.push({ id: uuid(), title: note, parent: id });
      console.log(state);
      return state;
    });
  };
  //removes a note from the main list
  deleteNote = (id) => {
    this.setState((state) => {
      state.notes = state.notes.filter((item) => item.id !== id);
      state.sublist = state.sublist.filter(
        (item) => item.id !== id && item.parent !== id
      );
      return state;
    });
  };

  //remove a note from sublist
  deleteSubnote = (id) => {
    this.setState((state) => {
      state.sublist = state.sublist.filter(
        (item) => item.id !== id && item.parent !== id
      );
      return state;
    });
  };

  //remove all subnotes
  deleteSubnotes = (id) => {
    this.setState((state) => {
      state.sublist = state.sublist.filter((item) => item.parent !== id);
      return state;
    });
  };

  //finds position of notes in sublist
  findPosition = (id) => {
    let position = this.state.sublist.map((subnote) => subnote.id).indexOf(id);
    return position;
  };

  //change two notes in array
  shift = (arr, a, b) => {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  };

  //move an item from main list up
  moveItemUp = (position) => {
    this.setState((state) => {
      this.shift(state.notes, position, position - 1);
      return state;
    });
  };

  //move an item from main list down
  moveItemDown = (position) => {
    this.setState((state) => {
      this.shift(state.notes, position, position + 1);
      return state;
    });
  };

  //move an item from sublist up
  moveSubItemUp = (position) => {
    let pos2 = position - 1;
    this.setState((state) => {
      while (state.sublist[position].parent != state.sublist[pos2].parent) {
        pos2--;
      }
      this.shift(state.sublist, position, pos2);
      return state;
    });
  };

  //move an item from sublist down
  moveSubItemDown = (position) => {
    let pos2 = position + 1;
    this.setState((state) => {
      while (state.sublist[position].parent != state.sublist[pos2].parent) {
        pos2++;
      }
      this.shift(state.sublist, position, pos2);
      return state;
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <h1>Заметки</h1>
        {notes.map((note, index) => (
          <ul>
            <Note
              key={note.id}
              note={note}
              pos={index}
              downNote={() => this.downNote(note.id)}
              upNote={() => this.upNote(note.id)}
              deleteNote={() => this.deleteNote(note.id)}
              moveItemUp={() => this.moveItemUp(index)}
              moveItemDown={() => this.moveItemDown(index)}
              moveSubItemUp={this.moveSubItemUp}
              moveSubItemDown={this.moveSubItemDown}
              deleteSubnote={this.deleteSubnote}
              deleteSubnotes={this.deleteSubnotes}
              addSubnote={this.addSubnote}
              long={this.state.notes.length}
              sublist={this.state.sublist}
              findPosition={this.findPosition}
            ></Note>
          </ul>
        ))}
        <NoteInput addNote={this.addNote}></NoteInput>
      </div>
    );
  }
}

export default NoteList;
