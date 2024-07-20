import { colors } from "../../constantes/colors.js";
import { SIZE_TEXT_BOXES } from "../../constantes/SizeTextBoxes.js";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: colors.backgoundColorTakePicture,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  largeBox: {
    height: SIZE_TEXT_BOXES.small.height,
  },
  image: {
    tintColor: "#FFFFFF", // Aplica uma cor branca à imagem
  },
};
