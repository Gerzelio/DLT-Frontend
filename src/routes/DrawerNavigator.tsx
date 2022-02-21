import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import DrawerItems from './DrawerItems';
import BaseNavigator from './BaseNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => (
    <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#261657',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}>
         <Drawer.Screen name="Home" component={HomeNavigator} options={{                     
                    title: 'Dashboard', 
                    headerTitle: '',
                } }
            />
            <Drawer.Screen name="Users" component={BaseNavigator}  options={{                     
                    title: 'Criar Utilizadores', 
                    headerTitle: '',
                } } />
    </Drawer.Navigator>
);

export default DrawerNavigation;