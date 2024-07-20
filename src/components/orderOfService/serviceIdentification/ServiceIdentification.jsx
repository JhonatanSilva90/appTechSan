import { View } from "react-native";
import { styles } from "./ServiceIdentification.styles";
import { CheckBox } from "../../checkbox/checkbox/checkbox";
import { TextBox } from "../../textBox/TextBox";

export function ServiceIdentification() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <CheckBox text="Próprio" />
          <CheckBox text="De terceiro" />
          <TextBox text="Patrimônio" />
        </View>
      </View>
    </>
  );
}
