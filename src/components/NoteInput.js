import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addNote = () => {
    const { input } = this.state;
    if (input) {
      this.props.addNote(input);
      this.setState({ input: "" });
    }
  };

  inputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") this.addNote();
  };
  render() {
    const { input } = this.state;
    return (
      <div>
        <input
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
          value={input}
        ></input>
        <button onClick={this.addNote}>Add</button>
      </div>
    );
  }
}

export default NoteInput;
