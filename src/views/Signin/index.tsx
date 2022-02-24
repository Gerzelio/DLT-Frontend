import React, { Component } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Platform, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Center, Box, Text, Heading, VStack, FormControl, Input, Link, Button } from 'native-base';


interface LoginProps {
    dispatch: Dispatch<AnyAction>;

}

interface LoginData{
    username?: string;
    password?: string;
}

interface LoginState {
    formData: LoginData;
    errors: LoginData;
}

export default class Login extends Component<LoginProps, LoginState>{
    constructor(props: any){
        super(props); 
    }

    state: LoginState = {
        formData: {},
        errors: {}
    }

    validate = () => {
        const { formData, errors } = this.state;

        if (formData.username === undefined || formData.username === '') {
          this.setState({
              errors:{
                    ...errors,
                    username: 'Username Obrigatorio'
              }
          });
          return false;
        } else if (formData.password === undefined || formData.password === '') {
            this.setState({
                errors:{
                      ...errors,
                      password: 'Password Obrigatorio'
                }
            });
          return false;
        }
    
        return true;
    }

    onSubmit = () => {
        this.validate() ? console.log('Submitted') : console.log('Validation Failed');
    }
    
    render(){
        const { errors } = this.state;
        return(
            <View>
                { 
                    Platform.OS == 'web' ? 
                        // IF WEB BUILD
                        <Center w="60%">
                            <Text>LOGIN IN WEB </Text>
                        </Center>
                    :   // IF MOBILE BUILD
                        <Center w="100%">
                            <Box safeArea p="2" w="100%" maxW="290" py="8">
                                <Heading size="lg" color="coolGray.800" 
                                        _dark={{ color: "warmGray.50"}} 
                                        fontWeight="semibold">
                                    Welcome
                                </Heading>
                                <Heading mt="1" color="coolGray.600" 
                                        _dark={{ color: "warmGray.200" }} 
                                        fontWeight="medium" size="xs">
                                    Sign in to continue!
                                </Heading>
                                <VStack space={3} mt="5">
                                    <FormControl isRequired isInvalid={errors.username!==undefined }>
                                        <FormControl.Label>Username</FormControl.Label>
                                        <Input placeholder="Insira o seu Username"
                                                onChangeText={value => { this.setState({ formData:{ ...this.state.formData, username: value },
                                                                                            errors: { ...this.state.errors, username: undefined}}) }}/>
                                        {'username' in errors ? <FormControl.ErrorMessage>{errors.username}</FormControl.ErrorMessage> : ''}
                                    </FormControl>
                                    <FormControl isRequired isInvalid={errors.password!==undefined}>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <Input placeholder="Insira a sua Password" type="password" 
                                                onChangeText={value => { this.setState({ formData:{ ...this.state.formData, password: value },
                                                                                            errors: { ...this.state.errors, password: undefined}}) }}/>
                                        {'password' in errors ? <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> : ''}
                                        <Link _text={{
                                                    fontSize: "xs",
                                                    fontWeight: "500",
                                                    color: "indigo.500"}} 
                                                alignSelf="flex-end" mt="1">
                                            Forget Password?
                                        </Link>
                                    </FormControl>
                                    <Button mt="2" colorScheme="tertiary" onPress={this.onSubmit}>
                                        Sign in
                                    </Button>
                                </VStack>
                            </Box>
                        </Center>
                }
            </View>
            
        );
    }
}