import React, { createContext, useState,useEffect } from 'react';
export const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  
  useEffect(()=>{
  },[]);

    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [auth, setAuth] = useState(localStorage.getItem('token') ? true : false);

    const contextValue = {
      user,
      setUser,
      auth,
      setAuth,
      token,
      setToken
    };

    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  }; 