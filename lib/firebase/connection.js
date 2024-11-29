import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC_S8aySVg9q1qfilYDY4It9l4Ums5f9VQ",
    authDomain: "neoflow-1.firebaseapp.com",
    databaseURL: "https://neoflow-1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "neoflow-1",
    storageBucket: "neoflow-1.appspot.com",
    messagingSenderId: "135927611427",
    appId: "1:135927611427:web:385d38ab38b64358d07196",
    measurementId: "G-V6ZMZPRE36"
}


const app = initializeApp(firebaseConfig)
export const realtime = getDatabase(app)
export const storage = getStorage(app)

// connectAuthEmulator(auth, 'http://192.168.0.105:9099');
// connectFirestoreEmulator(firestore, '192.168.0.105', 8080);
// connectStorageEmulator(storage, '192.168.0.105', 9199);