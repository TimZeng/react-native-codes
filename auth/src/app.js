import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJwUTqgcOwC_aTxtrJHOYOomXPENa-zdY',
      authDomain: 'authentication-42a05.firebaseapp.com',
      databaseURL: 'https://authentication-42a05.firebaseio.com',
      storageBucket: 'authentication-42a05.appspot.com',
      messagingSenderId: '422512772919'
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
          <View style={styles.contentStyle}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
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

const styles = {
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45
  }
};

export default App;
