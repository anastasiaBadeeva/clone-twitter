import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import App from './App';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
