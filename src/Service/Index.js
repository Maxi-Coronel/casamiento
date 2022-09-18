import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBz6zA_3g8kR63pwSNaImZRqAQqSav7ONs",
    authDomain: "casamiento-49cea.firebaseapp.com",
    projectId: "casamiento-49cea",
    storageBucket: "casamiento-49cea.appspot.com",
    messagingSenderId: "400603757885",
    appId: "1:400603757885:web:383766ca69f07275d09954"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCollection = async(collections, filter, valueFilter) => {
  let collect = collection(db, collections);
  if (valueFilter) {
    collect = query(collect, where(filter, '==', valueFilter))
  }
  const collectionSnapshot = await getDocs(collect);
  const collectionList = collectionSnapshot.docs.map(doc => doc.data());
  return collectionList;
}

export const getById = async(id, collect) => {
  const objectById = doc(db, collect, id);
  const objectSnapshot = await getDoc(objectById)
  return objectSnapshot.data()
}

export const updateStock = async(productList) => {
  productList.map(item => {
    return setDoc(doc(db, 'products', item.id), {stock:item.stock - item.quantity}, { merge: true })
  });
}

export const sendDesire = async(user, desire) => {
  const dbDeseos = collection(db, "deseos")
  await addDoc(dbDeseos, {
    user: user,
    desire: desire
  }).then(dbDeseos => {
    console.log(dbDeseos.id);
})
.catch(error => {
    console.log(error);
})
}

export const sendUser = async(user, id) => {
  const collectionRef = collection(db, "users");
  await setDoc(doc(collectionRef, id), {
    user: user });
}