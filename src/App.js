import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Middle from "./Components/Middle.jsx";
import {Form2,Copyright,Footer} from "./Components/Contact.js";
import NotFound from "./Components/NotFound";
import Classes from "./Components/classes";
import StudyAbroad from "./Components/newStudy.js";
import IntroductionSection from "./Components/IntroductionSection";
import AboutSection from "./Components/AboutSection";
import GlobalStyle from "./Components/GlobalStyle";
import Dashboard from "./Components/newDashboard.js";
import EntranceExamCourse from "./Components/EntranceExam";
import Login from "./Components/Login"

import { ConversionContextProvider } from './HOC/LoginHoc';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        this.props.auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <ConversionContextProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
          <GlobalStyle />
          <IntroductionSection />
          <AboutSection />
          {/* <EntranceExamCourse /> Put it where ever needed */}
          <Middle />
          <Login />
          <Form2 />
          <Footer />
          <Copyright />
          {/* <Classes/> */}
          {/* <StudyAbroad/> */}
        </Route>

        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
    </ConversionContextProvider>
  );
}

export default App;
