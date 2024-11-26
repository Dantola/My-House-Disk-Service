const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import IPhone14ProMax13 from "./screens/IPhone14ProMax13";
import IPhone14ProMax12 from "./screens/IPhone14ProMax12";
import IPhone14ProMax11 from "./screens/IPhone14ProMax11";
import IPhone14ProMax10 from "./screens/IPhone14ProMax10";
import IPhone14ProMax9 from "./screens/IPhone14ProMax9";
import IPhone14ProMax8 from "./screens/IPhone14ProMax8";
import IPhone14ProMax7 from "./screens/IPhone14ProMax7";
import IPhone14ProMax6 from "./screens/IPhone14ProMax6";
import IPhone14ProMax5 from "./screens/IPhone14ProMax5";
import IPhone14ProMax4 from "./screens/IPhone14ProMax4";
import IPhone14ProMax3 from "./screens/IPhone14ProMax3";
import IPhone14ProMax2 from "./screens/IPhone14ProMax2";
import IPhone14ProMax1 from "./screens/IPhone14ProMax1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14ProMax13"
              component={IPhone14ProMax13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax12"
              component={IPhone14ProMax12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax11"
              component={IPhone14ProMax11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax10"
              component={IPhone14ProMax10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax9"
              component={IPhone14ProMax9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax8"
              component={IPhone14ProMax8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax7"
              component={IPhone14ProMax7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax6"
              component={IPhone14ProMax6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax5"
              component={IPhone14ProMax5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax4"
              component={IPhone14ProMax4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax3"
              component={IPhone14ProMax3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax2"
              component={IPhone14ProMax2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone14ProMax1"
              component={IPhone14ProMax1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
