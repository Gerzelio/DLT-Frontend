
import React from 'react';
import Dashboard from "../components/Dashboard";
import Home from "../views/Home";

import { createNativeStackNavigator} from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </AppStack.Navigator>
);

export default AppRoutes;