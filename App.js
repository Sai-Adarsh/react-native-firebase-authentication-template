import React, { Component } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import  SignupScreen from './SignupScreen.js';
import LoginScreen from './LoginScreen.js';
import MapsScreen from './MapsScreen.js';
import * as firebase from "firebase";
import MapView, { Marker } from 'react-native-maps';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

class SplashScreen extends Component {
  componentDidMount(){
       this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Home');
       }, 2000);
  }
  componentWillUnmount(){
       clearTimeout(this.timeoutHandle);
  }
  render () {
    return (
      <View style={styles.splashContainer}>
        <Image
          style={{height: 100, width: 100}}
          source = {require('./assets/SplashScreen.png')}
        />
      </View>
    );
  }
}

class HomeScreen extends Component {
    componentDidMount() {
      const user = firebase.auth();
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Maps' : 'Login')
      })
    }
    render () {
      return (
        <View style={styles.container}>
        <Image
          style={{height: 100, width: 100}}
          source = {require('./assets/forms.jpg')}
        />
        <Text>{"\n"}</Text>
        <TouchableOpacity
          style={{padding: 15,
          width: 300,
          height: 70,
          justifyContent: 'center',
          borderRadius:5,
          backgroundColor:'#7303fc',
          alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          style={{padding: 15,
          width: 300,
          height: 70,
          justifyContent: 'center',
          borderRadius:5,
          backgroundColor:'#000',
          alignItems: 'center'}}
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.buttonText}> Signup </Text>
        </TouchableOpacity>
        </View>
      );
    }
}

class LegalScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Legal </Text>
      </View>
    );
  }
}

class App extends Component {
    render () {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Maps" component={MapsScreen}/>
            <Stack.Screen
              options={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: '#7303fc',
                },
                headerTintColor: '#fff',
              }}
             name="Legal" component={LegalScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
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
  splashContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#7303fc',
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
    backgroundColor:'#7303fc',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  mapContainer: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   justifyContent: 'flex-end',
   alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
