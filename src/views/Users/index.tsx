
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, 
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';
import { UsersModelState, Users } from '../../models/Users';  
import { AuthModelState } from "../../models/Auth";      

import Input from "../../components/Inputs";
// import DropDownPicker from 'react-native-dropdown-picker'
import {Picker} from '@react-native-picker/picker';

import styles from "./styles";

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    userLogged: Users;
}

interface UsersState{
    account: Users,
}

@connect(({ users }: UsersModelState,
    {loggedUser}:AuthModelState) => ({
    submitting: users,
    userLogged: loggedUser
}))
export default class User extends Component<UsersProps, UsersState>{

    state: UsersState = {
        account: {},
    };

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
        const { userLogged } = this.props;
        
        return(
            
            <KeyboardAvoidingView>
                <View>
    
                </View>
                <View >
                    <View>
                        <Text>Credentials will be sent to the user by email. A password will be generated automatically if not provided.</Text>
                    </View>
                    <View >
                        <Text style={styles.txtLabel}>E-mail</Text>    
                        <Input 
                            styles={styles.input}
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="email"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, email: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Username</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="username"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, username: value }}) }}
                        />
                                        
                                               
                        <Text style={styles.txtLabel}>Apelido</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="surname"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, surname: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Nome</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="name"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ account: { ...this.state.account, name: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Telemóvel</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="phoneNumber"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, phoneNumber: value }}) }}
                        />
                        
                                               
                        {/* <Text style={styles.txtLabel}>Bio</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="bio"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ bio: value }) }}/> */}
                            
                        <Text style={styles.txtLabel}>Ponto de Entrada</Text>
                        {/* <DropDownPicker
                            items={[
                                {label: 'English', value: '1'},
                                {label: 'Deutsch', value: '2'},
                                {label: 'French', value: '3'},
                            ]}
                            // defaultIndex={0}
                            containerStyle={{height: 40}}
                            onChangeItem={(item : string) => { this.setState({ account:{ ...this.state, locality: item }}) }}
                        /> */}

                        <Picker
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
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, partners: itemValue }}) }
                            }>
                            <Picker.Item label="ABT - ECHO" value="0" />
                            <Picker.Item label="FGH" value="1" />
                        </Picker>
                        
                        <Text style={styles.txtLabel}>profiles</Text>
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, profiles: itemValue }}) }
                            }>
                            <Picker.Item label="US" value="0" />
                            <Picker.Item label="CM" value="1" />
                        </Picker>
                        
                        <Text style={styles.txtLabel}>Ponto de Referencias</Text>
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, us: itemValue }}) }
                            }>
                            <Picker.Item label="CS da Matola" value="0" />
                            <Picker.Item label="CS 1 de junho" value="1" />
                        </Picker>
                            
                        <TouchableOpacity style={styles.btnSubmit} onPress={() => this.handlerSave()}>
                            <Text style={styles.txtLabel}>Save</Text>
                        </TouchableOpacity>
                        {/* <Button onPress={""} title='Save' /> */}
                        {/* <Text>{"E-mail: "+this.state.email}</Text>
                        <Text>{"Username: "+this.state.username}</Text>
                        <Text>{"Password: "+this.state.password}</Text>
                        <Text>{"Name: "+this.state.name}</Text>
                        <Text>{"Website: "+this.state.website}</Text>
                        <Text>{"Location: "+this.state.location}</Text>
                        <Text>{"Bio: "+this.state.bio}</Text> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
