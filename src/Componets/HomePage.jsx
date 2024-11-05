import React, { useState } from "react";

const HomePage = () => {
  const [inputValue, setInput] = useState(""); //to store user input
  //need another state for storing different value
  const [task ,setTask] = useState([]);

  const handleInputChange = (value) => {
    setInput(value);
  };

  const handleFormSubmit = (e)=>{
    e.preventDefault();

    if(!inputValue) return;

    setTask((prevTask) =>{
      //The spread operator (...) takes each element from the prevTask array and "spreads" them out as individual items in a new array.
      //After spreading out prevTask, we add a new item, inputValue, at the end of this new array. prevtask +newvalue returning
      return [...prevTask,inputValue]
    });

  }

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        My List
      </h1>

      <form onSubmit={handleFormSubmit} className="flex space-x-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter a task"
          className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200"
        />

        {/* Add Task Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default HomePage;
