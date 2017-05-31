import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet } from 'react-native';

class MyTimer extends Component{
  render(){
    const { time } = this.props;
    return (
      <View>
        <Text style={styles.title}>
          {time}
        </Text>
        <View style={styles.divider} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight: 'bold',
    marginTop:10
  },
  divider:{
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: config.draw[1],
    width: '70%'
  }
});

export default MyTimer;