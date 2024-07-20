import { colors } from "../constantes/colors";

export const styles = {
  container: {
    flex: 1,
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: colors.backgoundColor,
  },
  userIdentification: {
    alignItems: "center",
    backgoundColor: "#FFF",
    paddingTop: 30,
  },
  imageUser: {
    borderRadius: 80, // Faz com que o contêiner seja um círculo
    backgroundColor: "#fff", // Cor de fundo
    marginBottom: 4,
  },
  nameUser: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 12,
    paddingHorizontal: 20,
  },
};
