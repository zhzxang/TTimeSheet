import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import MyModal from '../components/MyModal';

class SettingPage extends Component{
  state={
    theme: false,
  }
  render(){
    return (
      <View style={styles.main}>
        <NavBar title={'Setting'} />
        <Text>SettingPage</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column'
  },
})


export default SettingPage;