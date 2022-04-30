
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOsre-aHjVpGYuPRgp2qAIXegcvIYFtrA",
    authDomain: "warehouse-management-web-3fc33.firebaseapp.com",
    projectId: "warehouse-management-web-3fc33",
    storageBucket: "warehouse-management-web-3fc33.appspot.com",
    messagingSenderId: "71206405968",
    appId: "1:71206405968:web:61ffb4724cfd38ceefce55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;