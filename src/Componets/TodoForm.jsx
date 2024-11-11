import React, { useState } from "react";

const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInput] = useState("");
  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    onAddTodo(inputValue);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter a task"
          className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200"
        />

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
