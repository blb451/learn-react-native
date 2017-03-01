import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
