import React from 'react';
import { Heart, MessageCircle, Clock, Tag } from 'lucide-react';

const PostsGrid = ({ posts }) => {
  return (
    <div className="content-section">
      <div className="content-header">
        <h2 className="content-title">Recent Posts</h2>
        <span className="content-count">{posts.length} posts</span>
      </div>
      
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-image-container">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="post-image"
              />
              <div className="post-overlay">
                <div className="post-stats">
                  <div className="post-stat">
                    <Heart size={20} />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="post-stat">
                    <MessageCircle size={20} />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="post-content">
              <p className="post-caption">
                {post.caption}
              </p>
              
              <div className="post-meta">
                <div className="post-date">
                  <Clock size={14} />
                  <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                </div>
                <span className="post-vibe">{post.vibe}</span>
              </div>
              
              <div className="post-tags">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="post-tag">
                    <Tag size={10} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
              
              <div className="post-quality">
                <div className="quality-item">
                  <div className="quality-label">Lighting</div>
                  <div className="quality-value">{post.quality.lighting}%</div>
                </div>
                <div className="quality-item">
                  <div className="quality-label">Composition</div>
                  <div className="quality-value">{post.quality.composition}%</div>
                </div>
                <div className="quality-item">
                  <div className="quality-label">Appeal</div>
                  <div className="quality-value">{post.quality.visualAppeal}%</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsGrid;