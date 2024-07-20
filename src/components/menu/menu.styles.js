import { colors } from "../../constantes/colors";

export const styles = {
  navigation: {
    position: "absolute",
    right: 0,
    bottom: 160,
    flexDirection: "column",
    alignItems: "flex-end", // Alinha os itens à direita
    // backgroundColor: "red",
    padding: 10, // Adiciona espaçamento interno para os itens
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10, // Espaçamento entre as linhas
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", // Garante que a imagem e o texto estejam em coluna
    marginHorizontal: 10, // Espaçamento horizontal entre os itens
    gap: 30,
  },
  images: {
    width: 28,
    height: 28,
  },
  imageClose: {
    width: 50,
    height: 50,
  },
  backgroundImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Faz com que o contêiner seja um círculo
    backgroundColor: colors.backgoundMenu, // Cor de fundo marrom
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center", // Centraliza o texto
    fontWeight: "bold",
    color: "#fff",
  },
};
