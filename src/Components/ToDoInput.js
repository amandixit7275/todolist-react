import React, { useState } from "react";

export default function ToDoInput(props) {
  const [inputText, setInput] = useState("");
  function handleEnterPress(e) {
    if (e.keyCode === 13) {
      props.addItem(inputText);
      setInput(" ");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter To Add Item"
        value={inputText}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnterPress}
      />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInput(" ");
        }}
      >
        +
      </button>
    </div>
  );
}
