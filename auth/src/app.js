import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

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
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
