import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./UI/css/styles.css";
import {
  registerForm,
  loginForm,
  resetPasswordForm,
  recoverPasswordForm
} from "./UI/FormFields";
import {
  signInUser,
  registerUser,
  resetPassword,
  recoverPassword
} from "./UI/FormsActions";
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
                  actionMethod={registerUser}
                  formTitle="Registration"
                  buttonText="Register"
                  formStructure={registerForm}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <AuthenticationForm
                  actionMethod={signInUser}
                  formTitle="Login"
                  buttonText="Login"
                  formStructure={loginForm}
                />
              )}
            />
            <Route
              exact
              path="/resetPassword"
              render={() => (
                <AuthenticationForm
                  actionMethod={resetPassword}
                  formTitle="Reset password"
                  buttonText="Reset"
                  formStructure={resetPasswordForm}
                />
              )}
            />
            <Route
              exact
              path="/recoverPassword"
              render={() => (
                <AuthenticationForm
                  actionMethod={recoverPassword}
                  formTitle="Recover password"
                  buttonText="Send Link"
                  formStructure={recoverPasswordForm}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
