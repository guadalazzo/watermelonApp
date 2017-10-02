/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default class demo extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Image style={styles.watermelon} source={require('./img/watermelon.png')}/>
          <View style={styles.titleContainer}>
            <Text style={styles.welcome}>
              Watermelon for life 🍉 
            </Text>
          </View>  
        <View style={styles.box}>
          <Text style={styles.instructions}>
            This is a sassy flavoured mobile 📱 app
          </Text>
          <ScrollView style={styles.gallery}>
              <Image style={styles.img} source={require('./img/relojwatermelon.jpg')}/>
              <Image style={styles.img} source={require('./img/monedero.jpg')}/>
              <Image style={styles.img} source={require('./img/monedero.jpg')}/>
              <Image style={styles.img} source={require('./img/monedero.jpg')}/>
              <Image style={styles.img} source={require('./img/monedero.jpg')}/>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  watermelon: {
    width: 50,
    height: 50,
  },
  gallery: {
    marginTop: 20,
  },
  img: {
    borderWidth: 1,
    borderColor:'#000',
    borderRadius: 5,
    flex: 1,
    height: 350,
    width: 300,
    marginBottom: 30
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 300,
    borderRadius: 10,
    height: 50,
    borderWidth:1,
    borderColor: 'pink',

  },
  box:{
    backgroundColor: '#338779',
    width: 350,
    height: 450,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    shadowOffset: { width: 6, height: 7,},
    shadowOpacity: 1,
    shadowRadius: 9.51,
    shadowColor:'#ffffff',
    elevation: 15,
  },
  container: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#8c204b',
  },
  welcome: {
    fontWeight: 'bold',
    color: 'lightgreen',
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e2ffe5',
    marginBottom: 5,

  },
});

AppRegistry.registerComponent('watermelonApp', () => demo);
