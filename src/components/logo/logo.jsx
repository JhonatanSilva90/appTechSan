import { Image, View, Text } from "react-native";
import images from "../../constantes/images";
import { styles } from "./logo.styles";
export function Logo() {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={images.logoTechSan} />
        <Text style={styles.whiteText}>TechSan</Text>
      </View>
    </>
  );
}
