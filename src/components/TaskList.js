import React from "react";
import Task from "./Task";

function TaskList({ taskList, setTaskList, selectedCategory }) {
  function handleDelete(id) {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  const filteredList = taskList.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredList.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            category={task.category}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
