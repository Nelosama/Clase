
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/Components/Custom.Button';
import CustomContainer from './src/Components/Custom.Container';

export default function App() {
  const handleOnLogin = () => {
    console.log("Prueba desde App");
    alert('Login desde App');
  };

  const handleOnLogout = () => {
    alert('Logout desde App');
  };

  return (
    <View style={styles.screenContainer}>
      <CustomContainer style={styles.container}>
        <Text style={styles.title}>App de Daniel Castillo</Text>
        <StatusBar style="auto" />
        <CustomButton 
          title="Login" 
          onClick={handleOnLogin}
          backgroundColor="#2C3E50"
          textColor="#FFFFFF"
        />
        <View style={styles.spacer} />
        <CustomButton 
          title="Salir" 
          onClick={handleOnLogout}
          backgroundColor="#FFFFFF"
          textColor="#000000"
        />
      </CustomContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    borderWidth: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  spacer: {
    height: 15,
  },
});
