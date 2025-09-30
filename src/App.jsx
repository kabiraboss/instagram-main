import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProfileSection from './components/ProfileSection';
import MetricsCards from './components/MetricsCards';
import PersonalitySection from './components/PersonalitySection';
import InterestsSection from './components/InterestsSection';
import PostsGrid from './components/PostsGrid';
import ReelsGrid from './components/ReelsGrid';
import EngagementChart from './components/EngagementChart';
import { fetchInfluencerProfile } from './services/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profileData = await fetchInfluencerProfile('ralph_edwards');
        setProfile(profileData);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="error-container">
        <div className="error-text">Profile not found</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Sidebar />
      <ProfileSection {...profile.basicInfo} />
      
      <div className="main-content">
        <MetricsCards analytics={profile.analytics} basicInfo={profile.basicInfo} />
        
        <div className="section-grid">
          <PersonalitySection traits={profile.personality} />
          <InterestsSection interests={profile.interests} />
        </div>
        
      
        <div className="tab-navigation">
          {[
            { key: 'posts', label: 'Recent Posts' },
            { key: 'reels', label: 'Recent Reels' },
            { key: 'analytics', label: 'Analytics' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`tab-button ${
                activeTab === tab.key
                  ? 'active'
                  : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'posts' && <PostsGrid posts={profile.posts} />}
        {activeTab === 'reels' && <ReelsGrid reels={profile.reels} />}
        {activeTab === 'analytics' && <EngagementChart username={profile.basicInfo.username} />}
      </div>
    </div>
  );
}

export default App;