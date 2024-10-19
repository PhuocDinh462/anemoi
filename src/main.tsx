import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import store from './redux/store.ts';
import { Provider } from 'react-redux';
import i18n from '@/i18n/index.ts';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
