import React from 'react';

const PersonalitySection = ({ traits }) => {
  return (
    <div className="section-card">
      <h2 className="section-title">PERSONALITY</h2>
      <div className="personality-traits">
        {traits.map((trait, index) => (
          <div key={index} className="trait-item">
            <div className="trait-header">
              <span className="trait-name">{trait.name}</span>
              <span className="trait-percentage">{trait.percentage}%</span>
            </div>
            <div className="trait-bar">
              <div 
                className="trait-progress"
                style={{ width: `${trait.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalitySection;