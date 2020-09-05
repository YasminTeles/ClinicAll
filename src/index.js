import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux';
import store from "./store";

import App from "./App"
import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory"

import "./index.scss"

ReactDOM.render(
    <Router>
      <Auth0ProviderWithHistory>
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      </Auth0ProviderWithHistory>
    </Router>,
  document.getElementById("root"),
)
