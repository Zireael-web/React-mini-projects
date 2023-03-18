import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material'

import './index.css';
import App from './components/App';

const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#da61bf'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
