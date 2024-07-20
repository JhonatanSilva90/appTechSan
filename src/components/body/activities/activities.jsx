import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./activities.styles.js";

export function Activities(props) {
  const { showCleaningNumber = true } = props; //Permite que um dos itens não seja obrigatório
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.box}>
          <Image source={props.image} style={styles.image} />
          {showCleaningNumber && <Text style={styles.cleaningNumber}>10</Text>}
        </View>
      </TouchableOpacity>
    </>
  );
}
