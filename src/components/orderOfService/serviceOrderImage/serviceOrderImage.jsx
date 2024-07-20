import { View, Image } from "react-native";
import { styles } from "./serviceOrderImage.styles.js";
import images from "../../../constantes/images.js";

export function ServiceOrderImage(props) {
  const { imageSource = images.banheiro } = props; //Permite que um dos itens não seja obrigatório
  return (
    <>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
      </View>
    </>
  );
}
