import { colors } from "../../constantes/colors";
export const styles = {
  container: {
    flex: 1,
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: colors.backgoundColor,
  },
  header: {
    paddingBottom: 12
  },
  area: {
    width: "100%",
    paddingHorizontal: 20,
  },
  information: {
    gap: 8,
    paddingBottom: 12,
  },
  signatureContainer: {
    borderRadius: 8,
    width: "100%",
    height: 350,
    overflow: "hidden", // Garante que o conteúdo siga o arredondamento
  },
};
