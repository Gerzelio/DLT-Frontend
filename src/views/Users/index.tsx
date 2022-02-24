import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { connect } from 'dva';
import { SwipeListView } from 'react-native-swipe-list-view';

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

    editRow = (rowMap: any, rowKey: any) => {
        this.viewRow(rowMap, rowKey);
        console.log("on Edit Row");
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
            
            <View>
                  <Text>Name : {data.item.name} {data.item.surname}</Text>
                  <Text>Username : {data.item.username}</Text>
                  <Text>Parceiro : {data.item.partners?.name}</Text>
                </View>
        </TouchableHighlight>
    );

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
                onPress={() => this.editRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Edit</Text>
            </TouchableOpacity>
        </View>
    );


    render() {
        const { users: {users} } = this.props;
       
        return (
            <View style={styles.container}>
              <View style={styles.heading}>
                <Text style={styles.headingTest}>Lista de Utilizadores</Text>
                <TextInput ></TextInput>
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
              {/*
              <FlatList
                data={users}
                renderItem={({ item }) => <View style={styles.list}>
                  <Text>Name : {item.name} {item.surname}</Text>
                  <Text>Username : {item.username}</Text>
                  <Text>Parceiro : {item.partners?.name}</Text>
                </View>}
              />*/}
      
              <TouchableOpacity onPress={() => navigate({name: "UserForm", params: {}}) } style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

export default UsersMain;