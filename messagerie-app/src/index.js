import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/app-context"

const container = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <AppContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContextProvider>
    </React.StrictMode>,
    container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
debugContextDevtool(container, {debugReducer: true, disable: false});

