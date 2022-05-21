import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/firestore'; //v9
import 'firebase/compat/storage';



const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
       apiKey: 'AIzaSyAdpCFPqmtkB6VBCFj0OW_AIcC_dWYSvDk',
	authDomain: 'facebook-c2137.firebaseapp.com',
	projectId: 'facebook-c2137',
	storageBucket: 'facebook-c2137.appspot.com',
	messagingSenderId: '57750969637',
	appId: '1:57750969637:web:29b569a101a125a14ccecc',
      
    });
    const db=firebaseApp.firestore();
    const storage = firebase.storage();
     export { db, storage };