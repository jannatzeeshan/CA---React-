import React from 'react';
import users from './components/users'; 
import UserProfile from './components/userProfile';

function App() {
  return (
    <div>
      <h1>The User Profiles</h1>
      {users.map((user) => (
        <UserProfile key={user.username} user={user} />
      ))}
    </div>
  );
}

export default App;