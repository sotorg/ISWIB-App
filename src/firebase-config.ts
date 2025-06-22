// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB8c--YA_dStGomyUghQ7l9hx1E36LTV8c",
  authDomain: "iswib-app-f9b80.firebaseapp.com",
  projectId: "iswib-app-f9b80",
  storageBucket: "iswib-app-f9b80.firebasestorage.app",
  messagingSenderId: "36879671005",
  appId: "1:36879671005:web:b3a42b809d49fe6d95c534",
  measurementId: "G-E0KJH7S2HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Export app and analytics if needed in other parts of your project
export { app, analytics };
