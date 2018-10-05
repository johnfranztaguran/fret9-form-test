import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDPFLszs_cX56OjyeTxKwTahtPBHzSSEwU",
  authDomain: "fret9db.firebaseapp.com",
  databaseURL: "https://fret9db.firebaseio.com",
  projectId: "fret9db",
  storageBucket: "fret9db.appspot.com",
  messagingSenderId: "528157799601"
};
const firebaseApp = firebase.initializeApp(config);
export default firebaseApp;