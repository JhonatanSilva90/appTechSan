import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./finishExecutionButton.styles.js";

export function FinishExecutionButton() {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.textStartButton}>Concluir Execução</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
