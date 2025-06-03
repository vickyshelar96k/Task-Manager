import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editTaskId, setEditTaskId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState("");
  const [success, setSuccess] = useState("");



  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
  });

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks');
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError("Could not load tasks");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
    try {
        if (editTaskId) {
        // Edit mode
        const res = await axios.put(`http://localhost:5000/api/tasks/${editTaskId}`, editingTask);
        setTasks(tasks.map(task => task.id === editTaskId ? res.data : task));
        setEditTaskId(null);
        setEditingTask(null);
        setSuccess("Task updated successfully!");
        setTimeout(() => setSuccess(""), 3000);
        } 

        else {
        // Add mode
        const res = await axios.post('http://localhost:5000/api/tasks', newTask);
        setTasks([...tasks, res.data]);
        setNewTask({ title: '', description: '', status: 'todo' });
        }
    } catch (err) {
        console.error('Error submitting task:', err);
        setError("Failed to submit task");
    }
  };


  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setNewTask({ title: task.title, description: task.description, status: task.status });
  };

    const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.put(`http://localhost:5000/api/tasks/${editTaskId}`, editingTask);
        setTasks(tasks.map(task => task.id === editTaskId ? res.data : task));
        setEditTaskId(null);
        setEditingTask(null);
    } catch (err) {
        console.error('Error updating task:', err);
        setError("Failed to update task");
    }
  };


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
        setSuccess("Task deleted successfully!");
        setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
        console.error('Error deleting task:', err);
        setError("Failed to delete task");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
        const updated = await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: newStatus });
        setTasks(tasks.map(task => task.id === id ? updated.data : task));
    } catch (err) {
        console.error('Error updating status:', err);
        setError("Failed to update status");
    }
  };

  const handleSaveEdit = async (taskId) => {
    try {
        await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        title: editTask.title,
        description: editTask.description,
        status: editTask.status
        });
        setEditTask(null); // clear editing
        fetchTasks(); // refresh tasks
    } catch (err) {
        console.error('Error updating task:', err);
        setError("Failed to update task");
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setNewTask({
        title: task.title,
        description: task.description,
        status: task.status,
    });
  };




  return (
    <div className="container mt-4 pb-5">
      <h1 className="mb-4 text-center">📝 Task Manager</h1>
      <p className="text-muted">Total Tasks: {tasks.length} | Completed: {tasks.filter(task => task.status === 'done').length}</p>

      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="mb-4">
        <h4>Add New Task</h4>
        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={editTaskId ? editingTask?.title || '' : newTask.title}
                onChange={(e) =>
                    editTaskId
                    ? setEditingTask({ ...editingTask, title: e.target.value })
                    : setNewTask({ ...newTask, title: e.target.value })
                }
                required
            />
          </div>

          <div className="mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={editTaskId ? editingTask?.description || '' : newTask.description}
                onChange={(e) =>
                    editTaskId
                    ? setEditingTask({ ...editingTask, description: e.target.value })
                    : setNewTask({ ...newTask, description: e.target.value })
                }
                required
            />

          </div>
          <div className="mb-2">
            <select
                className="form-select"
                value={editTaskId ? editingTask?.status || 'todo' : newTask.status}
                onChange={(e) =>
                    editTaskId
                    ? setEditingTask({ ...editingTask, status: e.target.value })
                    : setNewTask({ ...newTask, status: e.target.value })
                }
                >
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="done">Done</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>{editTaskId ? 'Updating...' : 'Adding...'}</button>


          {editTaskId && (
            <button type="button" className="btn btn-secondary ms-2" onClick={() => {
                setEditTaskId(null);
                setNewTask({ title: '', description: '', status: 'todo' });
                }}
            >Cancel Edit</button>
            )}

        </form>
      </div>
      
      <div className="mb-3">
        <label className="form-label">Filter by Status</label>
        <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
        >
            <option value="all">All</option>
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
        </select>
      </div>

          <div className="mb-2">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
            />
          </div>

        <ul className="list-group">
        {tasks
            .sort((a, b) => { const order = { todo: 1, inprogress: 2, done: 3 }; return order[a.status] - order[b.status]; })
            .filter(task => 
            (filterStatus === 'all' || task.status === filterStatus) &&
            (task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            task.description.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            .map(task => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                <strong>{task.title}</strong>: {task.description}
                <br />
                <span className={`badge bg-${task.status === 'done' ? 'success' : task.status === 'inprogress' ? 'warning' : 'secondary'}`}>
                    {task.status}
                </span>
                </div>
                <div className="d-flex align-items-center">
                    <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)} className="form-select form-select-sm me-2">
                        <option value="todo">To Do</option>
                        <option value="inprogress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => { setEditTaskId(task.id); setEditingTask({ title: task.title, description: task.description, status: task.status });}}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            </li>
            ))}
        </ul>

    </div>
  );
};

export default TaskManager;
