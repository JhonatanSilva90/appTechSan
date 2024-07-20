import { Text, View, Image } from "react-native";
import images from "../constantes/images";
import { styles } from "./overview.styles.js";
import { NavigationBar } from "../components/navigationbar/navigationBar.jsx";
import { Logo } from "../components/logo/logo.jsx";
import { Activities } from "../components/body/activities/activities.jsx";
import { SafeAreaView } from "react-native-safe-area-context";

export function Overview(props) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Logo />
          <View style={styles.userIdentification}>
            <Image style={styles.imageUser} source={images.avatar} />
            <Text style={styles.nameUser}>Jhonatan Silva</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.row}>
              <Activities
                text="LIMPEZA DE BANHEIROS"
                image={images.banheiro}
                onPress={() => props.navigation.navigate("CleaningBathrooms")}
              />
              <Activities
                text="COLETA DE EFLUENTES"
                image={images.caminhao}
                onPress={() => props.navigation.navigate("EfluentSuction")}
              />
            </View>
            <Activities
              text="MANUTENÇÃO DE BANHEIROS"
              image={images.maintenance}
              onPress={() => props.navigation.navigate("BathroomMaintenance")}
            />
          </View>
        </View>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
}
