import { NavigationBar } from "../components/navigationbar/navigationBar.jsx";
import { Logo } from "../components/logo/logo.jsx";
import { Header } from "../components/body/header/header.jsx";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./PendingSignature.styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constantes/images.js";
import { useState } from "react";
import { CheckboxPendingSignature } from "../components/checkbox/checkboxPendingSignature/CheckboxPendingSignature.jsx";

export function PendingSignature({ navigation }) {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleCheckbox = (info) => {
    if (selectedServices.includes(info)) {
      setSelectedServices(selectedServices.filter((item) => item !== info));
    } else {
      setSelectedServices([...selectedServices, info]);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Logo />
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={images.close} style={styles.imageClose} />
          </TouchableOpacity>
          <View>
            <Header />
          </View>
          <View style={styles.signatureButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("SignatureCapture");
                // onPress(); // Fechar o menu após a navegação
              }}
            >
              <Text style={styles.signatureText}>Assinar</Text>
              <Image source={images.digitalSignature} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.list}>
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="PAREX"
                unit="TAG"
                info="819"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="512"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="002"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="1011"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MILPLAN ENGENHARIA"
                unit="TAG"
                info="989"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="OMEGA"
                unit="TAG"
                info="791"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="089"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="A&L ENGENHARIA"
                unit="TAG"
                info="225"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="GONCALVES & DIAS"
                unit="TAG"
                info="639"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="GONCALVES & DIAS"
                unit="TAG"
                info="758"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="012"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="035"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="CIVIL MASTER"
                unit="TAG"
                info="1009"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
              <CheckboxPendingSignature
                backgroundColor="#FFA500"
                image={images.banheiro}
                service="Limpeza de Banheiros"
                client="MIP ENGENHARIA"
                unit="TAG"
                info="603"
                selectedServices={selectedServices}
                toggleCheckbox={toggleCheckbox}
              />
            </View>
          </ScrollView>
        </View>
        <NavigationBar />
      </SafeAreaView>
    </>
  );
}
