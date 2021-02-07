import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {lightGreen} from "../Assets/Colors/colors"
import Home from "../Screens/Home";
import About from "../Screens/About";
import Contact from "../Screens/Contact";
import CreateShed from '../Screens/CreateShed';
import SignIn from '../Screens/SignIn';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
const Stack = createStackNavigator();
const screenOptionStyle = {
    headerStyle: {
        backgroundColor: lightGreen,
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="CreateShed" component={CreateShed} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

const AuthStackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="SignIn"  component={SignIn}/>
        </Stack.Navigator>
    )
}

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};
export { MainStackNavigator, ContactStackNavigator ,AuthStackNavigator};
