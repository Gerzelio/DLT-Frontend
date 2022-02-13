
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, 
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';
import { UsersModelState } from '../../models/Users';        

import Input from "../../components/Inputs";

import styles from "./styles";

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
}

interface UsersState{
    username: string;
    password: string;
    email: string;
    name: string;
    website: string;
    location: string;
    bio: string;
}

@connect(({ users }: UsersModelState) => ({
    submitting: users,
}))
export default class Users extends Component<UsersProps, UsersState>{

    state: UsersState = {
        username: "",
        password: "",
        email: "",
        name: "",
        website: "",
        location: "",
        bio: "",
    };

    validate_fields = () => {
        const { username, password, email, name, website, location, bio } = this.state;

        //TODO perform validations

        return true;
    }

    handlerSave = () => {
        const { username, password, email, name, website, location, bio } = this.state;
        const { dispatch } = this.props;

        if (this.validate_fields() && dispatch) {
            console.log(username, password, email, name, website, location, bio);
            dispatch({
                type: 'users/create',
                payload: {
                    username,
                    password,
                    email,
                    name,
                    website,
                    location,
                    bio,
                }
            })
        }
    }

    render(){
        return(
            
            <KeyboardAvoidingView>
                <View>
    
                </View>
                <View >
                    <View>
                        <Text>Credentials will be sent to the user by email. A password will be generated automatically if not provided.</Text>
                    </View>
                    <View style={styles.containerPage}>
                        <Text style={styles.txtLabel}>email</Text>    
                        <Input 
                            styles={styles.input}
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="email"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ email: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Username</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="username"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ username: value }) }}
                        />
                                                    
                        <Text style={styles.txtLabel}>Password</Text>                       
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="password"
                            returnKeyType="send" 
                            onChangeText={(value : string)=> { this.setState({ password: value }) }} secureTextEntry
                        />
                        
                        <Text style={styles.txtLabel}>Name</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="name"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ name: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Website</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="website"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ website: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Location</Text>
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="location"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ location: value }) }}
                        />
                        
                        <Text style={styles.txtLabel}>Bio</Text>    
                        <Input 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            keyboardType='default'
                            name="bio"
                            returnKeyType="send"
                            onChangeText={(value : string)=> { this.setState({ bio: value }) }}/>
                            
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
