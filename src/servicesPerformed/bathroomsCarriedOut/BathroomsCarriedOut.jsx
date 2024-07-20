import { NavigationBar } from "../../components/navigationbar/navigationBar.jsx";
import { Logo } from "../../components/logo/logo.jsx";
import { Header } from "../../components/body/header/header.jsx";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./BathroomsCarriedOut.styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { ServiceIdentification } from "../../components/serviceIdentification/ServiceIdentification.jsx";
import images from "../../constantes/images.js";

export function BathroomsCarriedOut(props) {
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
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="TRATERRA"
                unit="TAG"
                info="335"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="PAREX"
                unit="TAG"
                info="819"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="512"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="002"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="1011"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MILPLAN ENGENHARIA"
                unit="TAG"
                info="989"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="OMEGA"
                unit="TAG"
                info="791"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="089"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="A&L ENGENHARIA"
                unit="TAG"
                info="225"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="GONCALVES & DIAS"
                unit="TAG"
                info="639"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="GONCALVES & DIAS"
                unit="TAG"
                info="758"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="012"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="035"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="1009"
              />
              <ServiceIdentification
                backgroundColor="#0066CC"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="603"
              />
            </View>
          </ScrollView>
        </View>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
}
