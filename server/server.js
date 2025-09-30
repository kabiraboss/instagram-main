require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database'); 
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Instagram Analytics API is running' });
});

app.get('/api/influencer/:username', (req, res) => {
  const { username } = req.params;

  db.getInfluencerProfile(username, (err, influencer) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (!influencer) {
      return res.status(404).json({ error: 'Influencer not found' });
    }
    const response = {
      basicInfo: {
        name: influencer.name,
        username: influencer.username,
        profileImage: influencer.profile_image,
        location: influencer.location,
        age: influencer.age,
        status: influencer.status,
        occupation: influencer.occupation,
        company: influencer.company,
        followers: influencer.followers.toLocaleString(),
        following: influencer.following.toLocaleString(),
        posts: influencer.posts_count.toLocaleString(),
        verified: Boolean(influencer.verified)
      },
      analytics: {
        authenticity: influencer.authenticity_score,
        engagement: influencer.engagement_level,
        qualityScore: influencer.quality_score,
        riskLevel: influencer.risk_level,
        trustScore: influencer.trust_score,
        avgLikes: influencer.avg_likes,
        avgComments: influencer.avg_comments,
        engagementRate: influencer.engagement_rate
      },
      personality: [
        { name: 'Adventurous', percentage: 85, color: 'bg-green-500' },
        { name: 'Extrovert', percentage: 72, color: 'bg-green-500' },
        { name: 'Sportive', percentage: 68, color: 'bg-green-500' },
        { name: 'Attractive', percentage: 78, color: 'bg-green-500' }
      ],
      interests: [
        { label: 'Technology', percentage: 80, size: 100 },
        { label: 'Sports', percentage: 64, size: 80 },
        { label: 'Travel', percentage: 64, size: 80 },
        { label: 'Food', percentage: 23, size: 60 },
        { label: 'Fashion', percentage: 16, size: 60 }
      ],
      posts: [],
      reels: []
    };

    
    db.getInfluencerPosts(influencer.id, 12, (err, posts) => {
      if (!err && posts) {
        response.posts = posts.map(post => ({
          id: post.post_id,
          imageUrl: post.image_url,
          caption: post.caption,
          likes: post.likes,
          comments: post.comments,
          timestamp: post.timestamp,
          tags: JSON.parse(post.tags || '[]'),
          vibe: post.vibe,
          quality: {
            lighting: post.lighting_quality,
            composition: post.composition_quality,
            visualAppeal: post.visual_appeal
          }
        }));
      }

      
      db.getInfluencerReels(influencer.id, 8, (err, reels) => {
        if (!err && reels) {
          response.reels = reels.map(reel => ({
            id: reel.reel_id,
            thumbnailUrl: reel.thumbnail_url,
            caption: reel.caption,
            views: reel.views,
            likes: reel.likes,
            comments: reel.comments,
            timestamp: reel.timestamp,
            tags: JSON.parse(reel.tags || '[]'),
            vibe: reel.vibe,
            events: JSON.parse(reel.events || '[]')
          }));
        }

        res.json(response);
      });
    });
  });
});


app.get('/api/analytics/:username', (req, res) => {
  const { username } = req.params;

  const analyticsData = {
    daily: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      likes: Math.floor(Math.random() * 1000) + 2000,
      comments: Math.floor(Math.random() * 200) + 100
    })),
    categories: [
      { category: 'Technology', posts: 45, engagement: 8.2 },
      { category: 'Lifestyle', posts: 32, engagement: 7.8 },
      { category: 'Travel', posts: 28, engagement: 9.1 },
      { category: 'Sports', posts: 15, engagement: 6.5 }
    ]
  };

  res.json(analyticsData);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});


app.listen(PORT, () => {
  console.log(`Instagram Analytics API running on port ${PORT}`);
  console.log(`Database initialized with sample data`);
  console.log(`Frontend available at http://localhost:${PORT}`);
});


process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down gracefully...');
  db.close();
  process.exit(0);
});
