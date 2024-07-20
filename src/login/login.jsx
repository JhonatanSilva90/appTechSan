import { View } from 'react-native';
import images from '../constantes/images';
import { styles } from './login.styles';
import { Logo } from '../components/logo/logo';
import { TextBoxLogin } from '../components/textBox/textBoxLogin/textBoxLogin';
import { useState } from 'react';
import { StartButton } from '../components/startButton/startButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../providers/AuthProvider';

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function processLogin() {
    login({ username, password });
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Logo />
          <View style={styles.formGroup}>
            <View style={styles.form}>
              <TextBoxLogin
                image={images.avatar}
                value={username}
                placeholder="Usuário"
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.form}>
              <TextBoxLogin
                image={images.padlock}
                value={password}
                placeholder="Senha"
                isPassword={true} //Para definir com um password e esconder o que está sendo digitado
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
          <View style={styles.buttonEnter}>
            <StartButton
              text="Entrar"
              textStartButtonStyle={styles.textStartButtonStyle}
              disabled={!username || !password}
              onPress={processLogin}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
