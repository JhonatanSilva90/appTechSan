import { Text, View, Image } from "react-native";
import images from "../../../constantes/images";
import { styles } from "./header.styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useAuth } from "../../../providers/AuthProvider";

export function Header() {
  const { user } = useAuth();
  // Obtém a data atual
  const currentDate = new Date();
  // Formata a data como uma string legível
  const formattedDate = format(currentDate, "EEEE, dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.userIdentification}>
          <Image style={styles.image} source={images.avatar} />
          <Text style={styles.text}>Olá, Jhonatan</Text>
          {/* <Text style={styles.text}>{user?.name}</Text> Para pegar o nome do usuário logado */}
        </View>
        <View style={styles.date}>
          <Text style={styles.textDate}>{formattedDate}</Text>
        </View>
      </View>
    </>
  );
}
