import React,{useEffect,useContext} from 'react';
import {withRouter, useParams} from 'react-router-dom'
import axios from 'axios'

import {AuthContext} from "../../HOC/LoginHOC"
import {baseUrl} from '../../constants'


function RedirectComp({history}){
    const {
        setAuth,
        setUser,
      } = useContext(AuthContext);

      const {id} = useParams();

    useEffect(()=>{
        const user = axios
        .put(baseUrl + `users/${id}`)
        .then(
            (response) => {
              if (response.status === 200) {
                return response;
              } else {
                var error = new Error(
                  "Error " + response.status + ": " + response.statusText
                );
                error.response = response;
                throw error;
              }
            },
            (error) => {
              throw error;
            }
          )
          .then((response) =>  {
             setUser(response.data);
             setAuth(true);
             history.replace("/dashboard")
            })
          .catch((err)=>{
              console.log(err)
              history.replace("/")}
          )
    },[])
}

export default withRouter(RedirectComp);