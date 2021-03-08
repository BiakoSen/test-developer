/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import MyStack from './components/stack'

class App extends Component{
  
  render(){
    return(<MyStack/>);
  } 
}



const styles = StyleSheet.create({
  
});

export default App;
