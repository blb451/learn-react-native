import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_gnALYcSFNSgMuKrg9JfRzOj8Yua2SEA',
      authDomain: 'auth-32f60.firebaseapp.com',
      databaseURL: 'https://auth-32f60.firebaseio.com',
      storageBucket: 'auth-32f60.appspot.com',
      messagingSenderId: '1016888651434'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
