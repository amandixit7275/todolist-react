import React from "react";

export default function ToDoList(props) {
  return (
    <li>
      {props.item}
      <button
        onClick={(e) => {
          props.deleteItem(props.index);
        }}
      >
        -
      </button>
    </li>
  );
}
