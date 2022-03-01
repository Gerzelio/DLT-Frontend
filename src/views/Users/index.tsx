import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'dva';
import { SwipeListView } from 'react-native-swipe-list-view';
import { HStack,Text, Avatar, Pressable, Icon, Box, Select,Heading, VStack, FormControl, Input, Link, Button, CheckIcon, WarningOutlineIcon, Center } from 'native-base';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { UsersModelState } from '../../models/Users';

import { navigate } from '../../routes/RootNavigation';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

interface UsersProps {
    dispatch: Dispatch<AnyAction>;
    users: UsersModelState;
}

@connect(
    ({
        users,
    }: {
        users: UsersModelState;
    }) => ({
        users,
    }),
  )
class UsersMain extends React.Component<UsersProps> {
    constructor(props: any){
        super(props); 
        const { dispatch } = this.props;

        dispatch({
            type: 'users/fetch',
        });
    }

    viewRow = (rowMap: any, rowKey: any) => {
      console.log(typeof(rowMap[0]), "on View Row");
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    onRowDidOpen = (rowKey: any) => {
        console.log('This row opened', rowKey);
    };
/*
    renderItem = (data: any) => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View>
                <Text>Name : {data.item.name} {data.item.surname}</Text>
                <Text>Username : {data.item.username}</Text>
                <Text>Parceiro : {data.item.partners?.name}</Text>
            </View>
        </TouchableHighlight>
    );

    */

    renderItem = (data: any) => (
        <Box>
            <Pressable onPress={() => navigate({name: "UserView", params: {user: data.item}})} 
                        alignItems="center" bg="white" 
                        borderBottomColor="trueGray.200" 
                        borderBottomWidth={1} justifyContent="center" 
                        height={50} 
                        _pressed={{bg: 'trueGray.200'}} py={8}
            >
                <HStack width="100%" px={4}>
                    <HStack space={2} alignItems="center">
                        <Avatar color="white" bg={'secondary.700'}>
                            {data.item.id}
                        </Avatar>
                        <VStack space={1} alignItems="center">
                            <Text fontSize="xs"  >Name : {data.item.name} {data.item.surname}</Text>
                            <Text>Username : {data.item.username}</Text>
                            <Text>Parceiro : {data.item.partners?.name}</Text>
                        </VStack>
                    </HStack>
                </HStack>
            </Pressable>
        </Box>
    );
/*
    renderHiddenItem = (data: any, rowMap: any) => (
        <View style={styles.rowBack}>
            
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => this.viewRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => navigate({name: "UserForm", params: {user: data.item}})}
            >
                <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
    */

    renderHiddenItem = (data: any, rowMap: any) => (
        <HStack flex={1} pl={2}>
            <Pressable px={4} ml="auto" bg="dark.500" justifyContent="center" 
                        onPress={() => navigate({name: "UserView", params: {user: data.item}})} 
                        _pressed={{opacity: 0.5}}
            >
                <Icon as={<Ionicons name="eye" />} color="white" />
            </Pressable>
            <Pressable px={4} bg="red.500" justifyContent="center" 
                        onPress={() => navigate({name: "UserForm", params: {user: data.item}})}
                        _pressed={{opacity: 0.5}}
            >
                <Icon as={<Ionicons name="pencil" />} color="white" />
            </Pressable>
        </HStack>
    );


    render() {
        const { users: {users} } = this.props;
       
        return (
            <ScrollView>
                <Box bg="white" safeArea flex={1}>
                <Heading size="lg" color="coolGray.800" 
                                    _dark={{ color: "warmGray.50"}} 
                                    fontWeight="semibold">
                    Lista de Utilizadores
                </Heading>
                
                    <SwipeListView 
                        data={users} 
                        renderItem={this.renderItem} 
                        renderHiddenItem={this.renderHiddenItem} 
                        rightOpenValue={-130} 
                        previewRowKey={'0'} 
                        previewOpenValue={-40} 
                        previewOpenDelay={3000} 
                        onRowDidOpen={this.onRowDidOpen} />
                
                {/*<SwipeListView
                    data={users}
                    renderItem={this.renderItem}
                    renderHiddenItem={this.renderHiddenItem}
                    //leftOpenValue={75} 
                    rightOpenValue={-150}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={this.onRowDidOpen}
                />*/}
      
              <TouchableOpacity onPress={() => navigate({name: "UserForm", params: {}}) } style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
              </TouchableOpacity>
              </Box>
            </ScrollView>
        )
    }
}

export default UsersMain;