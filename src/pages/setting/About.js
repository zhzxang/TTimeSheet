import React, { Component } from 'react';

import { View,Text,StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar';

class About extends Component{
  back(){
    this.props.history.goBack();
  }
  render(){
    return (
      <View style={styles.main}>
        <NavBar
          title={'关于TimeSheet'}
          column={3}
          hide={'right'}
          leftIcon={'arrow-left'}
          leftEvent={this.back.bind(this)}/>
        <View style={styles.content}>
          <Text>
            版本号: v1.0.0
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
  },
  content:{
    padding: 5
  }
})


export default About;