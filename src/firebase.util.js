import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyByuUvkRDDmuAMJXoL6FCeRwqWjHfWet0Y",
    authDomain: "linkedin-clone-4e8c3.firebaseapp.com",
    projectId: "linkedin-clone-4e8c3",
    storageBucket: "linkedin-clone-4e8c3.appspot.com",
    messagingSenderId: "753714944626",
    appId: "1:753714944626:web:3d7c7be0cac97cd6b840eb"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export {db,auth};