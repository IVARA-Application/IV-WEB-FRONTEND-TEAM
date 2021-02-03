import { createGlobalStyle } from "styled-components";
import React from "react";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1424px){
        font-size: 80%;
        .circle{
            height: 32rem;
            width: 32rem;
        }
    }
    @media (max-width: 1200px){
        font-size: 70%;
        .circle{
            top: 50%;
            left: 50%;
            height: 30rem;
            width: 30rem;
        }
    }
    @media (max-width: 1100px){
        font-size: 60%;
    }
}
body{
    background: #FFF;
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
    p{
        mix-blend-mode: screen;
    }
}
`;

export default GlobalStyle;