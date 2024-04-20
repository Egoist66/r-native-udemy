import { FC } from "react";
import { View, FlatList, Text, Platform } from "react-native";
import { styles } from "../../styles/global";
import { ListItem } from "./ios/ListItem";

type ListProps = {
  list?: "simple" | "virtualized";
  data: Array<{ id: number; text: string }>;
  onPressHandler: (id: number) => void;
};

export const List: FC<ListProps> = ({ onPressHandler, data, list = "simple" }) => {
  return (
    <View style={styles.listContainer} id="list">
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Goals List: {data.length}
      </Text>

      {list === "virtualized" ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          style={{ padding: 10 }}
          data={data}
          renderItem={({ item }) => (
            <ListItem item={item} onPressHandler={onPressHandler} />
          )}
        />
      ) : (
        data.map((item) => (
          <ListItem 
            key={item.id} 
            item={item} 
            onPressHandler={onPressHandler} 
          />
        ))
      )}
    </View>
  );
};

