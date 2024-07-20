import Toast from 'react-native-toast-message';
import { Routes } from './src/routes';
import { AuthProvider } from './src/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <Toast />
    </AuthProvider>
  );
}
