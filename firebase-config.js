import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyBgqThQG1OCvFyYRE2qbv3hT2OWDe3jyuE",
    authDomain: "smart-complaints-f7d14.firebaseapp.com",
    databaseURL: "https://smart-complaints-f7d14-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-complaints-f7d14",
    storageBucket: "smart-complaints-f7d14.appspot.com",
    messagingSenderId: "104285935627",
    appId: "1:104285935627:web:821baf1413238d13c80f0e",
    measurementId: "G-82JGC0QG3E"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);