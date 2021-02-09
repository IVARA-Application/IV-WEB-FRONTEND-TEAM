import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
import HomeComp from "./Components/HomeRoute";
import LoginComp from "./Components/LoginRoute";
import DashboardComp from "./Components/DashboardRoute";
import RedirectComp from "./Components/RedirectRoute"

import { AuthContext } from "./HOC/LoginHOC";



function App() {
  const { auth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        {!auth ? (
          <>
            <Route exact path="/">
              <HomeComp />
            </Route>
            <Route exact path="/login">
              <LoginComp />
            </Route>
            <Route exact path="/redirect/:id">
              <RedirectComp />
            </Route>

          </>
        ) : (
            <>
              <Route exact path="/dashboard">
                <DashboardComp />
              </Route>
            </>
          )}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
