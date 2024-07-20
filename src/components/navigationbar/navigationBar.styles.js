import { colors } from "../../constantes/colors";
export const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-around", // Alinha os itens com espaço igual entre eles
    position: "absolute",
    bottom: 0,
    height: 80,
    width: "100%",
    backgroundColor: colors.navigationBar,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column", // Garante que a imagem e o texto estejam em coluna
    paddingTop: 8,
  },
  images: {
    width: 36,
    height: 36,
  },
  text: {
    fonsSize: 14,
  },
};
