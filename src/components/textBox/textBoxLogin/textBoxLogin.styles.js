import { colors } from "../../../constantes/colors";

export const styles = {
  images: {
    width: 26,
    height: 26,
  },
  inputBox: {
    alignItems: "center",
    flexDirection: "row", // Garante que a imagem e o texto estejam em coluna
    borderWidth: 1, // Adiciona uma borda de largura 1
    borderRadius: 8, // Borda arredondada com raio de 5
    paddingHorizontal: 10,
    width: "80%", // Largura do inputBox
    height: 50, // Altura do inputBox
    gap: 12,
    backgroundColor: colors.backgoundMenu,
  },
};
