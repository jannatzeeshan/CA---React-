import React from "react";
import users from "./users";


const UserProfile = ({ user }) => {
  const colorClass = user.classLevel === 'Freshmen' ? 'green' : 'black';

  return (
    <div>
      <img src={user.profilePicture} alt={user.username} />
      <div>
        <h2>{user.firstName} {user.lastName}</h2>
        <p>Username: {user.username}</p>
        <p>School: {user.school}</p>
        <p>Class Level: <span style={{ color: colorClass }}>{user.classLevel}</span></p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
