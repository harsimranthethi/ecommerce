import React from 'react';
import './AnnouncementBar.scss';

const AnnouncementBar = ({ text }) => {
  return (
    <div className="announcement-bar">
      <p>{text}</p>
    </div>
  );
};

export default AnnouncementBar;
