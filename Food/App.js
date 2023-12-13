import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screen/SearhScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Search" 
        component={SearchScreen}
        options={
          {
            title:"Business Search"
          }
        } 
        initialRouteName="Search"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
