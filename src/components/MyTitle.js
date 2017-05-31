import React, { Component } from 'react';
import config from '../config';
import { View, Text, StyleSheet } from 'react-native';
import ev from '../services/event';

class MyTitle extends Component{
  render(){
    const { title,label } = this.props;
    return (
      <View>
        <View style={styles.row}>
          {
            label&&<Text style={styles.label}>{label}:</Text>
          }
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
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
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider:{
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: config.draw[1],
    width: '70%'
  },
  label:{
    fontSize: 18,
    marginTop:15
  }
});

export default MyTitle;