import { TextBox } from "../../components/textBox/TextBox.jsx";
import { styles } from "./ValidationServices.styles.js";
import { View } from "react-native";

import { useState } from "react";

export function ValidationServices({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <TextBox text="Nome do aprovador(a)" />
        <TextBox text="Matrícula do aprovador(a)" />
        <TextBox
          text="Assinatura do Aprovador(a)"
          inputBoxStyle={styles.mediumBox}
        />
      </View>
    </>
  );
}
