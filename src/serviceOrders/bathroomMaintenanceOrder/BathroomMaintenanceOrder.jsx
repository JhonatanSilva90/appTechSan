import { View, ScrollView } from "react-native";
import { Logo } from "../../components/logo/logo.jsx";
import { ServiceOrderHeader } from "../../components/orderOfService/header/serviceOrderHeader.jsx";
import { ServiceOrderImage } from "../../components/orderOfService/serviceOrderImage/serviceOrderImage.jsx";
import { styles } from "./BathroomMaintenanceOrder.styles.js";
import { FinishExecutionButton } from "../../components/orderOfService/finishExecutionButton/finishExecutionButton.jsx";
import { ServiceIdentification } from "../../components/orderOfService/serviceIdentification/ServiceIdentification.jsx";
import { TextBox } from "../../components/textBox/TextBox.jsx";
import images from "../../constantes/images.js";
import { TakePicture } from "../../components/takePicture/TakePicture.jsx";
import { SafeAreaView } from "react-native-safe-area-context";
import { ValidationServices } from "../../components/validationServices/ValidationServices.jsx";

export function BathroomMaintenanceOrder(props) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Logo />
          <ServiceOrderHeader text="Ordem de Serviço"
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.order}>
            <View style={styles.serviceIdentification}>
              <ServiceOrderImage imageSource={images.maintenance} />
              <ServiceIdentification />
            </View>
            <TextBox text="Ajudante" placeholder="Lista suspensa" />
            <TextBox text="Cliente" placeholder="Lista suspensa" />
            <TextBox
              text="Itens trocados"
              placeholder="Lista suspensa"
              inputBoxStyle={styles.largeBox}
            />
            <TextBox
              text="Observação"
              placeholder="Lista suspensa"
              inputBoxStyle={styles.largeBox}
            />
            <TakePicture />
            <ValidationServices />
          </View>
        </ScrollView>
      </SafeAreaView>
      <FinishExecutionButton />
    </>
  );
}
