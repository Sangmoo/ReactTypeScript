import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
//import registerServiceWorker from './registerServiceWorker'; // CRA 최신 버전에서는 ./serviceWorker로 사용
import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

// registerServiceWorker(); // CRA 최신 버전에서는 serviceWorker.unregister()으로 사용
serviceWorker.unregister();
