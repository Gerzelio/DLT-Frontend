import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../views/Login";
import Signin from '../views/Signin';


const AppStack = createStackNavigator();

const Routes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Login" component={Signin} options={{headerShown:false}}/>
    </AppStack.Navigator>
);


export default Routes;