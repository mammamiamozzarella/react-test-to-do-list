import React from "react";

class SubnoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addSubnote = () => {
    const { input } = this.state;
    if (input) {
      this.props.addSubnote(this.props.note.id, input);
      this.setState({ input: "" });
    }
  };

  inputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") this.addSubnote();
  };
  render() {
    const { input } = this.state;
    return (
      <div className="SubInput">
        <input
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
          value={input}
        ></input>
        <button onClick={this.addSubnote}>AddSubnote</button>
      </div>
    );
  }
}

export default SubnoteInput;
