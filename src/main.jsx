import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_HYGRAPH_URI,
  cache: new InMemoryCache(),
});
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </>
);
