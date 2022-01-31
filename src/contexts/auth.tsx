
import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';
import api from '../services/api';

interface User {
    id: number;
    name: string;
    username: string;
}

interface loginData {
    username: number;
    password: string;
}

interface AuthContextData{
    signed: boolean;
    user: User | null;
    loginData: User | null;
    loading: boolean;
    role: string | null;
    login(): Promise<void>;
    logOut():void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    // const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function localStorageData(){
            const storageUser = await AsyncStorage.getItem('@DLTAuth:user');
            // const storageRole = await AsyncStorage.getItem('@DLTAuth:role');
            const storageToken = await AsyncStorage.getItem('@DLTAuth:token');

            // await new Promise(resolve => setTimeout(resolve, 2000));

            if (storageUser && storageToken){
                api.defaults.headers.Autorization = 'Bearer ${storageToken}';
                setUser(JSON.parse(storageUser));
            }
            setLoading(false);
        }

        localStorageData();
    },[]);

   async function login(user1: string, pass: string) {
    //   const response = await auth.login();

    // const username1 = mydata.getParam('usename');
    // const password1 =  mydata.getParam('password');

      const { data } = await api.post('api/login?username=admin&password=1234');

    //   setUser(response.user);
        setUser(data.account);
        console.log(data);

        // localStorage.setItem('token', JSON.stringify(token);

    //   api.defaults.headers.Autorization = 'Bearer ${response.token}';
      api.defaults.headers.Autorization = 'Bearer ${data.token}';
      
      await AsyncStorage.setItem('@DLTAuth:user', JSON.stringify(data.account));
      await AsyncStorage.setItem('@DLTAuth:role', data.account.profiles.name);
      await AsyncStorage.setItem('@DLTAuth:token', data.token);
      
   }

   function logOut(){
       AsyncStorage.clear().then(() =>{
        setUser(null);
       });
   }

    return(
        <AuthContext.Provider value={{signed: !!user,user, loading, login, logOut}} >
        {/* // <AuthContext.Provider value={{signed: !!token,token, loading, role, login, logOut}} > */}
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

// export default AuthContext;