import React, { Component } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import * as firebase from "firebase";

class SignupScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      text: '',
      password: ''
    };
  }

  onPressSignup = () => {
    console.log('Inside Signup Auth');
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.text, this.state.password)
    .then(() => this.props.navigation.navigate('Maps'))
    .catch(error => {Alert.alert(
      'Alert',
      error.message,
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
    )})
  }

  render () {
    return (
      <View style={styles.container}>
        <Image
          style={{height: 100, width: 100}}
          source = {require('./assets/forms.jpg')}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
          }}
        >{"\n"}Signup{"\n"}</Text>
        <TextInput
          style = {{width: 300, height: 50 }}
          label='Name'
          mode='outlined'
          selectionColor='#ff9900'
          underlineColor='#ff9900'
          value={this.state.displayName}
          onChangeText={displayName => this.setState({ displayName })}
        />
        <TextInput
          style = {{width: 300, height: 50 }}
          label='Email'
          mode='outlined'
          selectionColor='#ff9900'
          underlineColor='#ff9900'
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style = {{width: 300, height: 50 }}
          label='Password'
          mode='outlined'
          secureTextEntry={true}
          selectionColor='#ff9900'
          underlineColor='#ff9900'
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Text style={{color: '#7303fc', textDecorationLine: 'underline'}}
          onPress={() => this.props.navigation.navigate('Login')}>
          {"\n"}Login{"\n"}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress = {this.onPressSignup}>
          <Text style={styles.buttonText}> Signup </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    padding: 15,
    width: 300,
    borderRadius:5,
    backgroundColor:'#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default SignupScreen;
