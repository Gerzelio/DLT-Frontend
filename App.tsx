import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import dva from './src/utils/dva'
import UserModel from './src/models/Users'
import Login from './src/models/Auth'
import ProfilesModel from './src/models/Profiles'
import LocalityModel from './src/models/Locality'
import PartnersModel from './src/models/Partners'
import usModel from './src/models/Us'
import SecurityContext from './src/contexts/SecurityContext';
import { navigationRef } from './src/routes/RootNavigation'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const app = dva({
    initialState: {},
    models: [Login, UserModel, PartnersModel, ProfilesModel, usModel, LocalityModel],
    onError(e: any) {
      console.log('onError', e)
    },
});

const App = app.start(
    <NavigationContainer ref={navigationRef}>
        
            <SecurityContext />

        
    </NavigationContainer>
);

export default App


