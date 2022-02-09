
import React from "react";

import { View, KeyboardAvoidingView, 
        TextInput, TouchableOpacity, 
        Text, Button} 
        from 'react-native';

import Input from "../../components/Inputs";

import styles from "./styles";


export default class Users extends React.Component{

    constructor(props: any){
        super(props)
        this.state={
            username: "",
            password: "",
            email: "",
            name: "",
            website: "",
            location: "",
            bio: "",
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
                    <View>
                        <Text>email</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ email: value }) }}/>
                        
                        <Text>Username</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ username: value }) }}/>
                                                    
                        <Text> Password</Text>
                       
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ password: value }) }} secureTextEntry/>
                        
                        <Text>Name</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ name: value }) }}/>
                        
                        <Text>Website</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ website: value }) }}/>
                        
                        <Text>Location</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ location: value }) }}/>
                        
                        <Text>Bio</Text>
    
                        <TextInput placeholder="" autoCorrect={false} onChangeText={(value)=> { this.setState({ bio: value }) }}/>
                            
                        <TouchableOpacity >
                            <Text >Save</Text>
                        </TouchableOpacity>
                        {/* <Button onPress={""} title='Save' /> */}
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
