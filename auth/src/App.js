import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_gnALYcSFNSgMuKrg9JfRzOj8Yua2SEA',
      authDomain: 'auth-32f60.firebaseapp.com',
      databaseURL: 'https://auth-32f60.firebaseio.com',
      storageBucket: 'auth-32f60.appspot.com',
      messagingSenderId: '1016888651434'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
