import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategories] = useState("All");

  function handleSelectedCategory(event) {
    
    setSelectedCategories(event.target.value);
  }

  function handleUpdate(Obj) {
    setTaskList([...taskList, Obj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={CATEGORIES}
        handleSelectedCategory={handleSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} handleUpdate={handleUpdate} taskList={taskList}/>
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
