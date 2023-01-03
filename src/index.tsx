import React from "react"
import ReactDOM from "react-dom/client"
import createStore from "./etc/store"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import theme from "./constants/theme"

import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const routes = require("./containers").default
const store = createStore({})
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App routes={routes()} store={store} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
