import { Text, TouchableOpacity } from 'react-native';
import { styles } from './startButton.styles';

export function StartButton(props) {
  const { startButtonStyle, textStartButtonStyle } = props;
  return (
    <>
      <TouchableOpacity
        style={[styles.startButton, startButtonStyle]}
        {...props}
      >
        <Text style={[styles.textStartButton, textStartButtonStyle]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
  );
}
