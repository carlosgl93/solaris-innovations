import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAqxTVwztAlxjAugJD0sHhZqs0pW8eq2i8',
  authDomain: 'solaris-inovations.firebaseapp.com',
  projectId: 'solaris-inovations',
  storageBucket: 'solaris-inovations.firebasestorage.app',
  messagingSenderId: '394208388835',
  appId: '1:394208388835:web:a38bc7515acf26c32907d6',
  measurementId: 'G-DPHHYG36GS',
};

export const app = initializeApp(firebaseConfig);

// Analytics only runs in browser environments
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
