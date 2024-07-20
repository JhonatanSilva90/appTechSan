import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../providers/AuthProvider';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
      <AppRoutes />
    </NavigationContainer>
  );
}
