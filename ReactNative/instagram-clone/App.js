import { StatusBar } from 'expo-status-bar';
import SignedInStack from './navigation';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <SignedInStack />
    // <LoginScreen />
  );
}

