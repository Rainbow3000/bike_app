import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBdKe4t7GlxXx2Uu4yR7damkwSTF27Ave0",
  authDomain: "bike-store-3fd70.firebaseapp.com",
  projectId: "bike-store-3fd70",
  storageBucket: "bike-store-3fd70.appspot.com",
  messagingSenderId: "1085922984623",
  appId: "1:1085922984623:web:ca58febfdd856200fb0a5a",
  measurementId: "G-9X42Y91LY0"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app); 


export default storage; 
