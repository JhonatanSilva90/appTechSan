import { colors } from "../../../constantes/colors";

export const styles = {
  container: {
    width: 150,
    // backgroundColor: "red",
    height: 130,
    borderRadius: 8,
    backgroundColor: "#fff", // Cor de fundo
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingTop: 4,
  },
  cleaningNumber: {
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold",
    lineHeight: 60, // Alinha o texto verticalmente com a altura da imagem
  },
};
