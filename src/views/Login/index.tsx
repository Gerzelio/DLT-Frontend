
import React, { useState} from "react";

import { View, KeyboardAvoidingView, 
        Image, TextInput, TouchableOpacity, 
        Text, Button, } 
        from 'react-native';
// import { Form } from '@unform/mobile';
// import { FormHandles } from '@unform/core'

import {useAuth} from "../../contexts/auth";

import Input from "../../components/Inputs";

import styles from "./styles";
import { login } from "../../services/auth";




const Login: React.FC = () =>{

    const { signed, loginData,user, login } = useAuth();
    // console.log(signed);
    // console.log(user);

    async function handlerLogin(user1: String, pass: String){

        login();
        // console.log('Logar');
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const [isSelected, setSelection] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.header}>

            </View>
            <View style={styles.containerPage}>
                <View style={styles.containerLogo}>
                    <Text>Sign in</Text>
                </View>
                <View style={styles.containerLogin}>
                    <Text 
                        style={styles.txtLabel}>Login
                    </Text>

                    {/* <TextInput style={styles.input} placeholder="" autoCorrect={false} onChangeText={()=> {}}/> */}
                    
                    <Input 
                        autoCorrect={false} 
                        autoCapitalize='none' 
                        keyboardType='default'
                        name="username"
                        returnKeyType="send"
                        onChangeText={(text : String)=> { this.State({ Username: text }) }} 
                    />

                    <Text style={styles.txtLabel}> Password (<Text style={styles.txtLink}>Forgot password?</Text>)</Text>
                   
                    {/* <TextInput style={styles.input} placeholder="" autoCorrect={false} onChangeText={()=> {}} secureTextEntry/> */}
                    
                    <Input 
                        autoCorrect={false} 
                        autoCapitalize='none' 
                        keyboardType='default'
                        name="password"
                        returnKeyType="send"
                        onChangeText={(text: String)=> { this.setState({ password: text }) }} 
                        secureTextEntry 
                    />

                    <View style={styles.checkboxContainer}>
                        {/* <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            // style={styles.checkbox}
                        /> */}
                        <Text style={styles.txtLabel}>Remember me next time</Text>
                    </View>

                    <TouchableOpacity style={styles.btnSubmit} onPress={handlerLogin(username,password)}>
                        <Text style={styles.txtSubmit}>SIGN IN</Text>
                    </TouchableOpacity>
                    {/* <Button style={styles.btnSubmit} title='Login' onPress={handlerLogin} /> */}
                    
                </View>
            </View>
            <View style={styles.container}>
                <Text></Text>
                <Image source={require('../../../assets/partners/Dreams_moz_icap_logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/Dreams_moz_Jhpiego_logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/DREAMS_MOZ_FHI360_LOGO.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/Dreams_mz_wei-combined_logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/dreams_moz_FGH_Logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/Dreams_moz_NWETI_logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/Dreams_mz_World_Vision_logo.png')}  style={styles.partners}/>
                <Image source={require('../../../assets/partners/DREAMS_moz_elizabethglaser_logo.png')}  style={styles.partners}/>                   

            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;