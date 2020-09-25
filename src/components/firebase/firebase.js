import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const Config = {

  apiKey: "AIzaSyBwWlv7CheEtrkpYbavzRx14tcqFrncW54",
  authDomain: "vrwn-shop.firebaseapp.com",
  databaseURL: "https://vrwn-shop.firebaseio.com",
  projectId: "vrwn-shop",
  storageBucket: "vrwn-shop.appspot.com",
  messagingSenderId: "246798306694",
  appId: "1:246798306694:web:853babaee95cb2bf26f007",
  measurementId: "G-EW992WPYVH"

};


firebase.initializeApp(Config);



export default firebase;

