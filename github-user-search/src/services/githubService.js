import axios from 'axios';

export const advancedSearchUsers = async ({ username, location, minRepos }) => {
  const query = [
    username && `${username}`,
    location && `location:${location}`,
    minRepos && `repos:>${minRepos}`,
  ].filter(Boolean).join('+');

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items;
};
