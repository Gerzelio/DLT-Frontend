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

    renderItem = (data: any) => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <HStack width="100%" px={4}
                    flex={1} space={5} alignItems="center">
                <Avatar color="white" bg={'warning.600'} >
                    {data.item.username.charAt(0).toUpperCase()}
                </Avatar>    
                <View>
                    <Text color="darkBlue.800">{data.item.username} </Text>
                    <Text color="darkBlue.800">{data.item.name} {data.item.surname}</Text>
                    <Text color="darkBlue.800">{data.item.partners?.name}</Text>
                </View> 
                
            </HStack>
        </TouchableHighlight>
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
                <Pressable px={4} ml="auto" bg="lightBlue.700" justifyContent="center" 
                            onPress={() => this.viewRow(rowMap, data.item.key)} 
                            _pressed={{opacity: 0.5}}
                >
                    <Icon as={<Ionicons name="eye" />} color="gray.200" />
                </Pressable> 
                <Pressable px={4} bg="lightBlue.800" justifyContent="center" 
                        onPress={() => navigate({name: "UserForm", params: {user: data.item}})}
                        _pressed={{opacity: 0.5}} 
            >
                <Icon as={<Ionicons name="pencil" />} color="gray.200" />
            </Pressable>
            </HStack>

    );

    render() {
        const { users: {users} } = this.props;
       
        return (
            
            <View style={styles.container}>
                <View style={styles.heading}>
                <Box alignItems="center" w="100%">
                <Input w={{base: "75%",md: "25%"}} 
                        InputLeftElement={<Icon as={<MaterialIcons name="search" />} 
                        size={5} ml="2" color="muted.700" />} placeholder="Search" />
                </Box>

                </View>
                <SwipeListView
                    data={users}
                    renderItem={this.renderItem}
                    renderHiddenItem={this.renderHiddenItem}
                    //leftOpenValue={75} 
                    rightOpenValue={-150}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={this.onRowDidOpen}
                />
    
                <TouchableOpacity onPress={() => navigate({name: "UserForm", params: {}}) } style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </View>
      
        )
    }
}

export default UsersMain;