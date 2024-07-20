import { colors } from "../../constantes/colors";
export const styles = {
  container: {
    // paddingTop: 10,
    alignItems: "center",
  },
  box: {
    width: "90%",
    height: 60,
    borderRadius: 8,
    borderWidth: 1, // Define a largura da borda
    borderColor: "black", // Define a cor da borda
    justifyContent: "space-between",
    flexDirection: "row", // Garante que a imagem e o texto estejam em coluna
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10, // Adiciona padding dentro do box
  },
  image: {
    width: 48,
    height: 48,
    tintColor: "#FFFFFF", // Aplica uma cor branca à imagem
  },
  companyIdentification: {
    alignItems: "center",
    gap: 4,
  },
  companyIdentificationText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  bathroomIdentification: {
    alignItems: "center",
  },
  bathroomIdentificationText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
};
