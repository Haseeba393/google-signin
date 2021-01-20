import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Login,
    Welcome
} from '../screens';

const Stack = createStackNavigator();

const Root = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='login'
            >
                <Stack.Screen 
                    name='login'
                    component={Login}
                />
                <Stack.Screen 
                    name='welcome'
                    component={Welcome}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;