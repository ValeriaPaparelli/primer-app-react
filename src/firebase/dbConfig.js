import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIGCNng04bzJ__7dY2WBeFtM8QHPvjMLs",
  authDomain: "primer-app-react.firebaseapp.com",
  projectId: "primer-app-react",
  storageBucket: "primer-app-react.appspot.com",
  messagingSenderId: "974824341777",
  appId: "1:974824341777:web:ed00b56754220930068cb0"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {

    return app;

}