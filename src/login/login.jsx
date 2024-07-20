import { View } from "react-native";
import images from "../constantes/images";
import { styles } from "./login.styles";
import { Logo } from "../components/logo/logo";
import { TextBoxLogin } from "../components/textBox/textBoxLogin/textBoxLogin";
import { useState } from "react";
import { StartButton } from "../components/startButton/startButton";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login(props) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  function processLogin() {
    console.log(usuario, password);
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
                value={usuario}
                placeholder="Usuário"
                onChangeText={(text) => setUsuario(text)}
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
              onPress={() => props.navigation.navigate("Overview")}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
