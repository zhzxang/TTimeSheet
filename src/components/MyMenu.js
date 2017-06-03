import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet } from 'react-native';
import ev from '../services/event';

class MyMenu extends Component{
  render(){
    const { label,text } = this.props;
    return (
      <View style={[styles.main,{borderColor: config.draw[1]}]}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    marginTop:20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5
  },
  divider:{
    marginTop: 5,
    width: '70%'
  },
  label:{
    fontSize: 15,
    marginRight: 5
  },
  text:{
    fontSize: 18,
  }
});

export default MyMenu;