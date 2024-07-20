import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import images from "../constantes/images";
import { styles } from "./Camera.styles.js";

export function Camera({ navigation }) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        // Save photo to gallery
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        console.log("Photo saved to gallery:", photo);
      } catch (error) {
        console.error("Failed to take picture:", error);
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        {/* Botão de voltar na parte superior */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.closeCamera} style={styles.imageCloseCamera} />
        </TouchableOpacity>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={styles.captureButton}
            onPress={toggleCameraFacing}
          >
            <Image source={images.rotatearrow} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Image source={images.dslrCamera} style={styles.image} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </SafeAreaView>
  );
}
