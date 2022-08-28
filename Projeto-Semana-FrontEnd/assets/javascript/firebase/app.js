
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUiCULjH3XCyi2x1FPy6UcauPyZrKbBOw",
    authDomain: "projeto-teste-dc065.firebaseapp.com",
    projectId: "projeto-teste-dc065",
    storageBucket: "projeto-teste-dc065.appspot.com",
    messagingSenderId: "249611694902",
    appId: "1:249611694902:web:339cb1065f857421e4f997"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app