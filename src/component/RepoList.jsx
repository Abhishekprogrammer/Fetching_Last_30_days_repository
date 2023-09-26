// RepoList.js
import React from 'react';
import RepoItem from "./RepoItem.jsx";

function RepoList({ repos }) {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;
