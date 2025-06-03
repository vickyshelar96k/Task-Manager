import React, { useState } from 'react';
import { addTask } from '../api/api';

const TaskForm = ({ refreshTasks }) => {
  const [form, setForm] = useState({ title: '', description: '', status: 'todo' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(form);
    refreshTasks(); // reload the task list
    setForm({ title: '', description: '', status: 'todo' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input name="title" value={form.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" required />
      <textarea name="description" value={form.description} onChange={handleChange} className="form-control mb-2" placeholder="Description" required />
      <select name="status" value={form.status} onChange={handleChange} className="form-control mb-2">
        <option value="todo">To Do</option>
        <option value="done">Done</option>
      </select>
      <button type="submit" className="btn btn-primary w-100">Add Task</button>
    </form>
  );
};

export default TaskForm;
