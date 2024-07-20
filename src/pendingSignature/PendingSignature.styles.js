import { colors } from "../constantes/colors";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.backgoundColor,
    paddingBottom: 40,
  },
  close: {
    alignItems: "flex-end",
    marginHorizontal: 24,
  },
  imageClose: {
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30, // Ajuste o tamanho conforme necessário
  },
  signatureButton: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 40,
    width: 140,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginVertical: 8,
  },
  signatureText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    alignItems: "center",
    marginBottom: 200,
  },

  checkboxContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA500",
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1, // Define a largura da borda
    borderColor: "black", // Define a cor da borda
  },
};
