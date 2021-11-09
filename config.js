import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCFLCBkoAs9iR-onvL0-GccMLrdjL6EOPc",
    authDomain: "team-voting-eead2.firebaseapp.com",
    databaseURL: "https://team-voting-eead2-default-rtdb.firebaseio.com",
    projectId: "team-voting-eead2",
    storageBucket: "team-voting-eead2.appspot.com",
    messagingSenderId: "723633541472",
    appId: "1:723633541472:web:ce915350e241f436514e05"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();