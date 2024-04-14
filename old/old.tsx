import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import ErrorBoundary from "../components/service/ErrorBoundary";
import { styles } from "../styles/global";

const App: FC = (): JSX.Element => {
  const [isHidden, setHidden] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const toggle = () => {
    setHidden((isHidden) => !isHidden);
  };
  return (
    <View>
      <ErrorBoundary onTryhandler={() => setHidden(false)} error={isHidden}>
        <Text>I love React native</Text>

        <StatusBar hidden={isHidden} animated style="auto" />

        <Pressable
          onPress={toggle}
          onLongPress={() => Alert.alert("long press")}
          style={{
            backgroundColor: "blue",
            marginTop: 20,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>{text || "Press me"}</Text>
        </Pressable>
      </ErrorBoundary>

      <TextInput
        onChangeText={setText}
        style={{
          height: 40,
          padding: 5,
          marginTop: 20,
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
        }}
        placeholder="Enter text"
      />

      <Text style={{ marginTop: 20 }}></Text>
    </View>
  );
};

export default App;
