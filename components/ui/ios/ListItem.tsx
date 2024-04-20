import { FC, memo } from "react";
import { Platform, View, Text } from "react-native";
import { styles } from "../../../styles/global";

type ListItemProps = {
    item: { id: number; text: string };
    onPressHandler: (id: number) => void;
};


export const ListItem: FC<ListItemProps> = memo(({item, onPressHandler}) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <Text style={styles.goalItem} key={item.id}>
          <Text
            style={{ color: "violet", fontSize: 18 }}
            onPress={() => onPressHandler(item.id)}
          >
            &times;
          </Text>{" "}
          {item.text}
        </Text>
      ) : (
        <View key={item.id} style={styles.goalItem}>
          <Text style={{ color: "white" }}>
            <Text
              style={{ color: "violet", fontSize: 18 }}
              onPress={() => onPressHandler(item.id)}
            >
              &times;
            </Text>{" "}
            {item.text}
          </Text>
        </View>
      )}
    </>
  );
});
