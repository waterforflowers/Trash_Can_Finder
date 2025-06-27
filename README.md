# TrashCanFinder - SPOTLESS (working title)

A web application for discovering, marking, and discussing trash can locations in your community.

## Features

- **Map & Routes**: Discover trash cans on Google Maps and plan walking routes
- **Mark Trash Can**: Add new trash can locations with photos
- **Community Chat**: Real-time chat for general discussions and trash can-specific conversations
- **Progress Tracking**: Track your walking distance, visited cans, and earn badges

## Setup Instructions

### 1. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Update `firebase-config.js` with your Firebase project details:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id",
   };
   ```

### 2. Google Maps API Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update the `GOOGLE_MAPS_API_KEY` in `firebase-config.js`

### 3. Firestore Rules

The `firestore.rules` file is already configured with appropriate security rules for:

- User authentication and profiles
- Public trash can data
- General and specific chat messages

Deploy these rules to your Firebase project:

```bash
firebase deploy --only firestore:rules
```

### 4. Run the Application

1. Start the local server:

   ```bash
   python3 -m http.server 8000
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8000/TrashCanFinder.html
   ```

## Usage

1. **Sign In**: Use the "Sign In" button to create an account or sign in anonymously
2. **Explore**: Use the Map & Routes tab to see existing trash cans
3. **Mark**: Add new trash can locations with the Mark Trash Can tab
4. **Chat**: Join community discussions in the Community Chat tab
5. **Track Progress**: Monitor your activity and badges in the My Progress tab

## File Structure

- `TrashCanFinder.html` - Main application file
- `firebase-config.js` - Firebase configuration
- `firestore.rules` - Firestore security rules
- `README.md` - This setup guide
- `lists & dictionaries` - Data management system

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Firebase Authentication & Firestore
- Google Maps API
- Tailwind CSS for styling
- Lucide Icons
