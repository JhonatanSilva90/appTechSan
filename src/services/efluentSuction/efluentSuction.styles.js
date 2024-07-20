import { colors } from "../../constantes/colors";
export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.backgoundColor,
  },
  header: {
    paddingTop: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: "#FFFFFF", // Cor de fundo do botão
    width: "50%", // Largura do inputBox
    justifyContent: "center",
    height: 50, // Altura do inputBox
    borderRadius: 8, // Borda arredondada
    alignItems: "center", // Centraliza o texto horizontalmente
  },
  textStartButtonStyle: {
    color: "#000", // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontWeight: "bold", // Negrito
  },
  button: {
    alignItems: "center",
    paddingTop: 40,
  },
};
