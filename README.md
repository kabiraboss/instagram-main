# Instagram Influencer Profile Analytics

A comprehensive full-stack web application for analyzing Instagram influencer profiles with advanced analytics, AI-powered content analysis, and beautiful visualizations.

## 🌟 Features

### Frontend
- **Modern React Application**: Built with JavaScript, CSS, and Lucide React icons
- **Responsive Design**: Optimized for all device sizes with a mobile-first approach
- **Dark Theme Interface**: Professional dark mode design matching industry standards
- **Interactive Analytics**: Dynamic charts and visualizations for engagement metrics
- **Real-time Data**: Live updates of influencer statistics and content analysis

### Backend
- **REST API**: Express.js server with SQLite database
- **Instagram Scraping**: Simulated scraping pipeline with realistic data generation
- **Data Processing**: AI-powered image and video analysis capabilities
- **Analytics Engine**: Advanced metrics calculation including authenticity and trust scores

### Key Metrics & Analytics
- **Profile Analytics**: Authenticity score, engagement level, quality rating, risk assessment
- **Content Analysis**: AI-generated tags, vibe classification, quality indicators
- **Engagement Tracking**: Daily trends, category performance, content distribution
- **Personality Insights**: Trait analysis with visual progress indicators
- **Interest Mapping**: Circular visualizations of content interests

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager
- VS Code (recommended)

### Installation Steps

1. **Download/Clone the Project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd instagram-influencer-analytics
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Start the Development Environment**
   
   **Option 1: Run both servers separately (Recommended)**
   
   Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```
   
   Terminal 2 (Backend):
   ```bash
   cd server
   npm start
   ```
   
   **Option 2: Run with concurrently (if installed)**
   ```bash
   npm install -g concurrently
   npx concurrently "npm run dev" "cd server && npm start"
   ```

5. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

### Database Setup
The SQLite database is automatically initialized with sample data when the server starts. The database includes:
- Influencer profiles
- Posts and reels data  
- Analytics metrics
- Engagement history

## 📊 API Endpoints

- `GET /api/influencer/:username` - Get complete influencer profile with analytics
- `POST /api/scrape/:username` - Trigger scraping for new influencer data
- `GET /api/analytics/:username` - Get detailed engagement analytics
- `GET /api/health` - API health check

## 🔧 Technology Stack

### Frontend
- React 18 + JavaScript
- CSS for styling
- Lucide React for icons
- Recharts for data visualization

### Backend
- Node.js + Express.js
- SQLite database
- Axios for HTTP requests
- CORS for cross-origin requests

## 🛠️ VS Code Setup

### Recommended Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer
- SQLite Viewer (to view database)

### VS Code Settings
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## 📱 Interface Highlights

### Profile Dashboard
- Left sidebar navigation with minimal icons
- Central profile section with user details and contact options
- Main dashboard with key performance metrics cards
- Personality traits with animated progress bars
- Interest distribution with circular progress indicators

### Content Analysis
- Posts grid with engagement overlays
- Reels gallery with video previews  
- AI-generated tags and quality scores
- Vibe classification and event detection

### Analytics Dashboard
- Daily engagement trend charts
- Content category performance
- Engagement distribution pie charts
- Key performance indicator cards

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3001
   npx kill-port 3001
   # Kill process on port 5173
   npx kill-port 5173
   ```

2. **Database not found**
   - The database is created automatically when the server starts
   - Check if `server/influencer_analytics.db` exists after running the backend

3. **API connection issues**
   - Ensure backend is running on port 3001
   - Check browser console for CORS errors
   - Verify API endpoints are accessible

4. **Dependencies issues**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🔄 Development Workflow

### Making Changes
1. **Frontend changes** - Edit files in `src/` directory
2. **Backend changes** - Edit files in `server/` directory
3. **Database changes** - Modify `server/database.js`
4. **Styling changes** - Edit `src/index.css`

### File Structure
```
instagram-influencer-analytics/
├── src/                     # Frontend React application
│   ├── components/          # React components
│   ├── services/           # API communication
│   ├── types/              # Type definitions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # All styles
├── server/                 # Backend Express application
│   ├── server.js           # Main server file
│   ├── database.js         # Database operations
│   ├── scraper.js          # Instagram scraping logic
│   └── package.json        # Backend dependencies
├── public/                 # Static assets
├── package.json            # Frontend dependencies
└── README.md              # This file
```

## 🚀 Deployment

### Production Build
```bash
# Build frontend
npm run build

# The built files will be in the 'dist' directory
# Serve them with your preferred web server
```

### Environment Variables
Create `.env` file in root directory:
```
VITE_API_URL=http://localhost:3001
```

Create `.env` file in server directory:
```
PORT=3001
NODE_ENV=development
```

## 📈 Scaling Considerations

- Database can be migrated to PostgreSQL for production
- Redis caching layer for improved performance
- Rate limiting and authentication for API security
- Real-time WebSocket connections for live updates
- Microservices architecture for larger deployments

## 🎯 Project Features Demonstrated

1. ✅ Modern frontend development with React and JavaScript
2. ✅ Backend API development with Express.js and SQLite
3. ✅ Data engineering with scraping and processing pipelines
4. ✅ AI-powered content analysis and classification
5. ✅ Professional UI/UX design with responsive layouts
6. ✅ Full-stack integration with REST API communication
7. ✅ Code quality with proper error handling and modular architecture

The application provides a production-ready foundation for Instagram influencer analytics with room for scaling and additional feature integration.

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all dependencies are installed correctly
3. Verify both frontend and backend servers are running
4. Check browser console for any error messages

Happy coding! 🚀