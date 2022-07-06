import { useContext, useEffect, useState } from "react";
import jwt from 'jwt-decode';

import { AuthContext } from "../providers/AuthProvider";
import {editProfile, login as userLogin , register} from '../api';
import { setIteminLocalStorage , LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, getItemFromLocalStorage } from "../utils";



export const useAuth = () => {
    return useContext(AuthContext)
}



export const useProvideAuth = () => {
const [user , setUser] = useState(null);
const [loading , setLoading] = useState(null);

useEffect(() => {
    const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

    if(userToken){
        const user = jwt(userToken);

        setUser(user);
    }

    setLoading(false); 
} ,[]);


const updateUser = async (userId , name , password , confirmPassword) => {
    const response = await editProfile(userId , name , password , confirmPassword);

        console.log(response);
    if(response.success){
        //here we set the new user if we edit the name
        setUser(response.data.user)
        setIteminLocalStorage(
            LOCALSTORAGE_TOKEN_KEY ,
             response.data.token ? response.data.token : null
             );
        return{
            success: true,
        }
    }else{
        return{
            success: false,
            message: response.message,
        }
    }
}

const login = async (email , password) => {
    const response = await userLogin(email, password);
    console.log('respone',response)

    if(response.success){
        setUser(response.data.user)
        setIteminLocalStorage(LOCALSTORAGE_TOKEN_KEY , response.data.token ? response.data.token : null)
        return{
            success: true,
        }
    }else{
        return{
            success: false,
            message: response.message,
        }
    }
};

const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);

    if (response.success) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };


const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
};


return {
    user,
    login,
    logout,
    loading,
    signup,
    updateUser
}
};