
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function DashCard({ prov }){
    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.cardLeft}>
                <Text style={styles.cardTitle}> {prov}</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardNumber}>53,919</Text>
            </View>
        </TouchableOpacity>
    )
}