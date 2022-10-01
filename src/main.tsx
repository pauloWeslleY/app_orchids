import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./themes/themes";
import "./sass/global.scss";

const element = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(element).render(
   <React.StrictMode>
      <ChakraProvider theme={theme}>
         <App />
      </ChakraProvider>
   </React.StrictMode>
);
