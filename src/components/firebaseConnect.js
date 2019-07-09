import * as firebase from 'firebase'
var config = {
    //config
};
// Initialize Firebase
firebase.initializeApp(config);
export const noteData = firebase.database().ref('dataForNote');

