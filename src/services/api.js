
const mockProfileData = {
  basicInfo: {
    name: 'Rohit kumar',
    username: 'KABIRA',
    profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    location: 'India',
    age: 21,
    status: 'Single',
    occupation: 'Software Developer',
    company: 'Primaspot',
    followers: '125.4K',
    following: '1,284',
    posts: '847',
    verified: true
  },
  analytics: {
    authenticity: 85,
    engagement: 'Mid',
    qualityScore: 8.2,
    riskLevel: 'Low Risk',
    trustScore: 8.0,
    avgLikes: 2834,
    avgComments: 156,
    engagementRate: 3.2
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
posts: Array.from({ length: 12 }, (_, i) => ({
  id: `post_${i + 1}`,
  imageUrl: `https://images.pexels.com/photos/${[
    "33330141",
    "574071",
    "1181533",
    "1181519",
    "1181467",
    "1181298",
    "1181316",
    "1181354",
    "1181373",
    "1181396",  
    "1181414",  
    "1181533"   
  ][i]}/pexels-photo-${[
    "33330141",
    "574071",
    "1181533",
    "1181519",
    "1181467",
    "1181298",
    "1181316",
    "1181354",
    "1181373",
    "1181396",
    "1181414",
    "1181533"
  ][i]}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
  caption: `Amazing moment captured! ${
    ["#travel", "#lifestyle", "#tech", "#sports"][
      Math.floor(Math.random() * 4)
    ]
  }`,
  likes: Math.floor(Math.random() * 5000) + 1000,
  comments: Math.floor(Math.random() * 500) + 50,
  timestamp: new Date(
    Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
  ).toISOString(),
  tags: ["lifestyle", "professional", "technology"],
  vibe: ["casual", "aesthetic", "energetic"][Math.floor(Math.random() * 3)],
  quality: {
    lighting: Math.floor(Math.random() * 30) + 70,
    composition: Math.floor(Math.random() * 20) + 80,
    visualAppeal: Math.floor(Math.random() * 25) + 75,
  },
})),

 reels: Array.from({ length: 8 }, (_, i) => ({
  id: `reel_${i + 1}`,
  thumbnailUrl: `https://images.pexels.com/photos/${[
    "3225517",
    "3771787",
    "4348401",
    "3768894",
    "4348404",
    "3771791",
    "4348405",
    "3768892"
  ][i]}/pexels-photo-${[
    "3225517",
    "3771787",
    "4348401",
    "3768894",
    "4348404",
    "3771791",
    "4348405",
    "3768892"
  ][i]}.jpeg?auto=compress&cs=tinysrgb&w=400&h=711&fit=crop`,
  caption: `Check out this amazing content! ${
    ["#reels", "#viral", "#trending"][Math.floor(Math.random() * 3)]
  }`,
  views: Math.floor(Math.random() * 100000) + 10000,
  likes: Math.floor(Math.random() * 8000) + 2000,
  comments: Math.floor(Math.random() * 800) + 100,
  timestamp: new Date(
    Date.now() - Math.random() * 15 * 24 * 60 * 60 * 1000
  ).toISOString(),
  tags: ["entertainment", "lifestyle", "viral"],
  vibe: ["party", "travel luxury", "casual daily life"][Math.floor(Math.random() * 3)],
  events: ["person talking", "outdoor scene", "lifestyle content"],
})),

};

export const fetchInfluencerProfile = async (username) => {
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockProfileData;
};

export const fetchEngagementData = async (username) => {
  
  return {
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
};