import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, searchTasks } from '../api/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === '') return fetchTasks();
    const res = await searchTasks(search);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">📝 Task Manager</h2>

      <TaskForm refreshTasks={fetchTasks} />

      <form className="input-group mb-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>

      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
