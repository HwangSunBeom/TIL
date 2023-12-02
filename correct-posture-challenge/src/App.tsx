import React, { useEffect } from "react";
import { Typography } from 'antd';
import logo from "./logo.svg";
import "./App.css";
import Webcam from "./screens/components/WebCam";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getMessaging, getToken } from "firebase/messaging";
import { BrowserRouter } from "react-router-dom";

const { Title } = Typography;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2bUnhfuoRy390Y2nQ4_V_HYB-Uqb8Lpk",
  authDomain: "correct-posture-challenge.firebaseapp.com",
  projectId: "correct-posture-challenge",
  storageBucket: "correct-posture-challenge.appspot.com",
  messagingSenderId: "388546468221",
  appId: "1:388546468221:web:f229317f87d362ca641414",
  measurementId: "G-WZJP6MWFZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BGlRur5v2gIi6TCQidSwcwnvGL3AJMH-YmflCXXVqiEc9qj_8wariKQVMwLziQHMXG9t_tG83e5EyDByI",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

function App() {
  // useEffect(() => {
  //   console.log('Requesting permission...');
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       console.log('Notification permission granted.');
  //     }
  //   })
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" style={{height:'fit-content'}}>
          <Typography.Title level={2} style={{color:'white'}}>바른 자세 챌린지</Typography.Title>
        </header>
        <Webcam />
      </div>
    </BrowserRouter>
  );
}

export default App;
