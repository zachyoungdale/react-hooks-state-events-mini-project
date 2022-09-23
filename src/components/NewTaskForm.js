import React, { useState } from "react";

function NewTaskForm({ categories, handleUpdate, taskList }) {
  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskCategory, setNewTaskCategory] = useState('Code')

  function handleNewText(event) {
    setNewTaskText(event.target.value)
  }

  function handleNewCategory(event) {
    setNewTaskCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newObj = {
      id: taskList.length + 1,
      text: newTaskText,
      category: newTaskCategory
    }
    handleUpdate(newObj)
  }

  const filteredCategories = categories.filter((category) => {
    return category !== "All";
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={handleNewText} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {/* render <option> elements for each category here */}
          {filteredCategories.map((category) => {
            return <option key={category} value={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
