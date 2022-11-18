import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./MainNavigation1.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation1 = () => {
  const authCtx = useContext(AuthContext);
  const {isFederated, setIsFederated} = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const loginOutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Tapis Rouge</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn || !isFederated ? (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          ) : ''}
          {isLoggedIn || isFederated ? (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ): ''}
          {isLoggedIn || isFederated ?  (
            <li>
              <NavLink to="/quotes" activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
          ) : ''}
          {isLoggedIn || isFederated  ? (
            <li>
              <NavLink to="/new-quote" activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          ) : ''}
          {isLoggedIn || isFederated ? (
            <li>
              <button onClick={loginOutHandler}>Logout</button>
            </li>
          ) : ''}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation1;
