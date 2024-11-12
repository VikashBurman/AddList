import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const HomePage = () => {
  const [task, setTask] = useState([]);
  const handleFormSubmit = (inputValue) => {
    // if (!inputValue) return;
    const { id, content, checked } = inputValue;
    if (!content) return;
    // if (task.includes(inputValue)) {
    //   return;  //for an array only
    // }
    const AlreadyTask = task.find((currTask) => currTask.content === content);
    if (AlreadyTask) return;

    setTask((prevTask) => {
      return [...prevTask, { id: id, content: content, checked: checked }];
    });
  };

  const handleDelete = (value) => {
    const updatedTask = task.filter((currTask) => {
      return currTask.content !== value;
    });
    setTask(updatedTask);
  };

  const handleChecked = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <div className="flex flex-col  items-center mt-10 space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800 tracking-wide">
        My List
      </h1>

      <TodoForm onAddTodo={handleFormSubmit} />

      <ul className="mt-4 w-64 space-y-2">
        {task.map((currTask) => {
          return (
            <TodoList
              key={currTask.id}
              checked={currTask.checked}
              data={currTask.content}
              onHandleDelete={handleDelete}
              onHandleChecked={handleChecked}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
