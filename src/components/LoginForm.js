import { Text } from 'react-native';
import React, {Component} from 'react';
import { Button, CardSection, Card, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component{

  state = { 'email': '', 'password': '', 'error': '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;
    this.setState({ error : '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSuccess() {
    this.setState({ loading: false, email: '', password: '' });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed', loading: false })
  }

  renderButton(){
    if(this.state.loading){
      return (<Spinner size='small' />);
    }else{
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
        Login
        </Button>
      );
    }
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          />
      </CardSection>
      <CardSection>
          {this.renderButton()}
      </CardSection>
      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </Card>
    );
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

export default LoginForm;
