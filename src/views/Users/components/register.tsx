
import React, { useState, Component } from "react";
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { View, KeyboardAvoidingView, ScrollView} from 'react-native';
import { Center, Box, Select, Text, Heading, VStack, FormControl, Input, Link, Button, CheckIcon, WarningOutlineIcon, HStack, Alert} from 'native-base';

import { UsersModelState, Users } from '../../../models/Users';  
import { AuthModelState } from "../../../models/Auth";
import { PartnersModelState, Partners } from '../../../models/Partners';
import { ProfilesModelState, Profiles } from '../../../models/Profiles';
import { UsModelState, Us } from '../../../models/Us';
import { LocalityModelState, Locality } from '../../../models/Locality'; 
import Dashboard from "../../../components/Dashboard";     

//import styles from './styles';
import { color } from "native-base/lib/typescript/theme/styled-system";

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
    errors: Users
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
export default class UsersRegistrationForm extends Component<UsersProps, UsersState>{
    constructor(props: any) {
        super(props) 
        this.state = {
            account: {
                partners: {},
                profiles:{},
                locality:{},
                us:{}
            },
            errors:{
            }
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

    validate = () => {
        const { account, errors } = this.state;
        var requiredFieldMessage  = 'Este campo é Obrigatorio';
        var valid = true;

        if (account.surname === undefined || account.surname === '') {
            this.setState({
                errors:{
                    ...errors,
                    surname: requiredFieldMessage
                }
            });
          valid = false;
        } 
        if (account.name === undefined || account.name === '') {
            this.setState({
                errors:{
                      ...errors,
                      name: requiredFieldMessage
                }
            });
            valid = false;
        } 
        if (account.username === undefined || account.username === '') {
            this.setState({
                errors:{
                      ...errors,
                      username: requiredFieldMessage
                }
            });
            valid = false;
        } 
        if (account.password === undefined || account.password === '') {
            this.setState({
                errors:{
                      ...errors,
                      password: requiredFieldMessage
                }
            });
            valid = false;
        } 
        if (account.entryPoint === undefined || account.entryPoint === '') {
            this.setState({
                errors:{
                      ...errors,
                      entryPoint: requiredFieldMessage
                }
            });
            valid = false;
        }
        if (account.partners.id === undefined || account.partners.id === '') {
            this.setState({
                errors:{
                      ...errors,
                      partners: requiredFieldMessage
                }
            });
            valid = false;
        }
        if (account.profiles.id === undefined || account.profiles.id === '') {
            this.setState({
                errors:{
                      ...errors,
                      profiles: requiredFieldMessage
                }
            });
            valid = false;
        }
        if (account.locality.id === undefined || account.locality.id === '') {
            this.setState({
                errors:{
                      ...errors,
                      locality: requiredFieldMessage
                }
            });
            valid = false;
        }
        if (account.us.id === undefined || account.us.id === '') {
            this.setState({
                errors:{
                      ...errors,
                      us: requiredFieldMessage
                }
            });
            valid = false;
        }
        if (account.status === undefined || account.status === '') {
            this.setState({
                errors:{
                      ...errors,
                      status: requiredFieldMessage
                }
            });
            valid = false;
        }
    
        return valid;
    }

    handleSave = () => {
        const { account } = this.state;
        const { dispatch } = this.props;

        if (this.validate() && dispatch) {
           /*dispatch({
                type: 'users/create',
                payload: account
            })
            */
           console.log('valid');
        }else{
            console.log('invalid');
        }
    }

    render(){
        const { userLogged, partners: { partners }, profiles: { profiles }, us: { us }, localities: { localities } } = this.props;
        const { errors } = this.state;
        
        
        return(
            <KeyboardAvoidingView>
                <ScrollView>
                    <Center w="100%" bgColor="white">
                        <Box safeArea p="2" w="90%" py="8">
                            <Heading size="lg" color="coolGray.800" 
                                    _dark={{ color: "warmGray.50"}} 
                                    fontWeight="semibold"
                                    marginBottom={5}
                                    marginTop={0} >
                                Registo do Utilizador
                            </Heading>
                            <Alert  status="info" colorScheme="info">
                                <HStack flexShrink={1} space={2} alignItems="center">
                                    <Alert.Icon />
                                    <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                                        Preencha os campos abaixo para registar novo utilizador!
                                    </Text>
                                </HStack>
                            </Alert>
                            <VStack space={3} mt="5">
                                <FormControl isRequired isInvalid={errors.surname !== undefined }>
                                    <FormControl.Label>Apelido</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Apelido" 
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, surname: value },
                                                                                                errors: { ...this.state.errors, username: undefined}}) }}/>
                                    {'surname' in errors ? <FormControl.ErrorMessage>{errors.surname}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <FormControl isRequired>
                                    <FormControl.Label>Nome</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Nome"
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, name: value }}) }}/>
                                        
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Email"
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, email: value }}) }}/>
                                        
                                </FormControl>
                                <FormControl isRequired>
                                    <FormControl.Label>Username</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Username"
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, username: value }}) }}/>
                                        
                                </FormControl>
                                <FormControl isRequired>
                                    <FormControl.Label>Password</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Password"
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, password: value }}) }}/>
                                        
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Telemóvel</FormControl.Label>
                                    <Input variant="filled" placeholder="Insira o seu Telemóvel"
                                            onChangeText={(value : string)=> { this.setState({ account:{ ...this.state.account, phoneNumber: value }}) }}/>
                                        
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.entryPoint !== undefined }>
                                    <FormControl.Label>Ponto de Entrada</FormControl.Label>
                                    <Select defaultValue="0" minWidth="200" placeholder="Seleccione o Ponto de Entrada" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size={5} />
                                        }} mt="1"
                                        onValueChange={(itemValue) =>{ 
                                            if(itemValue !== ""){
                                                this.setState({ account:{ ...this.state.account, entryPoint: itemValue },
                                                                errors: { ...this.state.errors, entryPoint: undefined}}) 
                                            }
                                        }}
                                    >
                                        <Select.Item label=" --Seleccione o Ponto de Entrada --" value="0" />
                                        <Select.Item label="Unidade Sanitaria" value="1" />
                                        <Select.Item label="Escola" value="2" />
                                        <Select.Item label="Comunidade" value="3" />
                                    </Select>
                                    {'entryPoint' in errors ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.entryPoint}</FormControl.ErrorMessage> : ''}   
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.partners !== undefined }>
                                    <FormControl.Label>Parceiro</FormControl.Label>
                                    <Select minWidth="200"  
                                            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5} />}} 
                                            mt="1"
                                            selectedValue={this.state.account.partners.id || ""}
                                            onValueChange={(itemValue) =>{ 
                                                if(itemValue !== ""){
                                                    this.setState({ account:{ ...this.state.account, partners: {"id": itemValue}},
                                                                    errors: { ...this.state.errors, partners: undefined}}) 
                                                }
                                            }}
                                    >
                                        <Select.Item label="--Seleccione o Parceiro--" value="" />
                                        { 
                                            partners.map(item => (
                                                <Select.Item key={String(item.id)} label={item.name} value={String(item.id)} />
                                            ))
                                        }
                                    </Select>
                                    {'partners' in errors? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.partners}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.profiles !== undefined }>
                                    <FormControl.Label>Perfil</FormControl.Label>
                                    <Select minWidth="200"  
                                            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5} />}} 
                                            mt="1"
                                            selectedValue={this.state.account.profiles.id || ""}
                                            onValueChange={(itemValue) =>{ 
                                                if(itemValue !== ""){
                                                    this.setState({ account:{ ...this.state.account, profiles: {"id": itemValue} },
                                                                    errors: { ...this.state.errors, profiles: undefined}}) 
                                                }
                                            }}
                                    >
                                        <Select.Item label="--Seleccione o Perfil--" value="" />
                                        { 
                                            profiles.map(item => (
                                                <Select.Item key={String(item.id)} label={item.name} value={String(item.id)} />
                                            ))
                                        }
                                    </Select>
                                    {'profiles' in errors ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.profiles}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.locality !== undefined }>
                                    <FormControl.Label>Localidade</FormControl.Label>
                                    <Select minWidth="200"  
                                            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5} />}} 
                                            mt="1"
                                            selectedValue={this.state.account.locality.id || ""}
                                            onValueChange={(itemValue) =>{ 
                                                if(itemValue !== ""){
                                                    this.setState({ account:{ ...this.state.account, locality: {"id": itemValue} },
                                                                    errors: { ...this.state.errors, locality: undefined}}) 
                                                }
                                            }}
                                    >
                                        <Select.Item label="--Seleccione a localidade--" value="" />
                                        { 
                                            localities.map(item => (
                                                <Select.Item key={String(item.id)} label={item.name} value={String(item.id)} />
                                            ))
                                        }
                                    </Select>
                                    {'locality' in errors ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.locality}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.us !== undefined }>
                                    <FormControl.Label>US</FormControl.Label>
                                    <Select minWidth="200"  
                                            _selectedItem={{ bg: "teal.600", endIcon: <CheckIcon size={5} />}} 
                                            mt="1"
                                            selectedValue={this.state.account.us.id || ""}
                                            onValueChange={(itemValue) =>{ 
                                                if(itemValue !== ""){
                                                    this.setState({ account:{ ...this.state.account, us: {"id": itemValue} },
                                                                    errors: { ...this.state.errors, us: undefined}}) 
                                                }
                                            }}
                                    >
                                        <Select.Item label="--Seleccione a US--" value="" />
                                        { 
                                            us.map(item => (
                                                <Select.Item key={String(item.id)} label={item.name} value={String(item.id)} />
                                            ))
                                        }
                                    </Select>
                                    {'us' in errors ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.us}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <FormControl isRequired isInvalid={errors.status !== undefined }>
                                    <FormControl.Label>Estado</FormControl.Label>
                                    <Select minWidth="200" 
                                            _selectedItem={{bg: "teal.600",endIcon: <CheckIcon size={5} />}} 
                                            mt="1"
                                            defaultValue=""
                                            onValueChange={(itemValue) =>{ 
                                                if(itemValue !== ""){
                                                    this.setState({ account:{ ...this.state.account, status: Number(itemValue) },
                                                                    errors: { ...this.state.errors, status: undefined} }) 
                                                }
                                            }}
                                    >
                                        <Select.Item label="--Seleccione o Estado --" value="" />
                                        <Select.Item label="Activo" value="1" />
                                        <Select.Item label="Inactivo" value="0" />
                                    </Select>
                                    {'status' in errors ? <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.status}</FormControl.ErrorMessage> : ''}
                                </FormControl>
                                <Button mt="2" colorScheme="lightBlue" bg="lightBlue.900" onPress={this.handleSave}>
                                        Registar
                                </Button>
                            </VStack>
                        </Box>
                    </Center>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
