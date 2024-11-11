import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const HomePage = () => {
  const [task, setTask] = useState([]);
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return;
    }
    setTask((prevTask) => {
      return [...prevTask, inputValue];
    });
  };

  const handleDelete =(value)=>{
    const updatedTask = task.filter((currTask)=>{
      return currTask !== value
    })
    setTask(updatedTask);
  }

  return (
    <div className="flex flex-col  items-center mt-10 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        My List
      </h1>

      <TodoForm onAddTodo={handleFormSubmit}/>
      
      <ul className="mt-4 w-64 space-y-2">
        {task.map((currTask, index) => {
          return <TodoList key={index} data={currTask} 
          onHandleDelete={handleDelete} />
        })}
      </ul>
    </div>
  );
};

export default HomePage;
