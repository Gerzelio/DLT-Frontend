import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'dva';

import { UsersModelState } from '../../models/Users';

import styles from './styles.js';

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
class Demo3 extends React.Component<UsersProps> {
    constructor(props: any){
        super(props); 
        const { dispatch } = this.props;

        dispatch({
            type: 'users/fetch',
        });
    }

    render() {
        const { users: {users} } = this.props;
        console.log(this.props);
        return (
            <View style={styles.container}>
              <View style={styles.heading}>
                <Text style={styles.headingTest}>Lista de Utilizadores</Text>
              </View>
      
              <FlatList
                data={users}
                renderItem={({ item }) => <View style={styles.list}>
                  <Text>Name : {item.name} {item.surname}</Text>
                  <Text>Username : {item.username}</Text>
                  <Text>Parceiro : {item.partners?.name}</Text>
                </View>}
              />
      
              <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
              </TouchableOpacity>
      
            </View>

        )
    }
}

export default Demo3;