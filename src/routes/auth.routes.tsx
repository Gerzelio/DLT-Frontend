
import React from 'react';
import Login from "../views/Login";

import { createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;