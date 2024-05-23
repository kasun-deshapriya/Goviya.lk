import React, { useEffect, useState, createContext } from 'react';
import { Alert } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseconfig'; // Import your Firebase configuration

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Post'), (snapshot) => {
      const newPosts = snapshot.docChanges().filter(change => change.type === 'added').map(change => ({
        id: change.doc.id,
        ...change.doc.data(),
      }));

      if (newPosts.length > 0) {
        setNotifications((prevNotifications) => [...prevNotifications, ...newPosts]);
        newPosts.forEach(post => {
          Alert.alert('New Post', `New post added: ${post.P_Name}`);
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
