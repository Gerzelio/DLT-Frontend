
import React, {useState, forwardRef} from 'react';
import {View, TextInput} from 'react-native';

import styles from './styles';

export default function Input(props: any){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} { ...props}/>
        </View>
    )
};