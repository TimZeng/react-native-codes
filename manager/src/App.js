import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCO3JMrRRplTK8JYSlLEUlcYlcCSzMeRk4',
      authDomain: 'manager-a09d9.firebaseapp.com',
      databaseURL: 'https://manager-a09d9.firebaseio.com',
      storageBucket: 'manager-a09d9.appspot.com',
      messagingSenderId: '27915850637'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
