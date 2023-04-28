import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTab from "./MainTab";
import SearchScreen from "../screens/SearchScreen";
import PlacesScreen from "../screens/PlacesScreen";
import MapScreen from "../screens/MapScreen";
import PropertyInfoScreen from "../screens/PropertyInfo";
import RoomScreen from "../screens/RoomScreen";
import UserScreen from "../screens/UserScreen";
import ConfirmationScreen from "../screens/CconfirmationScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const StackTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Main"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Places" component={PlacesScreen} />

        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Info" component={PropertyInfoScreen} />
        <Stack.Screen name="Room" component={RoomScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Confirm" component={ConfirmationScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackTab;
