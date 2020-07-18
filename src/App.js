import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./UI/css/styles.css";
import { registerForm, loginForm } from "./UI/FormFields";
import { signInUser, registerUser } from "./UI/FormsActions";
import Home from "./UI/Home";
const Header = lazy(() => import("./UI/Header"));
const AuthenticationForm = lazy(() => import("./UI/AuthenticationForm"));

export default function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <i>Loading ...</i>
          </div>
        }
      >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/register"
              render={() => (
                <AuthenticationForm
                  action="register"
                  formTitle="Registration"
                  buttonText="Register"
                  formStructure={registerForm}
                  registerUser={registerUser}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <AuthenticationForm
                  action="login"
                  formTitle="Login"
                  buttonText="Login"
                  formStructure={loginForm}
                  signInUser={signInUser}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
