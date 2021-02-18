import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarProvider } from "./context/NavContext";
import { MovieContextProvider } from "./context/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <MovieContextProvider>
        <Router>
          <App />
        </Router>
      </MovieContextProvider>
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
