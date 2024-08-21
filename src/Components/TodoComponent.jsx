"use client";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [toggled, setToggled] = useState(false);

  const addHandler = () => {
    if (inputValue && toggled) {
      setTodos(
        todos.map((item) => {
          if (item.id === editId) {
            return { id: item.id, value: inputValue };
          }
          return item;
        })
      );
      setToggled(false);
      setEditId(null);
    } else if (inputValue) {
      setTodos([...todos, { id: uuidv4(), value: inputValue }]);
    } else {
      alert("Please enter a todo");
    }

    setInputValue("");
  };
  const deleteHandler = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const editHandler = (id) => {
    todos.find((item) => {
      if (item.id === id) {
        setInputValue(item.value);
      }
      setEditId(id);
      setToggled(true);
    });
  };
  return (
    <div className=" h-screen w-full flex items-center justify-center bg-[#6A9C89] text-lg">
      <div className="w-1/4 bg-[#C1D8C3] rounded-md flex  flex-col">
      <h1 className="flex justify-center mt-10 font-bold text-2xl text-[#FFFFFF]">Get Things Done!</h1>
        <div className="py-5 px-10 flex">
          <input
            className="h-10 border-2 border-[#6A9C89] bg-[#C1D8C3] w-[70%] focus:outline-none text-[#FFFFFF]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {toggled ? (
            <button
              className="bg-[#6A9C89] h-10 w-[30%] text-[#FFFFFF]"
              onClick={addHandler}
            >
              Edit Todo
            </button>
          ) : (
            <button
              className="bg-[#6A9C89] h-10 w-[30%] text-[#FFFFFF]"
              onClick={addHandler}
            >
              Add Todo
            </button>
          )}
        </div>
        <div className="py-5 px-10">
          {todos.map((item) => {
            return (
              <div
                className="w-auto bg-[#6A9C89] h-10 px-5   text-[#FFFFFF] flex justify-between items-center mb-5"
                key={item.id}
              >
                {item.value}
                <div className="flex gap-3 text-xl">
                  <i onClick={() => editHandler(item.id)}>
                    <FaEdit />
                  </i>
                  <i onClick={() => deleteHandler(item.id)}>
                    <MdDelete />
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
