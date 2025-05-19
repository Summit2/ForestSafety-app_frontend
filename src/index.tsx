import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './store';
import App from './App';
import './index.css';
import { useSelector } from 'react-redux';
import { RootState } from './store';

import server from "@api/mocks/server";
alert('SDSDD')
const polygons = useSelector((state: RootState) => state.polygons.polygons);
alert(polygons)
server(polygons);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
