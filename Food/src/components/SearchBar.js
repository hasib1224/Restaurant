import React from "react";
import { Text, StyleSheet, View,TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";


const SearchBar = ({term,onTermChange,onTermSubmit}) => {

  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.icon}  />
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      placeholder="Search.."
      value={term}
      onChangeText={(newTerm)=>onTermChange(newTerm)}
      onEndEditing = {() => onTermSubmit()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#cdcdcd",
    height: 40,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
  },
  input:{
    flex:1,
    fontSize:20
    
  },
  icon:{
   fontSize:30,
    color:"black",
    alignSelf:"center",
    marginHorizontal:10
  }
});

export default SearchBar;
