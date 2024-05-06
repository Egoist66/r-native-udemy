import { FC } from "react";
import { View, TextInput, Alert } from "react-native";
import { styles } from "../../styles/global";
import { __Button } from "../share/__Button";
import { LinkButton } from "../share/Link";

type InputsProps = {
  text: string;
  handleInput: (text: string) => void;
  addGoals: () => void;
};

export const Inputs: FC<InputsProps> = ({ addGoals, handleInput, text }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={text}
        onChangeText={handleInput}
        style={[styles.textInput, { borderColor: text ? "black" : "violet" }]}
        placeholder="Enter course goal"
      />
      <__Button
        type="touchable"
        textCenter
        styles={styles.Button}
        text="Add a goal"
        color="#fff"
        onClickHanlder={addGoals}
        onLongClickHandler={() => Alert.alert("long press")}
      />

      <LinkButton
        url="https://www.udemy.com"
        style={[styles.Button]}
        children="Udemy"
      />
    </View>
  );
};
