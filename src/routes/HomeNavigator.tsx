import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from "../views/Users";
import Home from '../views/Home';

const HomeStack = createStackNavigator();
const HomeNavigator: React.FC = () => (
    
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Users" component={Users} />
        <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
);

export default HomeNavigator;