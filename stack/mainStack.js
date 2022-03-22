import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import tw from "tailwind-react-native-classnames";
import { StyleSheet } from "react-native";
import Home from "../pages/home";
import MovieInfo from "../pages/movieInfo";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const options = {
    contentStyle: styles.header,
    headerStyle: styles.content,
    headerTitleStyle: styles.headerTitle,
    headerTintColor: "#f5c518",
    tintColor: "white",
    headerTitleAlign: "center",
  };

  return (
    <NavigationContainer style={tw`bg-black`}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...options, title: "IMBd" }}
        />
        <Stack.Screen
          name="MovieInfo"
          component={MovieInfo}
          options={({ route }) => ({ ...options, title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = new StyleSheet.create({
  content: {
    backgroundColor: "#0a0a0a",
  },
  header: {
    backgroundColor: "black",
  },
  headerTitle: {
    color: "#f5c518",
    fontSize: 24,
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default MainStack;
