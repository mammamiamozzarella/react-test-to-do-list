import React from "react";
import Note from "./Note";

const Subnote = ({ sublist, note, ...props }) => {
  let subnotelist = sublist.filter((item) => item.parent === note.id);

  return (
    <ul>
      {subnotelist.map((item, index, arr) => (
        <Note
          key={item.id}
          note={item}
          sublist={sublist}
          position={props.findPosition(item.id)}
          pos={index}
          addSubnote={props.addSubnote}
          moveItemUp={() => props.moveSubItemUp(props.findPosition(item.id))}
          moveItemDown={() =>
            props.moveSubItemDown(props.findPosition(item.id))
          }
          moveSubItemUp={props.moveSubItemUp}
          moveSubItemDown={props.moveSubItemDown}
          findPosition={props.findPosition}
          long={subnotelist.length}
          deleteNote={() => props.deleteSubnote(item.id)}
          deleteSubnotes={() => props.deleteSubnotes(item.id)}
          deleteSubnote={props.deleteSubnote}
        ></Note>
      ))}
    </ul>
  );
};

export default Subnote;
