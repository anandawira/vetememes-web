import '../style/ProfileCard.scss';

import React from 'react';

export default function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.image} alt={props.name} />
      <div className="info">
        <p className="name">{props.name}</p>
      </div>
    </div>
  );
}
