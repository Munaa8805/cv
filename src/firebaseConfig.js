import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVPJSUzOwSWP7WkikTl2wILKfh4BaqI7k",
  authDomain: "cv-app-55f28.firebaseapp.com",
  projectId: "cv-app-55f28",
  storageBucket: "cv-app-55f28.appspot.com",
  messagingSenderId: "211850382084",
  appId: "1:211850382084:web:824a8531c626ff9736de51",
  measurementId: "G-7D6T4JSMZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
