import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";

import TransactionScreen from "./screens/Transactions";

import ProfileScreen from "./screens/Profile";

import { TamaguiProvider } from "tamagui";

import config from "./tamagui.config";
import { Header } from "./components/Header";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <TamaguiProvider config={config}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Transactions") {
                iconName = focused ? "swap-vertical" : "swap-vertical-outline";
              } else if (route.name === "Profiles") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }
              return <Ionicons name={iconName as "home" | "home-outline" | "swap-vertical" | "swap-vertical-outline" | "person-circle" | "person-circle-outline"} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "#3164FA",
            tabBarInactiveTintColor: "#7E8492",
            tabBarStyle: {
              display: "flex",
              height: 80,
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Transactions" component={TransactionScreen} />
          <Tab.Screen name="Profiles" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}

export default App;
