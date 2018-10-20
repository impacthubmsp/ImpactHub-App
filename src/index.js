import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './redux/reducers'; // imports ./redux/reducers/index.js
import App from './App';
import rootSaga from './redux/sagas'; // imports ./redux/sagas/index.js
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange'


// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)
const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// flag to only use the logger if in development mode
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

// MaterialUI Theme applied over whole application
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily:['Voltaire', 'sansserif'],
  },
  palette: {
    primary: {
      main: teal[100],
      contrastText: '#455a64'
    },
    secondary: {
      main: deepOrange[300],
      contrastText: '#455a64'
    },
  },
  shape:{
    borderRadius:4
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react-root'),

);