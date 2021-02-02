import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Middle from "./Components/Middle.jsx";
import {Form,Footer,Copyright} from "./Components/Contact.js";
import NotFound from "./Components/NotFound";
import Classes from "./Components/classes";
import Sabroad from "./Components/studyabroad.js";
import IntroductionSection from "./Components/IntroductionSection";
 import AboutSection from "./Components/AboutSection";
import GlobalStyle from "./Components/GlobalStyle";


function App() {

 
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
           <Home />
           <GlobalStyle />
           <IntroductionSection />
           <AboutSection />
           <Middle />
           <Form />
           <Footer />
           <Copyright/> 
           {/* <Classes/> */}
          
          {/* <Sabroad/> */}
        </Route>
        
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    

  );
}

export default App;
