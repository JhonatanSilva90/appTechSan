import { Image, View, Text, TouchableOpacity } from "react-native";
import images from "../../../constantes/images.js";
import { styles } from "./serviceOrderHeader.styles.js";

export function ServiceOrderHeader(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.whiteText}>{props.text}</Text>
        <TouchableOpacity onPress={props.onPress}>
          <Image style={styles.logo} source={images.close} />
        </TouchableOpacity>
      </View>
    </>
  );
}
