import { useState, useCallback } from "react";
import { Alert } from "react-native";

type GoalsStateProps = {
  goals: Array<{ id: number; text: string }>;
  text: string;
};


export const useGoals = () => {
  const [state, setState] = useState<GoalsStateProps>({
    goals: [],
    text: "",
  });

  const handleInput = useCallback(
    (text: string) => {
      setState((state) => ({
        ...state,
        text,
      }));
    },
    [state.text]
  );

  const deleteGoal = useCallback(
    (id: number) => {
      setState((state) => ({
        ...state,
        goals: state.goals.filter((goal) => goal.id !== id),
      }));
    },
    [state.goals]
  );

  const addGoals = useCallback(() => {
    if (!state.text.length) {
      Alert.alert("Warning", "Please enter a goal");
      return;
    }
    setState((state) => ({
      ...state,
      goals: [...state.goals, { id: Date.now(), text: state.text }],
      text: "",
    }));
  }, [state.goals, state.text]);

 

  return { state, handleInput, deleteGoal, addGoals };
};
