
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Dashboard: React.FC = () => {
    return(
        <View>
            <View style={styles.titulo}>
                <Text style={styles.titulo1}> Sistema Integrado de Cadastro de Adolescentes e Jovens </Text>
                <Text> WORKING TOGETHER FOR AN AIDS-FREE FOR GIRLS & WOMEN </Text>
            </View>
        </View>
    )
}

export default Dashboard;