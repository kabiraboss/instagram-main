const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'influencer_analytics.db');

class Database {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
    this.init();
  }

  init() {
    this.db.serialize(() => {
      
      this.db.run(`
        CREATE TABLE IF NOT EXISTS influencers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          name TEXT NOT NULL,
          profile_image TEXT,
          followers INTEGER,
          following INTEGER,
          posts_count INTEGER,
          verified BOOLEAN DEFAULT FALSE,
          location TEXT,
          age INTEGER,
          status TEXT,
          occupation TEXT,
          company TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      
      this.db.run(`
        CREATE TABLE IF NOT EXISTS posts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          influencer_id INTEGER,
          post_id TEXT UNIQUE NOT NULL,
          image_url TEXT NOT NULL,
          caption TEXT,
          likes INTEGER DEFAULT 0,
          comments INTEGER DEFAULT 0,
          timestamp DATETIME,
          tags TEXT,
          vibe TEXT,
          lighting_quality INTEGER,
          composition_quality INTEGER,
          visual_appeal INTEGER,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (influencer_id) REFERENCES influencers (id)
        )
      `);

     
      this.db.run(`
        CREATE TABLE IF NOT EXISTS reels (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          influencer_id INTEGER,
          reel_id TEXT UNIQUE NOT NULL,
          thumbnail_url TEXT NOT NULL,
          caption TEXT,
          views INTEGER DEFAULT 0,
          likes INTEGER DEFAULT 0,
          comments INTEGER DEFAULT 0,
          timestamp DATETIME,
          tags TEXT,
          vibe TEXT,
          events TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (influencer_id) REFERENCES influencers (id)
        )
      `);

      
      this.db.run(`
        CREATE TABLE IF NOT EXISTS analytics (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          influencer_id INTEGER,
          authenticity_score INTEGER,
          engagement_level TEXT,
          quality_score REAL,
          risk_level TEXT,
          trust_score REAL,
          avg_likes INTEGER,
          avg_comments INTEGER,
          engagement_rate REAL,
          calculated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (influencer_id) REFERENCES influencers (id)
        )
      `);

      this.insertSampleData();
    });
  }

  insertSampleData() {
    const sampleInfluencer = {
      username: 'KABIRA',
      name: 'Rohit kumar',
      profile_image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      followers: 125400,
      following: 1284,
      posts_count: 847,
      verified: 1,
      location: 'India',
      age: 24,
      status: 'Single',
      occupation: 'Software Developer',
      company: 'Primaspot'
    };

    this.db.get("SELECT id FROM influencers WHERE username = ?", [sampleInfluencer.username], (err, row) => {
      if (err) return console.error('Error checking existing influencer:', err);

      if (!row) {
        this.db.run(
          `INSERT INTO influencers (username, name, profile_image, followers, following, posts_count, verified, location, age, status, occupation, company)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          Object.values(sampleInfluencer),
          function (err) {
            if (err) return console.error('Error inserting sample influencer:', err);

            const influencerId = this.lastID;
            console.log('Inserted sample influencer with ID:', influencerId);

            
            const sampleAnalytics = {
              influencer_id: influencerId,
              authenticity_score: 85,
              engagement_level: 'Mid',
              quality_score: 8.2,
              risk_level: 'Low Risk',
              trust_score: 8.0,
              avg_likes: 2834,
              avg_comments: 156,
              engagement_rate: 3.2
            };

            db.db.run(
              `INSERT INTO analytics (influencer_id, authenticity_score, engagement_level, quality_score, risk_level, trust_score, avg_likes, avg_comments, engagement_rate)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              Object.values(sampleAnalytics),
              (err) => {
                if (err) console.error('Error inserting sample analytics:', err);
                else console.log('Inserted sample analytics');
              }
            );

            
            for (let i = 1; i <= 12; i++) {
              db.db.run(
                `INSERT INTO posts (influencer_id, post_id, image_url, caption, likes, comments, timestamp, tags, vibe, lighting_quality, composition_quality, visual_appeal)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                  influencerId,
                  `post_${i}`,
                  `https://picsum.photos/400/400?random=${i}`,
                  `Amazing moment captured! #tag${i}`,
                  Math.floor(Math.random() * 5000) + 1000,
                  Math.floor(Math.random() * 500) + 50,
                  new Date(Date.now() - i * 86400000).toISOString(),
                  JSON.stringify(['tag1', 'tag2']),
                  'casual',
                  Math.floor(Math.random() * 30) + 70,
                  Math.floor(Math.random() * 20) + 80,
                  Math.floor(Math.random() * 25) + 75
                ]
              );
            }

            for (let i = 1; i <= 8; i++) {
              db.db.run(
                `INSERT INTO reels (influencer_id, reel_id, thumbnail_url, caption, views, likes, comments, timestamp, tags, vibe, events)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                  influencerId,
                  `reel_${i}`,
                  `https://picsum.photos/400/711?random=${i}`,
                  `Check out this amazing content! #reel${i}`,
                  Math.floor(Math.random() * 100000) + 10000,
                  Math.floor(Math.random() * 8000) + 2000,
                  Math.floor(Math.random() * 800) + 100,
                  new Date(Date.now() - i * 86400000).toISOString(),
                  JSON.stringify(['event1', 'event2']),
                  'party',
                  JSON.stringify(['scene1', 'scene2'])
                ]
              );
            }
          }
        );
      }
    });
  }

  getInfluencerProfile(username, callback) {
    const query = `
      SELECT i.*, a.authenticity_score, a.engagement_level, a.quality_score, 
             a.risk_level, a.trust_score, a.avg_likes, a.avg_comments, a.engagement_rate
      FROM influencers i
      LEFT JOIN analytics a ON i.id = a.influencer_id
      WHERE i.username = ?
    `;
    this.db.get(query, [username], callback);
  }

  getInfluencerPosts(influencerId, limit = 12, callback) {
    const query = `
      SELECT * FROM posts 
      WHERE influencer_id = ? 
      ORDER BY timestamp DESC 
      LIMIT ?
    `;
    this.db.all(query, [influencerId, limit], callback);
  }

  getInfluencerReels(influencerId, limit = 8, callback) {
    const query = `
      SELECT * FROM reels 
      WHERE influencer_id = ? 
      ORDER BY timestamp DESC 
      LIMIT ?
    `;
    this.db.all(query, [influencerId, limit], callback);
  }

  close() {
    this.db.close();
  }
}

const db = new Database();
module.exports = db;
