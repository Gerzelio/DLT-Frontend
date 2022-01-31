
import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';

import {useAuth} from '../../contexts/auth';

import styles from './styles';

import logo from '../../../assets/logo.png';
// import bell from '../../../assets/logo.png';

const Header: React.FC = () =>{
    const { user, logOut} = useAuth();

    function handleLogout(){
        logOut();
    }
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity style={styles.notification}>
                {/* <Image source={bell} /> */}
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>{user?.name}</Text>
                    <Button title='Logout' onPress={handleLogout} />
                </View>
            </TouchableOpacity>       
        </View>
    )
}

export default Header;