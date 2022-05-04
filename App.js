import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/authentication/login';
import SignUp from './components/authentication/signUp';
import Home from './components/home/home';
import Binance from "./components/binance/binance"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="binance"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="binance" component={Binance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;