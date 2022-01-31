
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Dashboard(){
    return(
        <TouchableOpacity>
            <View style={styles.titulo}>
                <Text style={styles.titulo1}> Sistema Integrado de Cadastro de Adolescentes e Jovens </Text>
                <Text> WORKING TOGETHER FOR AN AIDS-FREE FOR GIRLS & WOMEN </Text>
            </View>
        </TouchableOpacity>
    )
}