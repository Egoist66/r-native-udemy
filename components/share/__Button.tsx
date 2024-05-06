import { FC } from "react";
import { Pressable, Text, StyleProp, ViewStyle, TouchableOpacity } from "react-native";

type __ButtonProps = {
  text?: string;
  type?: "pressable" | "touchable";
  disabled?: boolean;
  onClickHanlder?: () => void;
  onLongClickHandler?: () => void;
  textCenter?: boolean;
  styles?: StyleProp<ViewStyle>;
  color?: string;
};
/**
 * __Button
 * Universal button component
 * @param {*} {
 *   text,
 *   type = 'pressable',
 *   color,
 *   onClickHanlder,
 *   onLongClickHandler,
 *   textCenter = false,
 *   styles,
 * }
 * @return {*} 
 */
export const __Button: FC<__ButtonProps> = ({
  text,
  type = 'pressable',
  color,
  disabled = false,
  textCenter = false,
  onClickHanlder,
  onLongClickHandler,
  styles,
}: any): any => {
  if (type === "pressable") {
    return (
      <Pressable
        disabled={disabled}
        onPress={onClickHanlder}
        onLongPress={onLongClickHandler}
        style={styles}
      >
        <Text style={{ color }}>{text}</Text>
      </Pressable>
    );
  }
  else if(type === 'touchable'){
    return (
      <TouchableOpacity  disabled={disabled} style={styles} onPress={onClickHanlder} onLongPress={onLongClickHandler}>
        <Text style={{ color, textAlign: textCenter ? 'center' : 'left'}}>{text}</Text>
      </TouchableOpacity>
    )
  }
};
