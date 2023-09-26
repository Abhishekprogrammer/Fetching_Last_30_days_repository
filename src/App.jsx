// App.js
import React, { useState, useEffect } from 'react';
import './app.css';
import RepoList from "./component/RepoList"

function App() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchRepos();
  }, [page]);

  const fetchRepos = () => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const formattedDate = thirtyDaysAgo.toISOString().split('T')[0];

    fetch(`https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`)
      .then((response) => response.json())
      .then((data) => setRepos((prevRepos) => [...prevRepos, ...data.items])); 
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>Top GitHub Repositories in the Last 30 Days</h1>
      <RepoList repos={repos} />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;

