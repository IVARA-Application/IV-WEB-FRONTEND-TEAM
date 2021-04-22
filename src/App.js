import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import HomeComp from "./Components/HomeRoute";
import LoginComp from "./Components/LoginRoute";
import VideoDash from "./Components/HomeRoute/VideoDash";

import { AuthContext } from "./HOC/LoginHOC";
import GoogleAuthRouteCompoment from "./Components/GoogleAuthRoute";
import FaqPage from "./pages/faqpage";
import EntranceExamPage from "./pages/entranceExamPage";
import DashboardPage from "./pages/dashboardPage";
import LoginPage from "./pages/loginPage";
import VideoRenderPage from "./pages/videoRenderPage";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
          <Route exact path="/faq">
            <FaqPage />
          </Route>
          <Route exact path="/entranceexam">
            <EntranceExamPage />
          </Route>
          <Route
            exact
            path="/video/:skill/:subject/:code"
            component={VideoRenderPage}
          />
        </>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
