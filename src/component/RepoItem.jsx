// RepoItem.js
import React from 'react';

function RepoItem({ repo }) {
  return (
    <div className="repo-item">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Issues: {repo.open_issues_count}</p>
      <div>
        <p>Owner: {repo.owner.login}</p>
        <img src={repo.owner.avatar_url} alt={`${repo.owner.login}'s avatar`} />
      </div>
    </div>
  );
}

export default RepoItem;
