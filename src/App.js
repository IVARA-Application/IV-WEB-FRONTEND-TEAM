import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Middle from "./Components/Middle.jsx";
import {Form,Footer,Copyright} from "./Components/Contact.js";
import NotFound from "./Components/NotFound";




function App() {

 
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
          <Middle />
          <Form />
          <Footer />
          <Copyright/>
        </Route>
        
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    

  );
}

export default App;
