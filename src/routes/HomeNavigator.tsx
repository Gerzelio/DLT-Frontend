import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from "../views/Users";

const HomeStack = createStackNavigator();
const HomeNavigator: React.FC = () => (
    
    <HomeStack.Navigator initialRouteName="Users">
        <HomeStack.Screen name="Users" component={Users} />
    </HomeStack.Navigator>
);

export default HomeNavigator;