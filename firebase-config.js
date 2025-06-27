// Firebase Configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "YOUR_APP_ID",
};

// Global variables for Canvas environment
window.__firebase_config = JSON.stringify(firebaseConfig);
window.__app_id = firebaseConfig.appId;
window.__initial_auth_token = null; // Set this if you have a custom auth token

// Google Maps API Key (replace with your actual key)
window.GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
