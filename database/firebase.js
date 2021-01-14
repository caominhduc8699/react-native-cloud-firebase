import firebase from 'firebase'
import 'firebase/firestore'


var firebaseConfig = {
apiKey: "AIzaSyBeWjnepLGLqWA_27Ir65njSLIJdq6_zEk",
authDomain: "react-native-firebase-a73fb.firebaseapp.com",
projectId: "react-native-firebase-a73fb",
storageBucket: "react-native-firebase-a73fb.appspot.com",
messagingSenderId: "397236808051",
appId: "1:397236808051:web:691f9cba146083edcb3d06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
    firebase,
    db
}