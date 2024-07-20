import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./TakePicture.styles.js";
import images from "../../constantes/images.js";
import { useState } from "react";

export function TakePicture({ navigation }) {
  const [showCamera, setShowCamera] = useState(false);

  // function handleTakePicture() {
  //   navigation.navigate("Camera"); // Navega para o componente Camera
  //   console.log("certo");
  // }
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        // onPress={() => handleTakePicture()}
        onPress={() => {
          navigation.navigate("Camera");
          // onPress(); // Fechar o menu após a navegação
        }}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Adicionar Foto</Text>
          <Image source={images.dslrCamera} style={styles.image} />
        </View>
      </TouchableOpacity>
    </>
  );
}

// import { useState } from "react";
// import { View, TouchableOpacity, Text, Image } from "react-native";
// import { Camera } from "../../Camera.jsx"; // Verifique o caminho correto do seu componente Camera
// import images from "../../constantes/images.js";
// import { styles } from "./TakePicture.styles.js"; // Importa os estilos

// export const TakePicture = () => {
//   const [showCamera, setShowCamera] = useState(false);

//   const handleTakePicture = () => {
//     setShowCamera(true);
//     console.log("Abrir câmera");
//   };

//   return (
//     <View style={styles.container}>
//       {showCamera ? (
//         <Camera />
//       ) : (
//         <TouchableOpacity
//           style={styles.buttonContainer}
//           onPress={handleTakePicture}
//         >
//           <Text style={styles.text}>Adicionar Foto</Text>
//           <Image source={images.dslrCamera} style={styles.image} />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };
