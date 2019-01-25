/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from 'firebase';
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA6bIcmQlfspngA-LmGl23kavleI0daY98",
      authDomain: "auth-8e39b.firebaseapp.com",
      databaseURL: "https://auth-8e39b.firebaseio.com",
      projectId: "auth-8e39b",
      storageBucket: "auth-8e39b.appspot.com",
      messagingSenderId: "20299711255"
    });

    firebase.auth().onAuthStateChanged(user => {
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
        return <Button onPress={() => firebase.auth().signOut()}>Logout</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Ducere" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
