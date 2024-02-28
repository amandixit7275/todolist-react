import { useState } from "react";
import "./App.css";
import ToDoInput from "./Components/ToDoInput";
import ToDoList from "./Components/ToDoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  function addItem(inputText) {
    if (inputText !== " ") {
      setListTodo([...listTodo, inputText]);
    }
  }
  function deleteItem(index) {
    let cpyListTodo = [...listTodo];
    cpyListTodo.splice(index, 1);
    setListTodo([...cpyListTodo]);
  }
  console.log(listTodo);
  return (
    <div className="container">
      <div className="center-container">
        <ToDoInput addItem={addItem} />
        <h1>TODO</h1>
        {listTodo.map((listItem, index) => {
          return (
            <ToDoList
              item={listItem}
              deleteItem={deleteItem}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
