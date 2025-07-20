import { useContext } from 'react';
import UserContext from './UserContext';
import UserDetails from './UserDetails';

function UserProfile() {
  const userData = useContext(UserContext);

  return <UserDetails />;
}

export default UserProfile;
