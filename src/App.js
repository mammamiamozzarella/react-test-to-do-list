import React from "react";
import NoteList from "./components/NoteList";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NoteList />
      </div>
    );
  }
}

export default App;
