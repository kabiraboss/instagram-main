const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchInfluencerProfile = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/api/influencer/${username}`);
    if (!res.ok) throw new Error('Failed to fetch influencer profile');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};


export const fetchEngagementData = async (username) => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/${username}`);
    if (!res.ok) throw new Error('Failed to fetch engagement data');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
