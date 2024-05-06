import { FC } from "react";
import { AppContainer } from "./components/service/AppContainer";
import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView, Text } from "react-native";
import { Inputs } from "./components/ui/Inputs";
import { List } from "./components/ui/List";
import { useGoals } from "./hooks/useGoals";
import { styles } from "./styles/global";

type AppProps = {
  withScroll: true | false;
};

const App: FC<AppProps> = ({ withScroll = false }) => {
  const { addGoals, state, handleInput, deleteGoal } = useGoals();

  if (withScroll) {
    return (
      <ScrollView style={styles.appContainer}>
        <SafeAreaView>
          <StatusBar animated style="auto" />

          <Inputs
            addGoals={addGoals}
            handleInput={handleInput}
            text={state.text}
          />
          {state.goals.length <= 0 && <Text>No goals added</Text>}

          <List list="simple" onPressHandler={deleteGoal} data={state.goals} />
        </SafeAreaView>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar animated style="auto" />

      <Inputs addGoals={addGoals} handleInput={handleInput} text={state.text} />
      {state.goals.length <= 0 && <Text>No goals added</Text>}

      <List list="virtualized" onPressHandler={deleteGoal} data={state.goals} />
    </SafeAreaView>
  );
};

export default App;
