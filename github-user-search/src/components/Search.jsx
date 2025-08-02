import { useState } from 'react';
import { advancedSearchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await advancedSearchUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {users.length > 0 && users.map(user => (
          <div key={user.id} className="flex items-center border p-4 my-2 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold">
                {user.login}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;