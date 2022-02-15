
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
                    <View style={styles.containerPage}>
                        <Text style={styles.txtLabel}>E-mail</Text>    
                        <Input 
                            styles={styles.input}
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="email"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ account:{ email: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Username</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="username"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ account:{ username: value }}) }}
                        />
                                        
                                               
                        <Text style={styles.txtLabel}>Apelido</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="surname"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ account:{ surname: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Nome</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="name"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({account: { name: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Telemóvel</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="phoneNumber"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({account:{ phoneNumber: value }}) }}
                        />
                        
                        <Text style={styles.txtLabel}>Ponto de Entrada</Text>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="entryPoint"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({account:{ entryPoint: value }}) }}
                        />
                        
                        {/* <Text style={styles.txtLabel}>Bio</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="bio"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ bio: value }) }}/> */}
                            
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
