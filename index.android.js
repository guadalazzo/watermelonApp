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
          <View style={styles.titleContainer}>
            <Text style={styles.welcome}>
               <Image style={styles.watermelon} source={require('./img/watermelon.png')}/>
               Watermelon for life 
            </Text>
            
          </View>  
          <ScrollView style={styles.gallery}>
          <View style={styles.itemBox}>
            <Image style={styles.img} source={require('./img/relojwatermelon.jpg')}/>
            <Text style={styles.item}>Reloj Sandy 🍉</Text>
          </View>
          <View style={styles.itemBox}>
            <Image style={styles.img} source={require('./img/monedero.jpg')}/>
            <Text style={styles.item}>Reloj Sandy 🍉</Text>
          </View>
          </ScrollView>
          <Text style={styles.welcome}>Made by Lupe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  itemBox: {
    alignItems:'center',
    justifyContent:'center',
    width: 400,
    height: 300,
    borderColor: '#f5f5dc',
  },
  gallery: {
    marginTop: 20,
    width: 400,
  },
  img: {
    borderWidth: 1,
    //borderColor:'#000',
    borderRadius: 5,
    flex: 1,
    height: 350,
    width: 300,
    margin: 10,
  },
  titleContainer: {
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: 500,
    alignItems: 'center',
    height: 60,
    borderWidth:1,
    borderColor: 'pink',

  },
  watermelon: {
    marginTop: 10,
    marginBottom: 10,
    width: 60,
    height: 60,
  },
  welcome: {
    width: 300,
    fontWeight: 'bold',
    color: '#de8f84',
    fontSize: 25,
    textAlign: 'center',
    //margin: 10,
    justifyContent: 'space-between',
  },
  box:{
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
    backgroundColor: '#ffeded',
  },
  
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e2ffe5',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('watermelonApp', () => demo);
