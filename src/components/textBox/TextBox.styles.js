import { colors } from "../../constantes/colors";
import { SIZE_TEXT_BOXES } from "../../constantes/SizeTextBoxes";

export const styles = {
  container: {
    gap: 2,
  },
  inputBox: {
    alignItems: "center",
    flexDirection: "row", // Garante que a imagem e o texto estejam em coluna
    borderRadius: 8, // Borda arredondada com raio de 5
    paddingHorizontal: 10,
    height: 40, // Altura do inputBox
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
};
