import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            'Hello!'
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
