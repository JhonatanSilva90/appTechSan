import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./ServiceIdentification.styles.js";
import images from "../../constantes/images.js";

export function ServiceIdentification(props) {
  const { backgroundColor } = props; // Acesse backgroundColor diretamente de props

  return (
    <>
      <TouchableOpacity style={styles.container}>
        <View style={[styles.box, { backgroundColor }]}>
          <Image source={props.image} style={styles.image} />
          <View style={styles.companyIdentification}>
            <Text style={styles.companyIdentificationText}>
              {props.service}
            </Text>
            <Text style={styles.companyIdentificationText}>{props.client}</Text>
          </View>
          <View style={styles.bathroomIdentification}>
            <Text style={styles.bathroomIdentificationText}>{props.unit}</Text>
            <Text style={styles.bathroomIdentificationText}>{props.info}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
