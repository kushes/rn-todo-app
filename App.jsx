// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { TabFloatButton } from "./src/components/TabFloatButton";
import { Colors } from "./src/utils/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "tomato" },
          tabBarStyle: {
            backgroundColor: Colors.PAGE_WHITE,
            borderTopWidth: 0,
            elevation: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          tabBarActiveBackgroundColor: Colors.BOTTOM_TAB_BAR_BG,
          tabBarInactiveBackgroundColor: Colors.BOTTOM_TAB_BAR_BG,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "ProfileStack") {
              iconName = focused ? "account-circle" : "account-circle-outline";
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            title: "Home",
          }}
        />

        <Tab.Screen
          name="Rocket"
          component={SettingsStack}
          options={{
            tabBarButton: (props) => (
              <TabFloatButton bgColor={Colors.BOTTOM_TAB_BAR_BG} {...props} />
            ),
          }}
        />

        <Tab.Screen
          name="ProfileStack"
          component={SettingsStack}
          options={{
            tabBarLabel: "Profile",
            title: "Profile",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
