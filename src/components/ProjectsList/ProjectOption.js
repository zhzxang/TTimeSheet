import React, { Component } from 'react';

import { 
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../config';

class CreateEvent extends Component{
  goCreateEvent(){
    this.props.goCreateEvent.call(this);
  }
  deleteProject(){
    this.props.deleteProject.call(this);
  }
  render(){
    return(
      <View style={styles.main}>
        <TouchableOpacity onPress={this.goCreateEvent.bind(this)}>
          <Icon name="plus" size={30} color={config.draw[0]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteProject.bind(this)}>
          <Icon name="trash" size={30} color={config.draw[0]} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height:40
  }
});

export default CreateEvent;