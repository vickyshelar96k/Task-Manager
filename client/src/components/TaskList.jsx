import React from 'react';

const TaskList = ({ tasks }) => (
  <ul className="list-group">
    {tasks.map(task => (
      <li key={task.id} className="list-group-item">
        <h5>{task.title}</h5>
        <p>{task.description}</p>
        <span className={`badge ${task.status === 'done' ? 'bg-success' : 'bg-secondary'}`}>
          {task.status}
        </span>
      </li>
    ))}
  </ul>
);

export default TaskList;
