import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import FirstImageCarousel from "./screens/FirstImageCarousel/FirstImageCarousel";
import Tabs from "./screens/BottomTabs/Tabs";
import CustomDrawer from "./screens/DrawerNavigation/CustomDrawer";
import CustomAnimatedDrawer from "./screens/DrawerNavigation/CustomAnimatedDrawer";
import Map from "./screens/Map/Map";
import CustomImageCrousel from "./screens/ImageSlider/CustomImageCrousel";
import ImageHome from "./screens/ImageSlider/ImageHome";
import TextInputScreen from "./screens/TextInput/TextInputScreen";
import InputHome from "./screens/TextInput/InputHome";
import VerticalOrderStatusScreen from "./screens/OrderStatus/VerticalOrderStatusScreen";
import AnimatedDrawer from "./screens/DrawerNavigation/CustomDrawer/AnimatedDrawer";
import CustomButtons from "./screens/Buttons/CustomButtons";
import Button from "./screens/Buttons/Button";
import ButtonApp from "./screens/Buttons/ButtonApp";
import UseState from "./screens/useState/UseState";
import Example from "./screens/Example/Example.jsx";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Parallax Carousel" component={FirstImageCarousel} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ImageSlider" component={CustomImageCrousel} />
        <Stack.Screen name="ImageHome" component={ImageHome} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="InputHome" component={InputHome} />
        <Stack.Screen name="AnimatedDrawer" component={AnimatedDrawer} />
        <Stack.Screen name="CustomButtons" component={CustomButtons} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="ButtonApp" component={ButtonApp} />
        <Stack.Screen name="UseState" component={UseState} />
        <Stack.Screen name="Example" component={Example} />
        <Stack.Screen
          name="OrderStatusScreen"
          component={VerticalOrderStatusScreen}
        />
        <Stack.Screen
          name="CustomAnimatedDrawer"
          component={CustomAnimatedDrawer}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;
