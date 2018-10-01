import firebase, { initializeApp } from 'firebase';

let config = {
    apiKey: "AIzaSyDbyQqVFGx1J9OiUu_p-jk9nc3765OLulA",
    authDomain: "englishkids-a2cd5.firebaseapp.com",
    databaseURL: "https://englishkids-a2cd5.firebaseio.com",
    projectId: "englishkids-a2cd5",
    storageBucket: "englishkids-a2cd5.appspot.com",
    messagingSenderId: "416241209630"
};

firebase.initializeApp(config);

export default firebase;