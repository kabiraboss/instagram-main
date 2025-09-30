import React from 'react';
import { Play, Heart, MessageCircle, Eye, Clock, Tag } from 'lucide-react';

const ReelsGrid = ({ reels }) => {
  return (
    <div className="content-section">
      <div className="content-header">
        <h2 className="content-title">Recent Reels</h2>
        <span className="content-count">{reels.length} reels</span>
      </div>
      
      <div className="posts-grid">
        {reels.map((reel) => (
          <div key={reel.id} className="post-card">
            <div className="reel-image-container">
              <img
                src={reel.thumbnailUrl}
                alt={reel.caption}
                className="post-image"
              />
              <div className="post-overlay">
                <Play size={40} className="reel-play-button" fill="white" />
              </div>
              
              <div className="reel-views">
                  <Eye size={12} />
                  <span>{reel.views.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="post-content">
              <p className="post-caption">
                {reel.caption}
              </p>
              
              <div className="reel-stats">
                <div className="reel-engagement">
                  <div className="post-stat">
                    <Heart size={14} />
                    <span>{reel.likes.toLocaleString()}</span>
                  </div>
                  <div className="post-stat">
                    <MessageCircle size={14} />
                    <span>{reel.comments}</span>
                  </div>
                </div>
                <div className="post-date">
                  <Clock size={14} />
                  <span>{new Date(reel.timestamp).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <span className="reel-vibe">
                  {reel.vibe}
                </span>
              </div>
              
              <div className="post-tags">
                {reel.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="post-tag">
                    <Tag size={10} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              
              <div className="reel-events">
                <div className="events-title">Detected Events:</div>
                <div className="events-list">
                  {reel.events.slice(0, 2).map((event, index) => (
                    <span key={index} className="event-tag">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsGrid;