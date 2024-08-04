import { styles } from "./ValidationServices.styles.js";
import { View, TouchableOpacity, Text, Image } from "react-native";
import images from "../../constantes/images.js";
import { useNavigation } from "@react-navigation/native";

export function ValidationServices() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("SignatureCapture");
          // onPress(); // Fechar o menu após a navegação
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Coletar Assinatura</Text>
          <Image source={images.digitalSignature} style={styles.image} />
        </View>
      </TouchableOpacity>
    </>
  );
}
