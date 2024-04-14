import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 400,
    marginLeft: "auto",
    height: "100%",
    marginRight: "auto",
    gap: 20,
  },

  inputContainer: {
    paddingTop: 50,
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
  },

  Button: {

    textAlign: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },

  textInput: {
    borderWidth: 1,
    flexBasis: "70%",
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
 
  }
});
