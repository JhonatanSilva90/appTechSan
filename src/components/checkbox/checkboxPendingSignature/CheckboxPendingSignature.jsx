import { Text, View, Image } from "react-native";
import { styles } from "./CheckboxPendingSignature.styles.js";
import Checkbox from "expo-checkbox";

export function CheckboxPendingSignature(props) {
  const {
    backgroundColor,
    image,
    service,
    client,
    unit,
    info,
    selectedServices,
    toggleCheckbox,
  } = props; // Acessa tudo por meio de propriedades

  return (
    <>
      <View style={[styles.container, { backgroundColor }]}>
        <Checkbox
          style={styles.checkbox}
          value={selectedServices.includes(info)}
          onValueChange={() => toggleCheckbox(info)}
        />
        <Image source={image} style={styles.image} />
        <View style={styles.companyIdentification}>
          <Text style={styles.companyIdentificationText}>{service}</Text>
          <Text style={styles.companyIdentificationText}>{client}</Text>
        </View>
        <View style={styles.bathroomIdentification}>
          <Text style={styles.bathroomIdentificationText}>{unit}</Text>
          <Text style={styles.bathroomIdentificationText}>{info}</Text>
        </View>
      </View>
    </>
  );
}
