import { Text, View, Image, TouchableOpacity } from 'react-native';
import images from '../../constantes/images';
import { styles } from './navigationBar.styles';
import { useAuth } from '../../providers/AuthProvider';

export function NavigationBar() {
  const { logout } = useAuth();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate('Overview');
          }}
        >
          <Image style={styles.images} source={images.home} />
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate('PendingSignature');
          }}
        >
          <Image style={styles.images} source={images.listing} />
          <Text>Pendências</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.images} source={images.plusSign} />
          <Text>Novo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={logout}>
          <Image style={styles.images} source={images.exit} />
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
