import { FC, memo } from "react";
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { styles } from "../../../styles/global";

type ListItemProps = {
  item: { id: number; text: string };
  onPressHandler: (id: number) => void;
};

export const ListItem: FC<ListItemProps> = memo(({ item, onPressHandler }) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <Pressable
          style={({pressed}) => [styles.goalItem, {opacity: pressed ? 0.5 : 1 }]}
          android_ripple={{ color: "#dddd" }}
          onPress={() => onPressHandler(item.id)}
        >
          <Text style={{ color: "white" }} key={item.id}>
            {item.text}
          </Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => onPressHandler(item.id)}>
          <View key={item.id} style={styles.goalItem}>
            <Text style={{ color: "white" }}>{item.text}</Text>
          </View>
        </Pressable>
      )}
    </>
  );
});
