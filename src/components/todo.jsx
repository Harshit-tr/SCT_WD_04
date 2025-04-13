import React, { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");
  function handlechange(e) {
    setTask(e.target.value);
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    const date = new Date().toLocaleString();
    setTasks([...tasks, { task, date, completed: false }]);
    setTask("");
  };
  const handledelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index].task);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updateTasks = [...tasks];
    updateTasks[editIndex].task = editTask;
    setTasks(updateTasks);
    setEditIndex(null);
    setEditTask("");
  };
  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  return (
    <div>
      <h1>ToDO Task</h1>
      <form onSubmit={handlesubmit}>
        <label className="label">Task</label>
        <div className="container">
          <input
            className="input"
            type="text"
            value={task}
            onChange={handlechange}
            placeholder="Enter Task"
          />
          <button className="button" type="submit">
            Add Task
          </button>
        </div>
      </form>
      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {editIndex === index ? (
              <form onSubmit={handleEditSubmit}>
                <input
                  className="input"
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button className="save" type="submit">
                  Save
                </button>
              </form>
            ) : (
              <>
                <div className="task-top">
                  <strong>{item.task}</strong>
                  <small>{item.date}</small>
                </div>
                <div className="btn-group">
                  <button
                    className="complete"
                    onClick={() => handleComplete(index)}
                  >
                    {item.completed ? "Undo" : "Complete"}
                  </button>
                  <button className="edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="dlt" onClick={() => handledelete(index)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
