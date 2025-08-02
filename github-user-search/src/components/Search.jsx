import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    setError('');
    setUserData(null);
    setRepos([]);
    try {
      const userRes = await axios.get(`https://api.github.com/users/${username}`);
      const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUserData(userRes.data);
      setRepos(repoRes.data.slice(0, 5)); // Get top 5 repos
    } catch (err) {
      setError('User not found');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      fetchUserData();
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold">{userData.name}</h2>
          <p className="text-sm text-gray-600">@{userData.login}</p>
          <p className="mt-2">Location: {userData.location || 'N/A'}</p>
          <p>Repos: {userData.public_repos}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Profile
          </a>

          {repos.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Top Repositories:</h3>
              <ul className="list-disc pl-5">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
