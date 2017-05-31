import React, { Component } from 'react';
import config from '../config';

import {  Text, TouchableHighlight, View,StyleSheet } from 'react-native';

class MyDate extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.main}>
        <Text style={styles.text}>{this.props.h}</Text>
        <Text style={styles.label}>H</Text>
        <Text style={styles.text}>{this.props.m}</Text>
        <Text style={styles.label}>M</Text>
        <Text style={styles.text}>{this.props.s}</Text>
        <Text style={styles.label}>S</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text:{
    fontSize: 18,
  },
  label:{
    fontSize: 20,
    color: config.draw[1]
  }
})

export default MyDate;