
## Setup

### Frontend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```

### Backend (Server with Database)

The backend stores quiz results in a SQLite database and provides REST API endpoints for score management.

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:3001`

### API Endpoints

- **GET** `/api/scores` - Get top 100 scores sorted by percentage
- **GET** `/api/scores/history` - Get last 500 score attempts with full history
- **GET** `/api/scores/player/:nickname` - Get all attempts by a specific player
- **POST** `/api/scores` - Save a new score
  ```json
  {
    "nickname": "Player Name",
    "score": 8,
    "total": 10,
    "percentage": 80,
    "settings": "Q: 10, T: 30s"
  }
  ```
- **DELETE** `/api/scores` - Clear all scores

### Features

- **Ranking Tab**: Shows top scores from all players
- **History Tab**: Shows chronological history of all quiz attempts
- **Server Storage**: Scores are persisted in SQLite database
- **Fallback**: If server is unavailable, scores are saved locally to localStorage

### Requirements

- Node.js 14+
- npm or yarn

