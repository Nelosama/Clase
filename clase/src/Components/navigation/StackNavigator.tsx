
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Profile: { userId: string };
    Settings: undefined;
};
const Stack = createNativeStackNavigator<>();


export default function StackNavigator() {

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>

    );

}
        