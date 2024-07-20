import { View, Image, TextInput } from "react-native";
import { styles } from "./textBoxLogin.styles.js";

export function TextBoxLogin(props) {
  return (
    <>
      <View style={styles.inputBox}>
        <Image style={styles.images} source={props.image} />
        <TextInput
          placeholder={props.placeholder}
          secureTextEntry={props.isPassword} //Para definir com um password e esconder o que está sendo digitado
          onChangeText={(text) => props.onChangeText(text)}
          value={props.value}
        />
      </View>
    </>
  );
}
