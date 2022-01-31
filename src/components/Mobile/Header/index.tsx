
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../../../assets/logo.png';

export default function Header(){
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity>
                {/* <Image source={bell} /> */}
                <View>
                    <Text></Text>
                </View>
            </TouchableOpacity>       
        </View>
    )
}