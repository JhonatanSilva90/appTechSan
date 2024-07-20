import { colors } from "../../constantes/colors.js";
import { SIZE_TEXT_BOXES } from "../../constantes/SizeTextBoxes.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.backgoundColor,
    paddingHorizontal: 20,
  },
  order: {
    gap: 12,
    marginBottom: 100,
  },
  serviceIdentification: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  widthBox: {
    width: 180,
  },
  largeBox: {
    height: SIZE_TEXT_BOXES.large.height,
  },
  mediumBox: {
    height: SIZE_TEXT_BOXES.medium.height,
  },
};
