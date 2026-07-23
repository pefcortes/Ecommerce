import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD60eiUtMk0MKukK23VkrgJxdmvXx1Z5vQ',
  authDomain: 'club-ecommerce-2af3f.firebaseapp.com',
  projectId: 'club-ecommerce-2af3f',
  storageBucket: 'club-ecommerce-2af3f.firebasestorage.app',
  messagingSenderId: '158528110791',
  appId: '1:158528110791:web:445b6147fe5d3143fa3ee2',
  measurementId: 'G-68QTS5VFNF'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
