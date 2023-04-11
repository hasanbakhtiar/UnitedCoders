import React from 'react';
import ReactDOM from 'react-dom';
import {getBlogsFromDatabase } from './actions/blogAction';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import App from './App';
import { Provider } from 'react-redux';
const store = configureStore();



const result = (
  <Provider store={store}>
      <App />
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})


