import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {Provider} from "react-redux";
import {store} from './store/configureStore'
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>


    , rootElement);
