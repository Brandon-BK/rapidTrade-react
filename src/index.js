import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import { AuthContextProvider } from "./components/store/auth-context";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
