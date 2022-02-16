
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, 
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

import Input from "../../components/Inputs";
// import DropDownPicker from 'react-native-dropdown-picker'


import styles from "./styles";

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    userLogged: Users;
    partners: Partners[];
}

interface UsersState{
    account: Users,
}
/*
@connect(( 
            {loggedUser}:AuthModelState,
            { partners }: PartnersModelState,
) => ({

    userLogged: loggedUser,
    partners: partners,
}))
*/


@connect(
    ({
      users,
      partners
    }: {
      users: UsersModelState;
      partners: PartnersModelState;
    }) => ({
      users,
      partners
    }),
  )
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
           /* dispatch({
                type: 'users/create',
                payload: account
            })*/
        }
    }

    
    componentDidMount(){
        const { dispatch } = this.props;

        dispatch({
            type: 'partners/fetch',
        });

       

    }

    render(){
        const { userLogged, partners } = this.props;

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
                         
                        <Text style={styles.txtLabel}>Ponto de Entrada</Text>
                        
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, entryPoint: itemValue }}) }
                            }>
                            <Picker.Item label="Unidade Sanitaria" value="0" />
                            <Picker.Item label="Escola" value="1" />
                            <Picker.Item label="Comunidade" value="1" />
                        </Picker>

                        <Text style={styles.txtLabel}>Parceiro</Text>
                        <Picker
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, partners: itemValue }}) }
                            }
                        >
                           

                        </Picker>
                        
                        <Text style={styles.txtLabel}>profiles</Text>
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, profiles: itemValue }}) }
                            }>
                       
                        </Picker>
                        
                        <Text style={styles.txtLabel}>Ponto de Referencias</Text>
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, us: itemValue }}) }
                            }>
                         
                        </Picker>

                        <Text style={styles.txtLabel}>Posto Administrativo </Text>
                        <Picker
                            // selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                { this.setState({ account:{ ...this.state.account, locality: itemValue }}) }
                            }>
                          
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
