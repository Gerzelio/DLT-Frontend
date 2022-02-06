
import  createContext from "react";
import { AppRegistry } from "react-native";

import api from '../services/api';

// const reducer = (state, action) =>{
//     switch (action.type){
//         default:
//             return state;
//     }
// };

// const teste = (dispatch) =>{
//     return (args)=> {
//         console.log(args);
//     }
// };


// Registo de usuario
const createUser = (dispatch) => {
    return async (name, surname, password) =>{
        try{
            await api.post('/users',{
                name: name,
                surname: surname,
                password: password,    
            });
        } catch (e){
            console.log(e);
        }
    };
};

// Login de usuario
const loginUser = (dispatch) => {
    return async (username, password) =>{
        try{
            await api.post('/users',{
                username: username,
                password: password,
            });
        } catch (e){
            console.log(e);
        }
    };
};

async function name(params:type) {
    
}

export const { Context, Provider} = createContext(
    // reducer,
    {createUser, loginUser},
    initialState,
);