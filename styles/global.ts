import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: "ghostwhite",
    flex: 1,
    marginLeft: "auto",
    width: "100%",
    marginRight: "auto",
    gap: 20,
    paddingBottom: 30
  },

  inputContainer: {
    paddingTop: 50,
    flexDirection: "row",
    paddingHorizontal: 0,
    flexWrap: "wrap",
    flex: 1,
    gap: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "silver",
  },

  Button: {

    textAlign: "center",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },

  textInput: {
    borderWidth: 1,
    flexBasis: "65%",
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
 
  },

  listContainer: {
   flex: 3,
  },

  goalItem: {
    
    fontSize: 18,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    
  }
  
});
