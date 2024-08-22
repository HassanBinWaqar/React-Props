import React from 'react';
import './UserProfile.css';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <img src={props.avatar} alt="User Avatar" />
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default UserProfile;
