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
    //if nothing entered
    if(!inputValue) return;

    //check for already exist
    if(task.includes(inputValue)) {
      setInput("");
      return;
    }
    
    setTask((prevTask) =>{
      //After spreading out prevTask, we add a new item, inputValue, at the end of this new array. prevtask + newInputvalue returning
      return [...prevTask,inputValue]
    });

    setInput("");

  }

  return (
    <div className="flex flex-col items-center mt-10 space-y-6">
    <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
      My List
    </h1>

    {/* Task Input Form */}
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

    <ul className="mt-4 w-64 space-y-2">
  {task.map((item, index) => (
    <li
      key={index}
      className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-200"
    >
      <span className="text-gray-700">{item}</span>
      <div className="flex items-center space-x-2">
        {/* Tick SVG Icon */}
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-blue-500" // Adjust size and color as needed
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

        {/* Second SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-red-500" // Adjust size and color as needed
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </li>
  ))}
</ul>


  </div>
  );
};

export default HomePage;
