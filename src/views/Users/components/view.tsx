
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, ScrollView,
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { navigate } from "../../../routes/RootNavigation";
import { UsersModelState, Users } from '../../../models/Users';  
import { AuthModelState } from "../../../models/Auth";
import { PartnersModelState, Partners } from '../../../models/Partners';
import { ProfilesModelState, Profiles } from '../../../models/Profiles';
import { UsModelState, Us } from '../../../models/Us';
import { LocalityModelState, Locality } from '../../../models/Locality'; 
import Dashboard from "../../../components/Dashboard";     

import styles from './styles';

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    userLogged: Users;
    partners: PartnersModelState;
    profiles: ProfilesModelState;
    us: UsModelState;
    localities: LocalityModelState;
    route: any;
}

@connect(
    ({
        partners,
        profiles,
        us,
        localities,
    }: {
        partners: PartnersModelState;
        profiles: ProfilesModelState;
        us: UsModelState;
        localities: LocalityModelState;
    }) => ({
        partners,
        profiles,
        us,
        localities,
    }),
  )
export default class UsersView extends Component<UsersProps>{
    user: Users;
    constructor(props: any) {
        super(props);  
        const { route } = this.props;
        this.user = route.params.user;
    }

    render(){
        
        return(
            <KeyboardAvoidingView  style={styles.background}>
                <Dashboard />
                <ScrollView>
                    <View >
                        <View style={styles.containerForm}>
                            <Text style={styles.txtLabel}>Detalhes do Utilizador</Text>
                            <Text style={styles.txtLabel}>E-mail :</Text>   
                            <Text>{ this.user.email }</Text> 
                            
                            <Text style={styles.txtLabel}>Username: </Text>    
                            <Text>{ this.user.username }</Text>                                                                       
                                                
                            <Text style={styles.txtLabel}>Nome: </Text>      
                            <Text>{ this.user.name } { this.user.surname }</Text> 

                            <Text style={styles.txtLabel}>Telemóvel: </Text>      
                            <Text>{ this.user.phoneNumber }</Text>
                                
                            <Text style={styles.txtLabel}>Ponto de Entrada: </Text>    
                            <Text>{ this.user.entryPoint }</Text>

                            <Text style={styles.txtLabel}>Parceiro: </Text>
                            <Text> {this.user.partners?.name}</Text>
                            
                            <Text style={styles.txtLabel}>Perfil: </Text>
                            <Text> {this.user.profiles?.description}</Text>
                            
                            <Text style={styles.txtLabel}>Localidade: </Text>
                            <Text> {this.user.locality?.name}</Text>
                            
                            <Text style={styles.txtLabel}>US: </Text>
                            <Text> {this.user.us?.name}</Text>
                                
                            <Text style={styles.txtLabel}>Estado: </Text>
                            <Text> {this.user.status}</Text>

                            <View style={styles.btnDiv}>
                                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigate({name: "UserForm", params: {user: this.user}})}>
                                    <Text style={styles.txtSubmit}>Update</Text>
                                </TouchableOpacity>                            
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
