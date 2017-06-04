import React, { Component } from 'react';

import { View,Text,StyleSheet,TouchableOpacity,Animated,Button } from 'react-native';
import NavBar from '../../components/NavBar';
import config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';

class Welcome extends Component{
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  save(){

  }
  componentDidMount() {
    this.state.bounceValue.setValue(400);
    Animated.timing(
      this.state.bounceValue,
      {
        duration: 3,

      }
    ).start();
  }
  render(){
    return (
      <Animated.View style={[styles.main,{
        top: this.state.bounceValue

      }]}>
        <NavBar title={'TimeSheet'} />
        <View style={styles.content}>
          <Text>
            欢迎使用TimeSheet!
          </Text>
        </View>
        <Button onPress={()=>this.props.history.push('/project_create')} title='新建项目'/>
      </Animated.View>
    )
  }

}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'column',
  },
  content:{
    padding: 5,
    marginTop: 5,
    justifyContent:'center',
    alignItems: 'center',
  }
})

const getState =(state)=>{
  return {
    current_data: state.current_data
  }
}

export default Welcome;