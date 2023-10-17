import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Account() {

  const [loading, setLoading] = useState<boolean>(false)

  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.replace("/(auth)/login")
    }, 1000)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => handleLogin()}
      >
        {loading ?
        <ActivityIndicator color={'white'}/>
        :
        <Text style={styles.title}>Logout</Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  btn: {
    width: '100%',
    height: 52,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  }
});
