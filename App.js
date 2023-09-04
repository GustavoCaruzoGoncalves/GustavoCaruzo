import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TelaLogin from './src/TelaLogin';
import Login from './src/Login';

export default function App() {
  return (
    
    <SafeAreaView style= {styles.container}>
      <Login/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
