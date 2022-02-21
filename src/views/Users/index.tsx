
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, ScrollView,
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { UsersModelState, Users } from '../../models/Users';  
import { AuthModelState } from "../../models/Auth";
import { PartnersModelState, Partners } from '../../models/Partners';
import { ProfilesModelState, Profiles } from '../../models/Profiles';
import { UsModelState, Us } from '../../models/Us';
import { LocalityModelState, Locality } from '../../models/Locality'; 
import Dashboard from "../../components/Dashboard";     

import styles from "./styles";

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    userLogged: Users;
    partners: PartnersModelState;
    profiles: ProfilesModelState;
    us: UsModelState;
    localities: LocalityModelState;
}

interface UsersState{
    account: Users,
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
export default class User extends Component<UsersProps, UsersState>{
    constructor(props: any) {
        super(props) 
        this.state = {
            account: {}
        }  
        const { dispatch } = this.props;

        dispatch({
            type: 'partners/fetch',
        });
        dispatch({
            type: 'profiles/fetch',
        });
        dispatch({
            type: 'us/fetch',
        });
        dispatch({
            type: 'localities/fetch',
        });

    } 

    

    validate_fields = () => {
        
        return true;
    }

    handlerSave = () => {
        const { account } = this.state;
        const { dispatch } = this.props;

        if (this.validate_fields() && dispatch) {
           console.log(account);
           dispatch({
                type: 'users/create',
                payload: account
            })
        }
    }

    render(){
        const { userLogged, partners: { partners }, profiles: { profiles }, us: { us }, localities: { localities } } = this.props;

        return(
            <KeyboardAvoidingView  style={styles.background}>
                <Dashboard />
                <ScrollView>
                    <View >
                        <View style={styles.containerForm}>                        
                            <View style={styles.formTitle}>
                                <Text style={styles.textTitle}>Credentials will be sent to the user by email. A password will be generated automatically if not provided.</Text>
                            </View>
                            <Text style={styles.txtLabel}>E-mail</Text>    
                            <TextInput
                                style={styles.input}
                                autoCorrect={false} 
                                autoCapitalize='none' 
                                keyboardType='default'
                                // name="email"
                                returnKeyType="send" 
                                onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, email: value }}) }}
                            />
                            
                            <Text style={styles.txtLabel}>Username</Text>    
                            <TextInput 
                                style={styles.input}
                                autoCorrect={false} 
                                autoCapitalize='none' 
                                keyboardType='default'
                                // name="username"
                                returnKeyType="send" 
                                onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, username: value }}) }}
                            />
                                            
                                                
                            <Text style={styles.txtLabel}>Apelido</Text>    
                            <TextInput  
                                style={styles.input}
                                autoCorrect={false} 
                                autoCapitalize='none' 
                                keyboardType='default'
                                // name="surname"
                                returnKeyType="send"
                                onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, surname: value }}) }}
                            />
                            
                            <Text style={styles.txtLabel}>Nome</Text>    
                            <TextInput  
                                style={styles.input}
                                autoCorrect={false} 
                                autoCapitalize='none' 
                                keyboardType='default'
                                // name="name"
                                returnKeyType="send"
                                onChangeText={(value : string)=> { this.setState({ account: { ...this.state.account, name: value }}) }}
                            />
                            
                            <Text style={styles.txtLabel}>Telemóvel</Text>    
                            <TextInput  
                                style={styles.input}
                                autoCorrect={false} 
                                autoCapitalize='none' 
                                keyboardType='default'
                                // name="phoneNumber"
                                returnKeyType="send"
                                onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, phoneNumber: value }}) }}
                            />
                                
                            <Text style={styles.txtLabel}>Ponto de Entrada</Text>
                            <Picker 
                                style={styles.dropDownPicker}
                                // selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    { this.setState({ account:{ ...this.state.account, locality: itemValue }}) }
                                }>
                                <Picker.Item label="Unidade Sanitaria" value="0" />
                                <Picker.Item label="Escola" value="1" />
                                <Picker.Item label="Comunidade" value="1" />
                            </Picker>

                            <Text style={styles.txtLabel}>Parceiro</Text>
                            <Picker
                                style={styles.dropDownPicker}
                                onValueChange={(itemValue, itemIndex) =>
                                    { this.setState({ account:{ ...this.state.account, partners: itemValue }}) }
                                }
                            >
                                { 
                                    partners.map(partner => (
                                        <Picker.Item key={partner.id} label={partner.name} value={partner.id} />
                                    ))
                                }  
                            </Picker>
                            
                            <Text style={styles.txtLabel}>Perfil</Text>
                            <Picker
                                style={styles.dropDownPicker}
                                // selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    { this.setState({ account:{ ...this.state.account, profiles: itemValue }}) }
                                }
                            >
                                { 
                                    profiles.map(profile => (
                                        <Picker.Item key={profile.id} label={profile.description} value={profile.id} />
                                    ))
                                }
                            </Picker>
                            
                            <Text style={styles.txtLabel}>Localidade</Text>
                            <Picker
                                style={styles.dropDownPicker}
                                // selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    { this.setState({ account:{ ...this.state.account, locality: itemValue }}) }
                                }
                            >
                                { 
                                    localities.map(locality => (
                                        <Picker.Item key={locality.id} label={locality.name} value={locality.id} />
                                    ))
                                }
                            </Picker>
                            
                            <Text style={styles.txtLabel}>US</Text>
                            <Picker
                                style={styles.dropDownPicker}
                                // selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    { this.setState({ account:{ ...this.state.account, us: itemValue }}) }
                                }
                            >
                                { 
                                    us.map(us => (
                                        <Picker.Item key={us.id} label={us.name} value={us.id} />
                                    ))
                                }
                            </Picker>
                            <View style={styles.btnDiv}>
                                <TouchableOpacity style={styles.btnSubmit} onPress={() => this.handlerSave()}>
                                    <Text style={styles.txtSubmit}>Save</Text>
                                </TouchableOpacity>                            
                            </View>  
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
