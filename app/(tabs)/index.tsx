import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { useEffect, useState } from 'react';
import { registerForPushNotificationsAsync } from '../../services/PushNotifiactionControler';

export default function TabIndexScreen() {

  const [expoPushToken, setExpoPushToken] = useState<any>('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token?.data)
    );
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expo Push Token{'\n'}<Text style={{fontWeight: 'normal', fontSize: 14}}>{expoPushToken}</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
