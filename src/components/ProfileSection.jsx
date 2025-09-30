import React from 'react';

const ProfileSection = ({
  name,
  username,
  profileImage,
  location,
  age,
  status,
  occupation,
  company
}) => {
  return (
    <div className="profile-section">
     
      <div className="profile-header">
        <div className="profile-image-container">
          <img 
            src={profileImage}
            alt={name}
            className="profile-image"
          />
          <div className="profile-status"></div>
        </div>
        <h1 className="profile-name">{name}</h1>
        <p className="profile-username">@{username}</p>
      </div>

      
      <div className="profile-info">
        <div className="profile-info-item">
          <span className="profile-info-label">LOCATION</span>
          <span className="profile-info-value">{location}</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">AGE</span>
          <span className="profile-info-value">{age} YEARS OLD</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">STATUS</span>
          <span className="profile-info-value">{status}</span>
        </div>
        <div className="profile-info-item">
          <span className="profile-info-label">OCCUPATION</span>
          <span className="profile-info-value">{occupation}</span>
        </div>
      </div>

     
      <div className="company-card">
        <div className="company-logo">
          <span>M</span>
        </div>
        <span className="company-name">{company}</span>
      </div>

      
      <div className="contact-buttons">
        <button className="contact-button primary">
          <span>📞</span>
          <span>Call Now</span>
        </button>
        <button className="contact-button secondary">
          <span>📧</span>
          <span>Send Email</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;