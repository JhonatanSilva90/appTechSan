import { createContext, useContext, useState } from 'react';
import { api } from '../api';
import Toast from 'react-native-toast-message';

const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  /**
   * @param {Object} param0
   * @param {string} param0.username
   * @param {string} param0.password
   */
  async function login({ username, password }) {
    try {
      const resp = await api.post('/auth/login', {
        username,
        password,
      });
      // add token to axios headers
      api.defaults.headers.authorization = `Bearer ${resp.data.access_token}`;

      const userData = await api.get('/profile');
      setUser(userData.data);
    } catch (error) {
      if (error.response?.status === 400) {
        return Toast.show({
          type: 'error',
          text1: 'Usuário ou senha inválidos',
        });
      }
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
      });
    }
  }

  function logout() {
    setUser(null);
    api.defaults.headers.authorization = '';
  }

  const contextObj = {
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextObj}>{children}</authContext.Provider>
  );
}

/**
 *
 * @returns {{user: Object, login: Function, logout: Function}}
 */
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
