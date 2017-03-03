import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBv2K7OMV5-txpLtoxmQsS_HIyVuNUITg',
      authDomain: 'manager-9c9df.firebaseapp.com',
      databaseURL: 'https://manager-9c9df.firebaseio.com',
      storageBucket: 'manager-9c9df.appspot.com',
      messagingSenderId: '961536398854'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
