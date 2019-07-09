import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBoSbayCfSEpT4oi9PC7Ng8lSrm3t-Ggek",
    authDomain: "notereact-ba595.firebaseapp.com",
    databaseURL: "https://notereact-ba595.firebaseio.com",
    projectId: "notereact-ba595",
    storageBucket: "notereact-ba595.appspot.com",
    messagingSenderId: "532223803497",
    appId: "1:532223803497:web:6ebb217d18232909"
};
// Initialize Firebase
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote');

