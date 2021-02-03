import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Middle from "./Components/Middle.jsx";
import { Form, Footer, Copyright } from "./Components/Contact.js";
import NotFound from "./Components/NotFound";
import Classes from "./Components/classes";
import StudyAbroad from "./Components/newStudy.js";
import IntroductionSection from "./Components/IntroductionSection";
import AboutSection from "./Components/AboutSection";
import GlobalStyle from "./Components/GlobalStyle";
import Dashboard from "./Components/newDashboard.js";
import EntranceExamCourse from "./Components/EntranceExam";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
          <GlobalStyle />
          <IntroductionSection />
          <AboutSection />
          <EntranceExamCourse /> {/* Put it where ever needed */}
          <Middle />
          <Form />
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
  );
}

export default App;
