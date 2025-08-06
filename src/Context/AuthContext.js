import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

        const login =(token)=>{
            setIsLoading(true)
            setUserToken(token);
            AsyncStorage.setItem('userToken', token)
            setIsLoading(false);
        }
        const logout =()=> {
            setIsLoading(true)
            setUserToken(null);
            AsyncStorage.removeItem('userToken')
            setIsLoading(false);
        }
        // this is testing fucntion just to build apk
        const testing = async () => {
            setIsLoading(true)
            try {
                let testToken = await AsyncStorage.getItem('userToken'); 
                if (!testToken) {
                    setUserToken(null); 
                    setIsLoading(false)
                } else {
                    setUserToken(testToken); 
                    setIsLoading(false)
                }
            } catch (error) {
                console.error("Error checking token:", error);
            }
        };
        
        // const isLoggedIn = async () => {
        //     try {
        //         setIsLoading(true);
        //         const userToken = await AsyncStorage.getItem('userToken');
        
        //         if (!userToken) {
        //             setUserToken(null);
        //             setIsLoading(false);
        //             return;
        //         }
        //         const response = await axios.get(`http://localhost:3000/users?token=${userToken}`);
                
        //         if (response.data && response.data.length > 0) {
        //             const serverToken = response.data[0].token; 
        //             if (serverToken === userToken) {
        //                 setUserToken(userToken);
        //             } else {
        //                 setUserToken(null);
        //                 await AsyncStorage.removeItem('userToken'); 
        //             }
        //         } else {
        //             setUserToken(null);
        //             await AsyncStorage.removeItem('userToken');
        //         }
        //     } catch (error) {
        //         console.error('isLoggedIn error:', error);
        //         setUserToken(null); 
        //         await AsyncStorage.removeItem('userToken'); 
        //     } finally {
        //         setIsLoading(false); 
        //     }
        // };
        
        useEffect(() => {
            // isLoggedIn();
            testing()
        }, []);
        


    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}
