import { useState, useCallback, useEffect } from "react";
import { Alert } from "react-native";

type GoalsStateProps = {
  goals: Array<{ id: number; text: string }>;
  text: string;
};


export const useGoals = (callback?: () => void) => {
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

 useEffect(() => {
  if(state.goals.length > 0) {
    callback ? callback() : () => {}
  }

 }, [state.goals.length])

  return { state, handleInput, deleteGoal, addGoals };
};
