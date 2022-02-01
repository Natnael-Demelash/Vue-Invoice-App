import * as firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBZ2CnkmXCFzIkvGIDvK9A3ybxqd3Ro9pM",
    authDomain: "invoice-app-7eec9.firebaseapp.com",
    projectId: "invoice-app-7eec9",
    storageBucket: "invoice-app-7eec9.appspot.com",
    messagingSenderId: "920311379551",
    appId: "1:920311379551:web:35d8110cce3164103c0dea"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();