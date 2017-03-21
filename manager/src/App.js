import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
