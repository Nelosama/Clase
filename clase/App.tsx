
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/Components/Custom.Button';

export default function App() {
  const handleOnLogin = () => {
    console.log("Prueba desde App");
    alert('Login desde App');
  };

  const handleOnLogout = () => {
    alert('Logout desde App');
  };

  return (
    <View style={styles.container}>
      <Text>Open up App</Text>
      <StatusBar style="auto" />
      <CustomButton title="Login" onClick={handleOnLogin} />
      <CustomButton title="Logout" onClick={handleOnLogout} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    borderWidth: 2,
    backgroundColor: '#c3cad8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
