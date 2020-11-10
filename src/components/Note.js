import React from "react";
import SubnoteInput from "./SubnoteInput";

const Note = ({ note, ...props }) => {
  const ActionBtn = () => (
    <div className="ActionBtn">
      <p className="inlineP" onClick={props.deleteNote}>
        X
      </p>
      {note.id > 0 ? (
        <p className="inlineP" onClick={props.upNote}>
          Up
        </p>
      ) : (
        ""
      )}
      {note.id < props.long - 1 ? (
        <p className="inlineP" onClick={props.downNote}>
          Down
        </p>
      ) : (
        ""
      )}
      {!note.add ? (
        <p className="inlineP" onClick={props.addSublist}>
          AddSublist
        </p>
      ) : (
        <p className="inlineP" onClick={props.deleteSublist}>
          RemoveSublist
        </p>
      )}
    </div>
  );

  return (
    <div className="Note">
      <p className="NoteTitle">{note.title}</p>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Note;
