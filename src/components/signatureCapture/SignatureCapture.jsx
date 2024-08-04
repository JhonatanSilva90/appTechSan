import { useRef } from "react";
import { TextBox } from "../../components/textBox/TextBox.jsx";
import { styles } from "./SignatureCapture.styles.js";
import { View } from "react-native";
import { ServiceOrderHeader } from "../orderOfService/header/serviceOrderHeader.jsx";
import Signature from "react-native-signature-canvas";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignatureCapture({ navigation }) {
  const ref = useRef(null);

  const handleSignature = (signature) => {
    console.log(signature);
    navigation.goBack();
  };

  const handleEmpty = () => {
    console.log("Empty");
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.area}>
          <View style={styles.header}>
            <ServiceOrderHeader
              text="Coletar Assinatura"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.information}>
            <TextBox
              text="Nome do aprovador(a)"
              placeholder="Nome do aprovador(a)"
            />
            <TextBox
              text="Matrícula do aprovador(a)"
              placeholder="Matrícula do aprovador(a)"
            />
          </View>
          <View style={styles.signatureContainer}>
            <Signature
              ref={ref}
              onOK={handleSignature}
              onEmpty={handleEmpty}
              descriptionText="Assine aqui"
              clearText="Limpar"
              confirmText="Salvar"
              autoClear={true}
              webStyle={`
                    .m-signature-pad--footer .button {
                    background-color: green;
                    color: white;
                    font-size: 18px;
                    border-radius: 5px;
                    border: none;
                    }
                    .m-signature-pad--footer .button.clear {
                    background-color: red;
                    }

                `}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
