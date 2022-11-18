import React, { Suspense, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AuthContext from "./components/store/auth-context";
// import UserProfile from './components/Profile/UserProfile'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMmIWOOxlzTyr3ufamqoWxPphekd2-11Q",
  authDomain: "brandon-firebase-project.firebaseapp.com",
  databaseURL: "https://brandon-firebase-project-default-rtdb.firebaseio.com",
  projectId: "brandon-firebase-project",
  storageBucket: "brandon-firebase-project.appspot.com",
  messagingSenderId: "183276874733",
  appId: "1:183276874733:web:33d0eee2c204a81f9895e4",
  measurementId: "G-6Q7HXYWC87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));




const AuthPage = React.lazy(() => import("./components/Auth/AuthForm"));
const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);
const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetails />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile">
            {authCtx.isLoggedIn && <UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to="/auth" />}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
