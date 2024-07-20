import { Text, View, Image, TouchableOpacity } from "react-native";
import images from "../../constantes/images";
import { styles } from "./menu.styles";

export function Menu({ navigation, onPress }) {
  return (
    <>
      <View style={styles.navigation}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("QrCode")}
          >
            <Text style={styles.text}>Ler QR Code</Text>
            <View style={styles.backgroundImage}>
              <Image style={styles.images} source={images.qrcode} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {
              navigation.navigate("BathroomCleaningOrder");
              onPress(); // Fechar o menu após a navegação
            }}
          >
            <Text style={styles.text}>Criar OS</Text>
            <View style={styles.backgroundImage}>
              <Image style={styles.images} source={images.plus} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.navItem} onPress={onPress}>
            <View style={styles.backgroundImage}>
              <Image style={styles.imageClose} source={images.close} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
