import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../login/login';

export const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
