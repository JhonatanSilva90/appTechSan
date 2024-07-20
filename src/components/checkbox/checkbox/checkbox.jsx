import { Text, View } from "react-native";
import { styles } from "./checkbox.styles.js";
import Checkbox from "expo-checkbox";

export function CheckBox(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <Checkbox style={styles.checkbox} />
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </View>
    </>
  );
}
