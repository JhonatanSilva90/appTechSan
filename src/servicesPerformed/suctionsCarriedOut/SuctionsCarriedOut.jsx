import { NavigationBar } from "../../components/navigationbar/navigationBar.jsx";
import { Logo } from "../../components/logo/logo.jsx";
import { Header } from "../../components/body/header/header.jsx";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./SuctionsCarriedOut.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { ServiceIdentification } from "../../components/serviceIdentification/ServiceIdentification.jsx";
import images from "../../constantes/images.js";

export function SuctionsCarriedOut(props) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          <Logo />
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Image source={images.close} style={styles.imageClose} />
          </TouchableOpacity>
          <View>
            <Header />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.list}>
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="TRATERRA"
                unit="Litros"
                info="5.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="PAREX"
                unit="Litros"
                info="4.140"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="VALE"
                unit="Litros"
                info="16.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="MIP ENGENHARIA"
                unit="Litros"
                info="7.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="MIP ENGENHARIA"
                unit="Litros"
                info="15.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="MILPLAN ENGENHARIA"
                unit="Litros"
                info="16.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="OMEGA"
                unit="Litros"
                info="250"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="MIP ENGENHARIA"
                unit="Litros"
                info="10.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="A&L ENGENHARIA"
                unit="Litros"
                info="7.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="GONCALVES & DIAS"
                unit="Litros"
                info="5.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="GONCALVES & DIAS"
                unit="Litros"
                info="1.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="MIP ENGENHARIA"
                unit="Litros"
                info="16.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="CIVIL MASTER"
                unit="Litros"
                info="4.500"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="CIVIL MASTER"
                unit="Litros"
                info="1.000"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.caminhao}
                service="Coleta de Efluentes"
                client="VALE"
                unit="Litros"
                info="16.000"
              />
            </View>
          </ScrollView>
        </View>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
}
