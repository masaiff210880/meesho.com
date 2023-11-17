
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
  </ChakraProvider>
  ,
);


