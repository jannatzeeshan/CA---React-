import React from 'react';
import UserProfile from './UserProfile';
import users from '../users';

const usersList = () => {
  return (
    <div>
      {users.map((user) => (
        <UserProfile key={user.username} user={user} />
      ))}
    </div>
  );
};

export default usersList;