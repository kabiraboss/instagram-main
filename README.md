
#  Influencer Profile 

A comprehensive full-stack web application for analyzing Instagram influencer profiles with advanced analytics content analysis, and beautiful visualizations.

## Features

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
   git clone <https://github.com/kabiraboss/instagram-main/tree/main>
   cd instagram-main
  

3. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

4. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ``

 *Start the Development Environment*
   
    Run both servers separately 
   
   Terminal 1 (Frontend):
   ```bash
   npm run dev
   ```
   
   Terminal 2 (Backend):
   ```bash
   cd server
   npm start
   ```
   
 

 **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001


### Database Setup
The SQLite database is automatically initialized with sample data when the server starts. The database includes:
- Influencer profiles
- Posts and reels data  
- Analytics metrics
- Engagement history

## API Endpoints

- GET /api/influencer/:username - Get complete influencer profile with analytics
- POST /api/scrape/:username - Trigger scraping for new influencer data
- GET /api/analytics/:username - Get detailed engagement analytics
- GET /api/health - API health check

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
- Vibe classification and event detection
- This project simulates an AI/ML workflow for demonstration purposes. The predictions and training are random/static values, meant only to show how a real AI app would look. Future versions may integrate an actual ML model.

### Analytics Dashboard
- Daily engagement trend charts
- Content category performance
- Engagement distribution pie charts
- Key performance indicator cards

##  Development Workflow

### Making Changes
1. **Frontend changes** - Edit files in src/ directory
2. **Backend changes** - Edit files in server/ directory
3. **Database changes** - Modify   server/database.js
4. **Styling changes** - Edit  src/index.css

 File Structure

instagram-influencer-analytics/
├── src/                      Frontend React application
│   ├── components/         
│   ├── services/            API communication             
│   ├── App.jsx             
│   ├── main.jsx           
│   └── index.css          
├── server/                  Backend Express application
│   ├── server.js           
│   ├── database.js          Database operations
│   ├── scraper.js          
│   └── package.json         Backend dependencies
├── public/                 
├── package.json            
└── README.md              

## Project Features Demonstrated

 ✅ Modern frontend development with React and JavaScrip
 ✅ Backend API development with Express.js and SQLite
 ✅ Data engineering with scraping and processing pipelines
 ✅ Professional UI/UX design with responsive layouts
 ✅ Full-stack integration with REST API communication

