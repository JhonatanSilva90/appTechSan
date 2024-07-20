// export const styles = {
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     // justifyContent: "center",
//   },
//   backButton: {
//     position: "absolute",
//     width: "90%",
//     // paddingTop: 60,
//     alignItems: "flex-end",
//   },
//   imageCloseCamera: {
//     tintColor: "#FFFFFF", // Aplica uma cor branca à imagem
//     width: 24,
//     height: 24,
//   },
// };

export const styles = {
  container: {
    flex: 1,
    backgroundColor: "#000", // Cor de fundo preta para o container
  },
  cameraView: {
    flex: 1, // Ocupa todo o espaço disponível dentro do SafeAreaView
    width: "100%", // Garante que a câmera tenha a largura completa do SafeAreaView
  },
  backButton: {
    position: "absolute",
    alignItems: "flex-end",
    right: 16, // Posiciona o botão no canto superior direito
    top: 20,
    zIndex: 1,
  },
  imageCloseCamera: {
    tintColor: "#FFFFFF", // Cor branca para a imagem do botão de fechar câmera
    width: 24,
    height: 24,
  },
};
