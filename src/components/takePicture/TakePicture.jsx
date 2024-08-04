import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TakePicture.styles.js";
import images from "../../constantes/images.js";
import { useState } from "react";

export function TakePicture({ navigation }) {
  const [showCamera, setShowCamera] = useState(false);
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        // onPress={() => handleTakePicture()}
        onPress={() => {
          navigation.navigate("Camera");
          // onPress(); // Fechar o menu após a navegação
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Adicionar Foto</Text>
          <Image source={images.dslrCamera} style={styles.image} />
        </View>
      </TouchableOpacity>
    </>
  );
}
