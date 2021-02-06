import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/Navigator/DrawerNavigator';
import {AuthStackNavigator} from './src/Navigator/StackNavigator';
import About from './src/Screens/About';

const App = () => {
    const isSignIn = false;
    return (
        <NavigationContainer>
            {
                isSignIn ? <DrawerNavigator/> : <AuthStackNavigator/>
            }
        </NavigationContainer>
    );
};
export default App;
