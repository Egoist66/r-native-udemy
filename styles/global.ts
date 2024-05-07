import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    height: "100%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    gap: 20,
    paddingBottom: 50,
    backgroundColor: 'skyblue',
  },

  inputContainer: {
    paddingTop: 50,
    flexDirection: "column",
    alignItems: "stretch",
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    gap: 20,
  

  
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
 
  },

  listContainer: {
   flex: 4,
   padding: 20,
   borderRadius: 10,
   backgroundColor: "yellow",
  },

  goalItem: {
    
    fontSize: 18,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    
  },

  modal: {
    flex: 1,

  }
  
});
