import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NotificationContext } from './Notification Provider';

const NotificationsPage = () => {
  const { notifications } = useContext(NotificationContext);

  if (!notifications) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>New post added: {item.P_Name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notification: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsPage;
