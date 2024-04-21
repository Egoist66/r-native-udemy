import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { ScrollView, Text, SafeAreaView } from "react-native";
import { useGoals } from "../../hooks/useGoals";
import { styles } from "../../styles/global";
import { LinkButton } from "../share/Link";
import { Inputs } from "../ui/Inputs";
import { List } from "../ui/List";

type AppProps = {
    withScroll: true | false;
};
  

export const AppContainer: FC<AppProps> = ({withScroll}): JSX.Element => {
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
        <LinkButton
          url="https://www.udemy.com"
          type="highlight"
          textCenter
          style={[styles.Button]}
          children="Udemy"
        />
    </SafeAreaView>
  );
}