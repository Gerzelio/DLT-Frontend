
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

// Componentes
import Footer from '../../components/Mobile/Footer';
import Dashboard from '../../components/Dashboard';
import DashCard from '../../components/Mobile/DashCard';

export default function Home(){
    return (
        <View style={styles.container}>

            <Dashboard />
            {/* <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                <DashCard prov={"MAPUTO PROVÍNCIA"}/>
                <DashCard prov={"SOFALA "} />
                <DashCard prov={"ZAMBEZIA "} />
                <DashCard prov={"GAZA "} />
                <DashCard prov={"INHAMBANE "} />
                <DashCard prov={"MANICA "} />
                <DashCard prov={"CABO-DELGADO"} />
                <DashCard prov={"NAMPULA "} />
            </ScrollView> */}
            <Footer />
        </View>
    )    
}