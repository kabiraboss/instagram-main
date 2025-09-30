import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { fetchEngagementData } from '../services/api';

const EngagementChart = ({ username }) => {
  const [engagementData, setEngagementData] = useState(null);
  const [activeTab, setActiveTab] = useState('daily');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchEngagementData(username);
      setEngagementData(data);
    };
    loadData();
  }, [username]);

  if (!engagementData) {
    return (
      <div className="chart-container" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loading-spinner" style={{ width: '32px', height: '32px' }}></div>
      </div>
    );
  }

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];
  
  const contentMixData = [
    { name: 'Photos', value: 65, color: '#10b981' },
    { name: 'Reels', value: 25, color: '#3b82f6' },
    { name: 'Stories', value: 8, color: '#f59e0b' },
    { name: 'IGTV', value: 2, color: '#ef4444' }
  ];

  return (
    <div className="analytics-section">
      <div className="analytics-header">
        <h2 className="analytics-title">Analytics Dashboard</h2>
        <div className="chart-tabs">
          <button 
            className={`chart-tab ${activeTab === 'daily' ? 'active' : ''}`}
            onClick={() => setActiveTab('daily')}
          >
            Daily
          </button>
          <button 
            className={`chart-tab ${activeTab === 'categories' ? 'active' : ''}`}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button 
            className={`chart-tab ${activeTab === 'content' ? 'active' : ''}`}
            onClick={() => setActiveTab('content')}
          >
            Content Mix
          </button>
        </div>
      </div>

      <div className="chart-container">
        {activeTab === 'daily' && (
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <LineChart data={engagementData.daily}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line type="monotone" dataKey="likes" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
                <Line type="monotone" dataKey="comments" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeTab === 'categories' && (
          <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
              <BarChart data={engagementData.categories}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="category" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="engagement" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {activeTab === 'content' && (
          <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="50%" height="100%">
              <PieChart>
                <Pie
                  data={contentMixData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {contentMixData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ marginLeft: '32px' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '16px', fontSize: '18px' }}>Content Distribution</h3>
              {contentMixData.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                  <div 
                    style={{ 
                      width: '16px', 
                      height: '16px', 
                      backgroundColor: item.color, 
                      borderRadius: '50%', 
                      marginRight: '8px' 
                    }}
                  ></div>
                  <span style={{ color: '#d1d5db', fontSize: '14px' }}>
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-value green">2.8K</div>
          <div className="summary-label">Avg Likes</div>
        </div>
        <div className="summary-card">
          <div className="summary-value blue">156</div>
          <div className="summary-label">Avg Comments</div>
        </div>
        <div className="summary-card">
          <div className="summary-value purple">3.2%</div>
          <div className="summary-label">Engagement Rate</div>
        </div>
        <div className="summary-card">
          <div className="summary-value orange">85%</div>
          <div className="summary-label">Growth Rate</div>
        </div>
      </div>
    </div>
  );
};

export default EngagementChart;