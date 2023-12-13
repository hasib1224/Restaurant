import React, {useState} from "react";
import { Text,StyleSheet,View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term,setTerm] = useState("");
    return(
        <View>
            <SearchBar 
            term={term} 
            onTermChange = {(newTerm) => {setTerm(newTerm)}}
            onTermSubmit = {() => {console.log("submitted")} } 
            />
            <Text style={styles.text}>{term}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    text:{
        color:"red"
    }
});

export default SearchScreen;