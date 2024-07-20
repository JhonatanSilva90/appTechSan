import { View, Text, TextInput } from "react-native";
import { styles } from "./TextBox.styles.js";

export function TextBox(props) {
  const { inputBoxStyle, text } = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={[styles.inputBox, inputBoxStyle]}>
          <TextInput placeholder={props.placeholder}></TextInput>
        </View>
      </View>
    </>
  );
}
