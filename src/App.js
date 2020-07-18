import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./UI/css/styles.css";
import Home from "./UI/Home";
import Header from "./UI/Header";

const LoginForm = lazy(() => import("./UI/IndividualForms/LoginForm"));
const RegisterForm = lazy(() => import("./UI/IndividualForms/RegisterForm"));
const ResetPasswordForm = lazy(() =>
  import("./UI/IndividualForms/ResetPasswordForm")
);
const RecoverPasswordForm = lazy(() =>
  import("./UI/IndividualForms/RecoverPasswordForm")
);

export default function App() {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div>
            <i>Loading ...</i>
          </div>
        }
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/register" render={() => <RegisterForm />} />
            <Route exact path="/login" render={() => <LoginForm />} />
            <Route
              exact
              path="/resetPassword"
              render={() => <ResetPasswordForm />}
            />
            <Route
              exact
              path="/recoverPassword"
              render={() => <RecoverPasswordForm />}
            />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
