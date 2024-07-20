// import { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";
// import { CameraView, Camera } from "expo-camera";
// import { styles } from "./QrCode.styles";

// export default function QrCode() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     const getCameraPermissions = async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     };

//     getCameraPermissions();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView
//         onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
//         barcodeScannerSettings={{
//           barcodeTypes: ["qr", "pdf417"],
//         }}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && (
//         <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
// }

// Importa os hooks useState e useEffect
import { useState, useEffect } from "react";
// Importa componentes básicos do React Native
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
// Importa componentes relacionados à câmera do Expo
import { CameraView, Camera } from "expo-camera";
// Importa estilos específicos para o componente QrCode
import { styles } from "./QrCode.styles";
import images from "../constantes/images";

// Declaração do componente QrCode como uma função
export function QrCode({ navigation }) {
  // Declara o estado hasPermission com useState
  const [hasPermission, setHasPermission] = useState(null);
  // Declara o estado scanned com useState
  const [scanned, setScanned] = useState(false);

  // Para obter permissões da câmera ao montar o componente
  useEffect(() => {
    // Função assíncrona para solicitar as permissões da câmera
    const getCameraPermissions = async () => {
      // Solicita as permissões da câmera usando o Expo Camera
      const { status } = await Camera.requestCameraPermissionsAsync();
      // Atualiza o estado hasPermission baseado no status da permissão
      setHasPermission(status === "granted");
    };

    // Chama a função para obter as permissões da câmera ao montar o componente
    getCameraPermissions();
  }, []); // O segundo argumento vazio [] faz com que este useEffect seja executado apenas uma vez ao montar o componente

  // Função para lidar com o escaneamento de códigos de barras
  const handleBarCodeScanned = ({ type, data }) => {
    // Define scanned como true indicando que um código foi escaneado
    setScanned(true);
    // Exibe um alerta com o tipo e os dados do código escaneado
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // Verifica se as permissões da câmera ainda estão sendo solicitadas
  if (hasPermission === null) {
    // Retorna um texto indicando que está solicitando permissão para a câmera
    return <Text>Requesting for camera permission</Text>;
  }

  // Verifica se o acesso à câmera foi negado
  if (hasPermission === false) {
    // Retorna um texto indicando que não há acesso à câmera
    return <Text>No access to camera</Text>;
  }

  // Renderiza um componente View com estilo aplicado
  return (
    <SafeAreaView style={styles.container}>
      <CameraView
        // Configura um callback para lidar com o escaneamento de códigos de barras
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          // Configura os tipos de códigos de barras a serem escaneados (QR e PDF417)
          barcodeTypes: ["qr", "pdf417"],
        }}
        // Aplica um estilo para preencher todo o espaço disponível
        // style={StyleSheet.absoluteFillObject}
        style={styles.cameraView} // Estilo ajustado para respeitar o SafeAreaView
      >
        {/* Botão de voltar na parte superior */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.closeCamera} style={styles.imageCloseCamera} />
        </TouchableOpacity>

        {/* Renderiza um botão se um código de barras foi escaneado */}
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </CameraView>
    </SafeAreaView>
  );
}
