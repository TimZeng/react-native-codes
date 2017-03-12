import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJwUTqgcOwC_aTxtrJHOYOomXPENa-zdY',
      authDomain: 'authentication-42a05.firebaseapp.com',
      databaseURL: 'https://authentication-42a05.firebaseio.com',
      storageBucket: 'authentication-42a05.appspot.com',
      messagingSenderId: '422512772919'
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
