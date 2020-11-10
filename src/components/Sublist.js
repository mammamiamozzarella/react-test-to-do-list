import React from "react";
import SubnoteInput from "./SubnoteInput";
import NoteInput from "./NoteInput";
const Sublist = ({ note, ...props }) => {
  return (
    <div>
      <div className="Sublist">
        {note.sublist[0] ? (
          <div>
            {note.sublist.map((subnote) => (
              <p>{subnote}</p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      {note.add ? (
        <SubnoteInput note={note} addSubnote={props.addSubnote}></SubnoteInput>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sublist;
