import React, { Component } from 'react';
import config from '../config';

import {  Text, TouchableHighlight, View,StyleSheet } from 'react-native';

class MyDate extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const { complete=false } = this.props;
    return (
      <View style={styles.main}>
        <Text style={[styles.text,complete?{color:'#ccc'}:null]}>{this.props.h}</Text>
        <Text style={[styles.label,complete?{color:'#ccc'}:null]}>H</Text>
        <Text style={[styles.text,complete?{color:'#ccc'}:null]}>{this.props.m}</Text>
        <Text style={[styles.label,complete?{color:'#ccc'}:null]}>M</Text>
        <Text style={[styles.text,complete?{color:'#ccc'}:null]}>{this.props.s}</Text>
        <Text style={[styles.label,complete?{color:'#ccc'}:null]}>S</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    width: 100,
  },
  text:{
    fontSize: 20,
  },
  label:{
    fontSize: 20,
    marginRight: 3,
    color: config.draw[1]
  }
})

export default MyDate;