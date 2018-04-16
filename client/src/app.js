import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { myAction2, myAction } from './actions/actions';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.dispatch(myAction()));

ReactDOM.render(
  <div>
    <Provider store={store}>
      <MuiThemeProvider>
        <Dashboard />
      </MuiThemeProvider>
    </Provider>
  </div>,
  document.getElementById('app')
);
