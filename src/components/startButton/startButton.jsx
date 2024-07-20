import { Text, TouchableOpacity } from "react-native";
import { styles } from "./startButton.styles";

export function StartButton(props) {
  const { startButtonStyle, textStartButtonStyle, text } = props;
  return (
    <>
      <TouchableOpacity
        style={[styles.startButton, startButtonStyle]}
        onPress={props.onPress}
      >
        <Text style={[styles.textStartButton, textStartButtonStyle]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}
