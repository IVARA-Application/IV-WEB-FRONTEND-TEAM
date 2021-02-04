import React, { createContext, useState,useEffect } from 'react';
export const ConversionContext = createContext();



export const ConversionContextProvider = ({ children }) => {
  async function getMarker() {
    const snapshot = await firebase.firestore().collection('Machines').get()
     snapshot.docs.map(doc => MACHINE.push(doc.data()));
     setMachine(MACHINE);
  }
  useEffect(()=>{
    getMarker();
  },[]);

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [authenticated, setAuthenticated] = useState("");

    const contextValue = {
      displayName,
      setDisplayName,
      email,
      setEmail,
      authenticated,
      setAuthenticated
    };
  
    return (
      <ConversionContext.Provider value={contextValue}>
        {children}
      </ConversionContext.Provider>
    );
  };