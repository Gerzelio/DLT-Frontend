import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from "../views/Users";

const HomeStack = createStackNavigator();
const BaseNavigator: React.FC = () => (
    
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Users" component={Users}/>
    </HomeStack.Navigator>
);

export default BaseNavigator;