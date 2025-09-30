import React from 'react';

const CircularProgress = ({ 
  percentage, 
  size = 120, 
  strokeWidth = 6, 
  children 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgb(55, 65, 81)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgb(16, 185, 129)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const InterestsSection = ({ interests }) => {
  return (
    <div className="section-card">
      <h2 className="section-title">INTERESTS</h2>
      <div className="interests-container">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <CircularProgress percentage={interest.percentage} size={interest.size}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }}>
                  {interest.percentage}%
                </div>
              </div>
            </CircularProgress>
            <p className="interest-label">{interest.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;