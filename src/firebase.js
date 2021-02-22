import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD1XoubU1Xh3yBRuJn07T2f_bhcru3a3ao",
  authDomain: "stocktrader-67fb8.firebaseapp.com",
  projectId: "stocktrader-67fb8",
  storageBucket: "stocktrader-67fb8.appspot.com",
  messagingSenderId: "857479975046",
  appId: "1:857479975046:web:7bb8d4a8a1c8ce1d628107"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };