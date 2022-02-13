
import React from 'react';
import { View, ActivityIndicator} from 'react-native';
import Home from "../views/Home";
import Login from "../views/Login";
import Users from "../views/Users";

import { createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const Routes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <AppStack.Screen name="Users" component={Users} options={{headerShown:false}}/>
    </AppStack.Navigator>
);


export default Routes;