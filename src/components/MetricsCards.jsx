import React from 'react';
import { Activity, Shield, Users, UserPlus } from 'lucide-react';

const MetricCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  color, 
  bgColor 
}) => {
  return (
    <div className="metric-card">
      <div className="metric-card-header">
        <div className={`metric-icon ${color}`}>
            {icon}
        </div>
        <span className="metric-value">{value}</span>
      </div>
      <h3 className="metric-title">{title}</h3>
      <p className="metric-description">{description}</p>
    </div>
  );
};

const MetricsCards = ({ analytics, basicInfo }) => {
  const metrics = [
    {
      title: "FOLLOWERS",
      value: basicInfo?.followers || "125.4K",
      description: "Total follower count",
      icon: <Users size={20} />,
      color: "blue"
    },
    {
      title: "FOLLOWING",
      value: basicInfo?.following || "1,284",
      description: "Accounts following",
      icon: <UserPlus size={20} />,
      color: "purple"
    },
    {
      title: "AUTHENTICITY",
      value: `${analytics.authenticity}%`,
      description: "Based on engagement patterns",
      icon: <Shield size={20} />,
      color: "cyan"
    },
    {
      title: "ENGAGEMENT",
      value: analytics.engagement,
      description: "Audience interaction level",
      icon: <Activity size={20} />,
      color: "green"
    }
  ];

  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          {...metric}
        />
      ))}
    </div>
  );
};

export default MetricsCards;