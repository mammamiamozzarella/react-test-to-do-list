import React from "react";
import SubnoteInput from "./SubnoteInput";
import Subnote from "./Subnote";
const Note = ({ note, sublist, ...props }) => {
  let child = sublist.filter((item) => item.parent === note.id);
  const ActionBtn = () => (
    <span className="ActionBtn">
      <button onClick={props.deleteNote}>X</button>
      {props.pos !== 0 ? <button onClick={props.moveItemUp}>Up</button> : null}
      {props.pos !== props.long - 1 ? (
        <button onClick={props.moveItemDown}>Down</button>
      ) : null}
      {child.length > 0 ? (
        <button onClick={() => props.deleteSubnotes(note.id)}>
          Delete Subnotes
        </button>
      ) : null}
    </span>
  );

  return (
    <li className="Note">
      {note.title}
      <ActionBtn></ActionBtn>
      <Subnote
        deleteSubnote={props.deleteSubnote}
        deleteSubnotes={props.deleteSubnotes}
        addSubnote={props.addSubnote}
        moveItemUp={props.moveSubItemUp}
        moveItemDown={props.moveSubItemDown}
        moveSubItemUp={props.moveSubItemUp}
        moveSubItemDown={props.moveSubItemDown}
        findPosition={props.findPosition}
        key={note.id}
        sublist={sublist}
        note={note}
      ></Subnote>
      <SubnoteInput note={note} addSubnote={props.addSubnote}></SubnoteInput>
    </li>
  );
};

export default Note;
