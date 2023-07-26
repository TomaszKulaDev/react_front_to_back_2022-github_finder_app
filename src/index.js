import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GithubProvider} from "./context/github/GithubContext";
import {AlertProvider} from "./context/alert/AlertContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AlertProvider>
            <GithubProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </GithubProvider>
        </AlertProvider>
    </React.StrictMode>
);


