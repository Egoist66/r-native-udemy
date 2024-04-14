import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import { View, Text, TextInput, FlatList, Alert } from "react-native";
import { __Button } from "./components/share/__Button";
import { styles } from "./styles/global";

type GoalsStateProps = {
  goals: Array<{ id: number; text: string }>;
  text: string;
};



const App: FC = (): JSX.Element => {
  const [state, setState] = useState<GoalsStateProps>({
    goals: [],
    text: "",
  });

  const handleInput = (text: string) => {
    setState((state) => ({
      ...state,
      text,
    }));
  };

  const deleteGoal = (id: number) => {
    setState((state) => ({
      ...state,
      goals: state.goals.filter((goal) => goal.id !== id),
    }));
  }

  const addGoals = () => {
    if(!state.text.length){
      Alert.alert("Error", "Please enter a goal");
      return
    }
    setState((state) => ({
      ...state,
      goals: [...state.goals, { id: Date.now(), text: state.text }],
      text: "",
    }));
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar animated style="auto" />

      <View style={styles.inputContainer}>
        <TextInput
          value={state.text}
          onChangeText={handleInput}
          style={[styles.textInput, {borderColor: state.text ? "black" : "violet"}]}
          placeholder="Enter course goal"
        />
        <__Button
          type="touchable"
          textCenter
          styles={styles.Button}
          text="Add a goal"
          color="#fff"
          onClickHanlder={addGoals}
          onLongClickHandler={() => console.log("Long pressed")}
        />
      </View>

      {state.goals.length <= 0 && <Text>No goals added</Text>}

      
      <View id="list">
        <FlatList
          key={Date.now()}
          data={state.goals}
          renderItem={({ item }) => (
            <>
            
              <Text 
                style={{ fontSize: 20 }} 
                key={item.id}><Text onPress={() => deleteGoal(item.id)}>&times;</Text> {item.text}
              </Text>
            
            </>
          )}
        />
        
      </View>

      
    </View>
  );
};

export default App;
