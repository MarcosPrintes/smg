import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProvider } from '@theme/ThemeProvider';

import {AsideMenu} from "@components/AsideMenu";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AsideMenu />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
