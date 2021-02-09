import { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
        @media (max-width: 414px){
            font-size: 75%;
        }
    @media (max-width: 604px){
        font-size: 85%;
    }
    @media (max-width: 800px){
        font-size: 95%;
    }
    @media (max-width: 890px){
        font-size: 100%;
    }
}
    
    body{

    background: #FFF;
    font-family: "Poppins",sans-serif;
    }
    
    button{
    cursor: pointer;
    background: rgba(16, 90, 246,0.72);
    color: white;
    border: none;
    border-radius: 9px;
    padding: .8rem 2rem;
    box-shadow: 0px 10px 15px 0px rgba(78,93,225,.47);
    text-shadow: 0px 10px 15px rgba(78,93,225,0.47);
        p {
        mix-blend-mode: screen;
        }
        
    }


`;

export default GlobalStyle;
