import { colors } from "../constantes/colors";

export const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.backgoundColor,
  },
  box: {
    alignItems: "center", // Centraliza o texto horizontalmente
  },
  formGroup: {
    width: "100%", // Largura do inputBox
    marginTop: 140,
  },
  form: {
    marginBottom: 30,
    alignItems: "center", // Centraliza os itens horizontalmente
  },
  buttonEnter: {
    backgroundColor: colors.buttonEnter, // Cor de fundo do botão
    width: "50%", // Largura do inputBox
    justifyContent: "center",
    height: 50, // Altura do inputBox
    borderRadius: 8, // Borda arredondada
    alignItems: "center", // Centraliza o texto horizontalmente
  },

  textStartButtonStyle: {
    color: "#fff", // Cor do texto
    fontSize: 20, // Tamanho da fonte
    fontWeight: "bold", // Negrito
  },
};
