import React, { useState } from 'react';
import axios from 'axios';

function TaskSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await axios.post('/api/tasks/search', { query });
    setResults(res.data);
  };

  return (
    <div className="mb-4">
      <input
        className="form-control mb-2"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-primary mb-3" onClick={handleSearch}>
        🔍 Search
      </button>
      <ul className="list-group">
        {results.map(task => (
          <li key={task.id} className="list-group-item">
            <strong>{task.title}</strong> — {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskSearch;
