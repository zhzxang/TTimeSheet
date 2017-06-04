import React, { Component } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyInput from '../MyInput';
import config from '../../config';

class CreateEvent extends Component{
  state={
    ev_name:''
  }
  createEvent(){
    const { ev_name } =this.state;
    this.props.createEvent.call(this,ev_name);
  }
  setText(text){
    this.setState({ev_name:text});
  }
  cancel(){
    this.props.cancel.call(this);
  }
  render(){
    return(
      <View style={styles.main}>
        <MyInput autoFocus={true} text={this.setText.bind(this)} style={{width:'100%'}} />
        <TouchableOpacity onPress={this.cancel.bind(this)} style={{}}>
          <Icon name="times" size={30} color={config.draw[0]}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.createEvent.bind(this)} style={{}}>
          <Icon name="check" size={30} color={config.draw[0]} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height:40
  }
});

export default CreateEvent;