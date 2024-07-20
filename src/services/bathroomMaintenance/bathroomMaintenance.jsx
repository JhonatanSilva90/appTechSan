import { NavigationBar } from "../../components/navigationbar/navigationBar.jsx";
import { Logo } from "../../components/logo/logo.jsx";
import { Header } from "../../components/body/header/header.jsx";
import { Activities } from "../../components/body/activities/activities.jsx";
import { View } from "react-native";
import { styles } from "./bathroomMaintenance.styles.js";
import images from "../../constantes/images.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu } from "../../components/menu/menu.jsx";
import { useState } from "react";

export function BathroomMaintenance({ navigation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Logo />
          <View>
            <View style={styles.header}>
              <Header />
            </View>
          </View>
          <View style={styles.row}>
            <Activities
              image={images.maintenance}
              text="INICIAR MANUTENÇÃO"
              showCleaningNumber={false}
              onPress={() => {
                // props.navigation.navigate("Menu");
                setIsSidebarOpen(true);
              }}
            />
          </View>
        </View>
        <NavigationBar />
        {isSidebarOpen && (
          <Menu
            navigation={navigation}
            onPress={() => setIsSidebarOpen(false)}
          />
        )}
      </SafeAreaView>
    </>
  );
}
