import * as React from 'react';
import {Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersListScreen from "../views/Users";
import UsersFormScreen from "../views/Users/components/create";
import UsersViewScreen from "../views/Users/components/view";


const UserStack = createNativeStackNavigator();

const UsersNavigator: React.FC = () => {
  return (
      <UserStack.Navigator initialRouteName="UserList"  screenOptions={{headerShown:false}}>
        <UserStack.Screen name="UserList" component={UsersListScreen}  />
        <UserStack.Screen name="UserForm" component={UsersFormScreen} options={{
                    headerTitle: (props) => (
                      <Text {...props} style={{ color: 'black', fontWeight: 'bold' }}>
                        back
                      </Text>
                    ),
                    headerShown:true
                }}/>
        <UserStack.Screen name="UserView" component={UsersViewScreen} options={{
                    headerTitle: (props) => (
                      <Text {...props} style={{ color: 'black', fontWeight: 'bold' }}>
                        back
                      </Text>
                    ),
                    headerShown:true
                }}/>
      </UserStack.Navigator>
  );
}

export default UsersNavigator;
