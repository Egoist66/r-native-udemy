import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, SafeAreaView, Text, View } from "react-native";
import { Inputs } from "./components/ui/Inputs";
import { List } from "./components/ui/List";
import { useGoals } from "./hooks/useGoals";
import { styles } from "./styles/global";
import { __Button } from "./components/share/__Button";
import { useModal } from "./hooks/useModal";

type AppProps = {
  withScroll: true | false;
};

const App: FC<AppProps> = ({ withScroll = false }) => {
  const { toggle, open, close } = useModal();
  const { addGoals, state, handleInput, deleteGoal } = useGoals(close);

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
    <>
      <StatusBar
        backgroundColor={open ? "#fff" : "transparent"}
        animated
        style="auto"
      />
      <SafeAreaView style={[styles.appContainer]}>
        <View style={{ alignItems: "center" }}>
          <__Button
            text="Add new goal"
            type="touchable"
            textCenter
            onClickHanlder={toggle}
            color="#fff"
            styles={[styles.Button, { width: 200 }]}
          />
        </View>

        <Inputs
          visibleModal={open}
          addGoals={addGoals}
          onLongClose={close}
          handleInput={handleInput}
          text={state.text}
        />
        {state.goals.length <= 0 && <Text>No goals added</Text>}

        <List
          list="virtualized"
          onPressHandler={deleteGoal}
          data={state.goals}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
