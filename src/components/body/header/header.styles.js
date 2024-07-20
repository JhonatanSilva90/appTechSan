import { colors } from "../../../constantes/colors";

export const styles = {
  container: {
    backgroundColor: colors.backgoundColor,
    alignItems: "center",
    paddingBottom: 8,
  },
  userIdentification: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 8,
    width: "80%",
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 80, // Faz com que o contêiner seja um círculo
    backgroundColor: "#fff", // Cor de fundo
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 36, // Alinha o texto verticalmente com a altura da imagem
  },
  date: {
    width: "80%",
    height: 24,
    borderRadius: 6,
    backgroundColor: "#FFF", // Cor de fundo
    alignItems: "center",
    justifyContent: "center",
    // margin: 10,
  },
  textDate: {
    // color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
};
