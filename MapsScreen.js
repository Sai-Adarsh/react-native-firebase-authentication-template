import React, { Component } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import * as firebase from "firebase";
import MapView, { Marker } from 'react-native-maps';

class MapsScreen extends Component {
  onPressLogout = () => {
    try {
      firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, {firebase.auth().currentUser.email}</Text>
        <TouchableOpacity
            style={{padding: 15,
            width: 200,
            justifyContent: 'center',
            top: 230,
            borderRadius:5,
            backgroundColor:'#7303fc',
            alignItems: 'center'}}
            onPress={() => this.props.navigation.navigate('Legal')}>
            <Text style={styles.buttonText}> Second Screen </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{padding: 15,
            width: 200,
            justifyContent: 'center',
            top: 250,
            borderRadius:5,
            backgroundColor:'#000',
            alignItems: 'center'}}
            onPress={this.onPressLogout}>
            <Text style={styles.buttonText}> Logout </Text>
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

export default MapsScreen;
