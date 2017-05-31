import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet } from 'react-native';
import ev from '../services/event';

class MyMenu extends Component{
  render(){
    const { label } = this.props;
    return (
      <View style={styles.main}>
        <Text style={styles.label}>{label}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: config.draw[1],
  },
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:10
  },
  row:{
    
  },
  divider:{
    marginTop: 5,
    
    width: '70%'
  },
  label:{
    fontSize: 18,
    marginTop:15
  }
});

export default MyMenu;